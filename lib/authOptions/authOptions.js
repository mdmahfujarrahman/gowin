import { envConfig } from '../config';
import CredentialProvider from 'next-auth/providers/credentials';
import { User } from '../../model/user/user.model';
import bcrypt from 'bcrypt';
import { getServerSession } from 'next-auth/next';
import dbConnect from '../db/db.connect';

export const authOptions = {
  providers: [
    CredentialProvider({
      async authorize(credentials) {
        await dbConnect();
        const { phoneNumber, countryCode } = credentials;
        const user = await User.isUserExist(phoneNumber, countryCode);
        if (!user) {
          throw new Error(
            JSON.stringify({
              message: 'User Not found, Please check your phone number',
              status: false,
            }),
          );
        }
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isMatch) {
          throw new Error(
            JSON.stringify({ message: 'Invalid Password', status: false }),
          );
        }
        if (user.status === 'pending') {
          throw new Error(
            JSON.stringify({
              message: 'Your account is not verified yet',
              status: false,
            }),
          );
        }
        console.log(user);
        return {
          _id: user._id,
        };
      },
    }),
  ],
  secret: envConfig.nextsecret,
  callbacks: {
    async session({ session, token }) {
      const user = await User.findById(token._id).select('-password');
      session.user = {
        ...token,
        role: user.role,
        status: user.status,
        image: user.profilePicture,
      };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token = {
          ...token,
          ...user,
        };
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/',
  },
};

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  console.log('session', session);
  return session;
}
