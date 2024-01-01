// Import error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the sendResponse helper
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
import { Result } from '../../../../model/result/result.model.js';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET() {
  try {
    await dbConnect();

    const res = await Result.previousResult();

    // Send the response
    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Result Retrived Suceesfully',
        data: res,
      },
      200,
    );
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}
