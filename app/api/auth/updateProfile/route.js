// Import error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the sendResponse helper
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
// Import the user model
import { User } from '../../../../model/user/user.model.js';

export async function PATCH(req) {
  const body = await req.json();
  try {
    await dbConnect();
    const update = await User.findOneAndUpdate(
      {
        _id: body.id,
      },
      body,
      {
        new: true,
      },
    );

    // Send the response
    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'User Update Suceesfully',
        data: update,
      },
      200,
    );
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}
