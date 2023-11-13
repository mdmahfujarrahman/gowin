// Import error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the sendResponse helper
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
// Import the user model
import { User } from '../../../../model/user/user.model.js';

export async function GET(req) {
  const phoneNumber = req.nextUrl.searchParams.get('phoneNumber');
  const countryCode = req.nextUrl.searchParams.get('countryCode');
  try {
    await dbConnect();
    console.log(phoneNumber, countryCode);
    const isExist = await User.isUserExist(phoneNumber, countryCode);

    if (!isExist) {
      return sendResponse(
        {
          sucess: true,
          statusCode: 200,
          message: 'User Retrived Suceesfully',
          data: "User doesn't exist",
        },
        200,
      );
    }

    // Send the response
    return sendResponse(
      {
        sucess: true,
        statusCode: 200,
        message: 'User Retrived Suceesfully',
        data: isExist,
      },
      200,
    );
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}
