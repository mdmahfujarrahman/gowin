// Load the module dependencies
import sendResponse from '../../../../../helper/sendResponse/sendResponse.js';
// Import the error handler
import errorHandler from '../../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../../lib/db/db.connect.js';
// Import the user model
import { User } from '../../../../../model/user/user.model.js';
import { getToken } from 'next-auth/jwt';
import { envConfig } from '../../../../../lib/config/index.js';
import httpStatus from 'http-status';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

const actionType = {
  delete: 'delete',
};

const UpdateUserAction = async userId => {
  const updateUser = await User.findOneAndDelete({
    _id: userId,
  });
  return updateUser;
};

export async function PATCH(req) {
  try {
    const body = await req.json();
    if (!body?.type) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.BAD_REQUEST,
          message: 'Type is required',
        },
        httpStatus.BAD_REQUEST,
      );
    }

    if (!body?.userId) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.BAD_REQUEST,
          message: 'User Id is required',
        },
        httpStatus.BAD_REQUEST,
      );
    }

    if (!Object.values(actionType).includes(body?.type)) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.BAD_REQUEST,
          message: 'Invalid type',
        },
        httpStatus.BAD_REQUEST,
      );
    }
    await dbConnect();
    const token = await getToken({ req, secret: envConfig.nextsecret });
    if (!token) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Unauthorized Request',
        },
        httpStatus.UNAUTHORIZED,
      );
    }
    const isAdmin = await User.isAdmin(token?._id);
    if (isAdmin) {
      const getUser = await User.findOne({
        _id: body?.userId,
      });

      if (!getUser) {
        return sendResponse(
          {
            success: false,
            statusCode: httpStatus.BAD_REQUEST,
            message: 'User not found',
          },
          httpStatus.BAD_REQUEST,
        );
      }

      if (actionType[body?.type]) {
        const updateUser = await UpdateUserAction(body?.userId);
        return sendResponse(
          {
            success: true,
            statusCode: 200,
            message: 'User deleted successfully',
            data: updateUser,
          },
          200,
        );
      }
    }
  } catch (error) {
    return errorHandler(error);
  }
}
