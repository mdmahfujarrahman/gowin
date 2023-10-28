import sendResponse from '../../../../helper/sendResponse/SendResponse.js';
import errorHandler from '../../../../errorHandler.js';
import dbConnect from '../../../../lib/db/db.connect.js';
import { User } from '../../../../model/user/User.model.js';
import { UserValidation } from '../../../../helper/zodValidation/user/Api/user.validation.js';

export async function POST(req) {
  try {
    const body = await req.json();
    UserValidation.UserCreateSchema.parse(body);
    await dbConnect();
    const user = await User.create(body);
    return sendResponse(
      {
        sucess: true,
        data: user,
        message: 'User Created Suceesfully',
        statusCode: 200,
      },
      200,
    );
  } catch (error) {
    return errorHandler(error);
  }
}
