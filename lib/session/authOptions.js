// import jsonwebtoken from 'jsonwebtoken';

import { envConfig } from '../config/index';

export const authOptions = {
  callbacks: {
    // async session({ session }) {
    //   const phoneNumber = session.user?.phoneNumber;
    //   try {
    //   } catch (error) {
    //     return session;
    //   }
    // },
  },
  secret: envConfig.nextsecret,
};
