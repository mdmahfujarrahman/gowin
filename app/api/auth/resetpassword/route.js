// Import error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the sendResponse helper
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
// Import the user model
import { PasswordReset } from '../../../../model/resetPassword/resetPassword.model.js';
import httpStatus from 'http-status';
import { headers } from 'next/headers';
import bcrypt from 'bcryptjs';
import { User } from '../../../../model/user/user.model.js';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function PATCH(req) {
  const cookie = headers();
  const token = cookie.get('cookies').split('=')[1].replace('; path', '');
  const body = await req.json();
  try {
    await dbConnect();
    if (!token) {
      return sendResponse(
        {
          success: true,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Unauthorized user',
          data: [],
        },
        httpStatus.UNAUTHORIZED,
      );
    }

    const verifyToken = await PasswordReset.verifyPasswordToken(token);

    if (verifyToken) {
      const hashPassword = await bcrypt.hash(body.password, 12);
      const updatePassword = await User.findOneAndUpdate(
        {
          _id: verifyToken.userId,
        },
        {
          password: hashPassword,
        },
        {
          new: true,
        },
      ).select('-password');
      return sendResponse(
        {
          success: true,
          statusCode: 200,
          message: 'Password updated successfully',
          data: updatePassword,
        },
        200,
      );
    }
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}
