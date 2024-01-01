// Load the module dependencies
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
// Import the error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the user model
import { PendingWinners } from '../../../../model/pendingWinners/pendingWinners.model.js';
import { getToken } from 'next-auth/jwt';
import { envConfig } from '../../../../lib/config/index.js';
import httpStatus from 'http-status';
import { User } from '../../../../model/user/user.model.js';
import { PendingWinnerValidation } from '../../../../helper/zodValidation/pedningWinner/api/pendingWinner.validation.js';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET(req) {
  const token = await getToken({ req, secret: envConfig.nextsecret });
  try {
    await dbConnect();
    if (!token) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Unauthorized Request',
        },
        httpStatus.UNAUTHORIZED,
      );
    }

    const isAdmin = await User.isAdmin(token?._id);
    if (!isAdmin) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Unauthorized Request',
        },
        httpStatus.UNAUTHORIZED,
      );
    }

    const pending = await PendingWinners.find({}).populate('winners.winner');

    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Pending Winner Retrived Successfully',
        data: pending[0],
      },
      200,
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(req) {
  const token = await getToken({ req, secret: envConfig.nextsecret });
  try {
    await dbConnect();
    const body = await req.json();

    console.log(req);
    console.log(body);

    PendingWinnerValidation.PendingWinnerSchema.parse(body);

    if (!token) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Unauthorized Request',
        },
        httpStatus.UNAUTHORIZED,
      );
    }

    const isAdmin = await User.isAdmin(token?._id);
    if (!isAdmin) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Unauthorized Request',
        },
        httpStatus.UNAUTHORIZED,
      );
    }

    let paylaod = {
      winner: [],
    };
    paylaod = {
      ...paylaod,
      winners: [...paylaod.winner, body],
    };

    const pending = await PendingWinners.create(paylaod);

    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Pending Winner Added Successfully',
        data: pending,
      },
      200,
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PUT(req) {
  const token = await getToken({ req, secret: envConfig.nextsecret });
  try {
    await dbConnect();
    const body = await req.json();

    PendingWinnerValidation.PendingWinnerSchema.parse(body);

    if (!token) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Unauthorized Request',
        },
        httpStatus.UNAUTHORIZED,
      );
    }

    const isAdmin = await User.isAdmin(token?._id);
    if (!isAdmin) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Unauthorized Request',
        },
        httpStatus.UNAUTHORIZED,
      );
    }

    const getPendingwinners = await PendingWinners.find({});
    const pendingWinner = getPendingwinners[0];
    console.log(pendingWinner);
    const isExist = pendingWinner.winners.find(
      item => item?.winner?.toString() === body?.winner,
    );
    console.log(isExist);
    if (isExist) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.BAD_REQUEST,
          message: 'Winner Already Exist',
        },
        httpStatus.BAD_REQUEST,
      );
    }

    const peyload = {
      winner: [...pendingWinner.winners, body],
    };

    console.log(peyload);

    const pending = await PendingWinners.findByIdAndUpdate(
      pendingWinner._id,
      { $push: { winners: body } },
      { new: true },
    ).populate('winners.winner');

    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Pending Winner Updated Successfully',
        data: pending,
      },
      200,
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PATCH(req) {
  const token = await getToken({ req, secret: envConfig.nextsecret });
  try {
    await dbConnect();
    const body = await req.json();

    PendingWinnerValidation.PendingWinnerSchema.parse(body);

    if (!token) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Unauthorized Request',
        },
        httpStatus.UNAUTHORIZED,
      );
    }

    const isAdmin = await User.isAdmin(token?._id);
    if (!isAdmin) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Unauthorized Request',
        },
        httpStatus.UNAUTHORIZED,
      );
    }

    const getPendingwinners = await PendingWinners.find({});
    const pendingWinner = getPendingwinners[0];
    const isExist = pendingWinner.winners.find(
      item => item._id.toString() === body.winner,
    );

    if (isExist) {
      return sendResponse(
        {
          success: false,
          statusCode: httpStatus.BAD_REQUEST,
          message: 'Winner Already Exist',
        },
        httpStatus.BAD_REQUEST,
      );
    }

    const pending = await PendingWinners.findByIdAndUpdate(
      body._id,
      { $set: { winners: body.winners } },
      { new: true },
    );

    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Pending Winner Updated Successfully',
        data: pending,
      },
      200,
    );
  } catch (error) {
    return errorHandler(error);
  }
}
