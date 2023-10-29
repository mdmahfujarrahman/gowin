// Load the module dependencies
// Import the error handler
// Import the database connection
// Import the user model
import errorHandler from '../../../../../errorHandler.js';
import sendResponse from '../../../../../helper/sendResponse/sendResponse.js';
import { UserValidation } from '../../../../../helper/zodValidation/user/Api/user.validation.js';
import dbConnect from '../../../../../lib/db/db.connect.js';
import { User } from '../../../../../model/user/user.model.js';
// Import the validation schema

/**
 * Create a new user
 *
 * This route allows you to create a new user by providing user data in the request body.
 * @route /api/v1/user
 * @method POST
 * @access Public
 * @type {NextRequest} req - The NextRequest object represents the HTTP request.
 * @param {Object} req - The HTTP request object
 * @returns {NextResponse} A NextResponse object
 */
export async function POST(req) {
  try {
    // Parse the request body as JSON
    const body = await req.json();
    // Validate the request body against the expected schema using `zod`
    UserValidation.UserCreateSchema.parse(body);
    // Connect to the database
    await dbConnect();

    const user = await User.create(body);
    // Send the response
    return sendResponse(
      {
        sucess: true,
        statusCode: 200,
        message: 'User Created Suceesfully',
        data: user,
      },
      200,
    );
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}
