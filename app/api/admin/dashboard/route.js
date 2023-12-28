// Load the module dependencies
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
// Import the error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the user model
import { User } from '../../../../model/user/user.model.js';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

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
    const filterActive = users.filter(
      user => user?.status === 'active' && user?.role === 'user',
    );
    const filterInactive = users.filter(
      user => user?.status === 'pending' && user?.role === 'user',
    );
    const filterRejected = users.filter(
      user => user?.status === 'rejected' && user?.role === 'user',
    );
    // get new users 7 days
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const filterNewUsers = users.filter(user => {
      const userCreatedAt = new Date(user.createdAt);
      return user?.role === 'user' && userCreatedAt >= oneWeekAgo;
    });

    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'User retrived successfully',
        data: {
          active: filterActive?.length,
          pending: filterInactive?.length,
          rejected: filterRejected?.length,
          newUsers: filterNewUsers?.length,
        },
      },
      200,
    );
  } catch (error) {
    return errorHandler(error);
  }
}
