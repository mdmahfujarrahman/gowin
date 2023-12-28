// Import error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the sendResponse helper
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
// Import the user model
import { PasswordReset } from '../../../../model/resetPassword/resetPassword.model.js';
import httpStatus from 'http-status';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function POST(req) {
  const body = await req.json();
  try {
    await dbConnect();
    if (!body?.userId) {
      return sendResponse(
        {
          success: true,
          statusCode: httpStatus.BAD_REQUEST,
          message: 'Something went wrong',
          data: [],
        },
        httpStatus.BAD_REQUEST,
      );
    }
    const createToken = await PasswordReset.setResetPasswordToken(body?.userId);

    // Send the response
    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Token created successfully',
        data: createToken,
      },
      200,
    );
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}
