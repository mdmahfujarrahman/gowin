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

const actionType = {
  approve: 'approve',
  reject: 'reject',
};

const UpdateUserAction = async (userId, type) => {
  const updateUser = await User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $set: {
        status: type,
      },
    },
    {
      new: true,
    },
  ).select('-password');
  return updateUser;
};

export async function PATCH(req) {
  try {
    const body = await req.json();
    console.log(body);
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
      console.log('isAdmin');
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

      if (body?.type === actionType.approve) {
        const updateUser = await UpdateUserAction(body?.userId, 'active');
        return sendResponse(
          {
            success: true,
            statusCode: 200,
            message: 'User approved successfully',
            data: updateUser,
          },
          200,
        );
      } else if (body?.type === actionType.reject) {
        const updateUser = await UpdateUserAction(body?.userId, 'reject');
        return sendResponse(
          {
            success: true,
            statusCode: 200,
            message: 'User rejected successfully',
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
