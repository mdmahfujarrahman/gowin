import { Result } from '../../../../model/result/result.model.js';
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';

export async function GET(req) {
  const resultId = req.nextUrl.searchParams.get('resultId');
  const type = req.nextUrl.searchParams.get('type');
  try {
    await dbConnect();
    if (!type) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'type is required',
        },
        400,
      );
    }

    if (type === 'single') {
      if (!resultId) {
        return sendResponse(
          {
            success: false,
            statusCode: 400,
            message: 'resultId is required',
          },
          400,
        );
      }

      const res = await Result.findOne({ _id: resultId });
      if (!res) {
        return sendResponse(
          {
            success: false,
            statusCode: 400,
            message: 'No Result Found',
          },
          400,
        );
      }

      return sendResponse(
        {
          success: true,
          statusCode: 200,
          message: 'Result Retrived Suceesfully',
          data: res,
        },
        200,
      );
    }
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}
