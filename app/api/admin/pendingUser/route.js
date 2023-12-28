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

export async function GET(req) {
  const status = req.nextUrl.searchParams.get('status');
  try {
    await dbConnect();
    const users = await User.find({}).select('-password');

    if (status) {
      const filterActive = users.filter(
        user => user?.status === status && user?.role === 'user',
      );
      return sendResponse(
        {
          success: true,
          statusCode: 200,
          message: 'User retrived successfully',
          data: filterActive,
        },
        200,
      );
    }

    const filterInactive = users.filter(
      user => user?.status === 'pending' && user?.role === 'user',
    );
    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Pending user retrived successfully',
        data: filterInactive,
      },
      200,
    );
  } catch (error) {
    return errorHandler(error);
  }
}
