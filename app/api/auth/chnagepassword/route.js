// Import error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the sendResponse helper
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
// Import the user model
import { User } from '../../../../model/user/user.model.js';
import bcrypt from 'bcryptjs';

export async function PATCH(req) {
  const body = await req.json();
  try {
    await dbConnect();

    if (!body.id) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'User Id is required',
          data: null,
        },
        400,
      );
    }

    if (!body.oldPassword) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'Old Password is required',
          data: null,
        },
        400,
      );
    }

    if (!body.newPassword) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'New Password is required',
          data: null,
        },
        400,
      );
    }

    const isExist = await User.findById(body.id);

    if (!isExist) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'User not found',
          data: null,
        },
        400,
      );
    }

    const isMatch = await bcrypt.compare(body.oldPassword, isExist.password);

    if (!isMatch) {
      return sendResponse(
        {
          success: false,
          statusCode: 200,
          message: 'Old Password is not match',
          data: null,
        },
        200,
      );
    }

    const salt = bcrypt.genSaltSync(12);

    const updatePassword = await User.findOneAndUpdate(
      {
        _id: body.id,
      },
      {
        password: await bcrypt.hash(body.newPassword, salt),
      },
      {
        new: true,
      },
    );

    // Send the response
    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'User password update successfully',
        data: updatePassword,
      },
      200,
    );
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}
