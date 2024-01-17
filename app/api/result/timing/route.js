// Import error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the sendResponse helper
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
import { ClockTiming } from '../../../../model/clockTiming/clockTiming.model.js';
import { User } from '../../../../model/user/user.model.js';
import httpStatus from 'http-status';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET() {
  try {
    await dbConnect();
    const res = await ClockTiming.find();

    // Send the response
    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Timing Retrived Suceesfully',
        data: res,
      },
      200,
    );
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    if (!body.userId) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.NOT_FOUND,
          message: 'User Id is required',
        },
        httpStatus.NOT_FOUND,
      );
    }
    const user = await User.getSingleUser(body.userId);
    if (user.role !== 'admin') {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'User not admin',
        },
        httpStatus.UNAUTHORIZED,
      );
    }

    const res = await ClockTiming.create(body);

    // Send the response
    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Timing Retrived Suceesfully',
        data: res,
      },
      200,
    );
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}

export async function PATCH(req) {
  try {
    await dbConnect();
    const body = await req?.json();

    if (!body.userId) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.NOT_FOUND,
          message: 'User Id is required',
        },
        httpStatus.NOT_FOUND,
      );
    }
    if (!body.userId == 'system') {
      const user = await User.getSingleUser(body.userId);

      if (user.role !== 'admin') {
        return sendResponse(
          {
            success: false,
            statusCode: httpStatus.UNAUTHORIZED,
            message: 'User not admin',
          },
          httpStatus.UNAUTHORIZED,
        );
      }
    }

    if (!body.id) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.NOT_FOUND,
          message: 'Id is required',
        },
        httpStatus.NOT_FOUND,
      );
    }

    const res = await ClockTiming.findOneAndUpdate(
      {
        _id: body.id,
      },
      body,
      { new: true },
    );

    // Send the response
    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Timing Update Suceesfully',
        data: res,
      },
      200,
    );
  } catch (error) {
    // Handle errors and return an error response
    return errorHandler(error);
  }
}
