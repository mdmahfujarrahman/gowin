import errorHandler from '../../../../../errorHandler';
import dbConnect from '../../../../../lib/db/db.connect';
import sendResponse from '../../../../../helper/sendResponse/sendResponse';
import { User } from '../../../../../model/user/user.model';

export async function GET(req) {
  const phoneNumber = req.nextUrl.searchParams.get('phoneNumber');
  const countryCode = req.nextUrl.searchParams.get('countryCode');
  try {
    await dbConnect();
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
