// Load the module dependencies
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
// Import the error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the user model
import { User } from '../../../../model/user/user.model.js';

/**
 * Get all users
 *
 * This route allows you to get all users.
 * @route /api/admin/user
 * @method GET
 * @access Private
 * @type {NextRequest} req - The NextRequest object represents the HTTP request.
 * @param {Object} req - The HTTP request object
 * @returns {NextResponse} A NextResponse object
 */

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    return sendResponse(
      {
        sucess: true,
        statusCode: 200,
        message: 'User retrived successfully',
        data: users,
      },
      200,
    );
  } catch (error) {
    return errorHandler(error);
  }
}
