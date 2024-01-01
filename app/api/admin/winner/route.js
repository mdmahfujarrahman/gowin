/* eslint-disable no-unsafe-optional-chaining */
// Load the module dependencies
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
// Import the error handler
import errorHandler from '../../../../errorHandler.js';
// Import the database connection
import dbConnect from '../../../../lib/db/db.connect.js';
// Import the user model
import { User } from '../../../../model/user/user.model.js';

import moment from 'moment';
import { Winner } from '../../../../model/winner/winner.model.js';
import { Result } from '../../../../model/result/result.model.js';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import { filterWinners } from './utils.js';
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
  const winnerId = req.nextUrl.searchParams.get('winnerId');
  const type = req.nextUrl.searchParams.get('type');
  const resultId = req.nextUrl.searchParams.get('resultId');
  try {
    await dbConnect();

    if (!type) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: `Type is required`,
          data: null,
        },
        400,
      );
    }

    if (type === 'single') {
      if (resultId) {
        const winner = await Winner.findOne({
          title: resultId,
        }).lean();

        if (!winner) {
          return sendResponse(
            {
              success: false,
              statusCode: 400,
              message: 'Winner not found',
              data: null,
            },
            400,
          );
        }

        return sendResponse(
          {
            success: true,
            statusCode: 200,
            message: 'Winner retrived successfully',
            data: winner,
          },
          200,
        );
      } else {
        const winner = await Winner.findOne({
          _id: winnerId,
        }).lean();

        if (!winner) {
          return sendResponse(
            {
              success: false,
              statusCode: 400,
              message: 'Winner not found',
              data: null,
            },
            400,
          );
        }

        return sendResponse(
          {
            success: true,
            statusCode: 200,
            message: 'Winner retrived successfully',
            data: winner,
          },
          200,
        );
      }
    }

    if (type === 'all') {
      const winner = await Winner.find().lean();

      if (!winner) {
        return sendResponse(
          {
            success: false,
            statusCode: 400,
            message: 'Winner not found',
            data: null,
          },
          400,
        );
      }

      return sendResponse(
        {
          success: true,
          statusCode: 200,
          message: 'Winner retrived successfully',
          data: winner,
        },
        200,
      );
    }
  } catch (error) {
    return errorHandler(error);
  }
}
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const isExist = await User.findOne({
      _id: body.id,
    });

    if (!isExist) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'User not found',
          data: null,
        },
        400,
      );
    }

    if (isExist.role !== 'admin') {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'You are not admin',
          data: null,
        },
        400,
      );
    }

    const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

    const payload = {
      winners: {
        superSix: [],
        funFour: [],
        luckeyThree: [],
      },
      canditates: [],
      resultImage: null,
      title: `Draw Results ${moment(date).format('DD MMM YYYY')}`,
      winnersCode: `gowin${moment(date).format('DDMMYYYY')}${moment(
        date,
      ).format('HHmmss')}`,
    };

    const previousWinners = await Winner.previousWinners();

    if (previousWinners.length === 0) {
      const winner = await Winner.create(payload);
      return sendResponse(
        {
          success: true,
          statusCode: 200,
          message: 'User retrived successfully',
          data: winner,
        },
        200,
      );
    }

    if (previousWinners[0].title === payload.title) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'Draw result already generated',
          data: null,
        },
        400,
      );
    }

    const winner = await Winner.create(payload);
    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Draw result generated',
        data: winner,
      },
      200,
    );
  } catch (error) {
    return errorHandler(error);
  }
}
export async function PATCH(req) {
  try {
    await dbConnect();
    const body = await req.json();

    if (!body.userId) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'User Id is required',
          data: null,
        },
        400,
      );
    }
    if (body.userId !== 'system') {
      const isExist = await User.findOne({
        _id: body.userId,
      });

      if (!isExist) {
        return sendResponse(
          {
            success: false,
            statusCode: 400,
            message: 'User not found',
            data: null,
          },
          400,
        );
      }

      if (isExist.role !== 'admin') {
        return sendResponse(
          {
            success: false,
            statusCode: 400,
            message: 'You are not admin',
            data: null,
          },
          400,
        );
      }

      const isWinnerExist = await Winner.findOne({
        _id: body.winnerId,
      }).lean();

      if (!isWinnerExist) {
        return sendResponse(
          {
            success: false,
            statusCode: 400,
            message: 'Winner not found',
            data: null,
          },
          400,
        );
      }

      if (body?.canditates?.length > 0) {
        const filterCanditates = body?.canditates?.filter(
          canditate =>
            !isWinnerExist?.canditates
              ?.map(id => id?.toString())
              .includes(canditate),
        );

        const payload =
          isWinnerExist?.canditates?.length === 0
            ? body?.canditates
            : [...isWinnerExist?.canditates, ...filterCanditates];

        const updateCanditates = await Winner.findOneAndUpdate(
          {
            _id: body.winnerId,
          },
          {
            canditates: payload,
          },
          {
            new: true,
          },
        );

        return sendResponse(
          {
            success: true,
            statusCode: 200,
            message: 'Result updated',
            data: updateCanditates,
          },
          200,
        );
      }

      if (
        body?.winners?.superSix.length > 0 ||
        body?.winners?.funFour.length > 0 ||
        body?.winners?.luckeyThree.length > 0
      ) {
        const updatedWinners = filterWinners(
          body?.winners,
          isWinnerExist.winners,
          isWinnerExist.canditates,
        );

        const updateWinners = await Winner.findOneAndUpdate(
          {
            _id: body.winnerId,
          },
          {
            winners: updatedWinners,
          },
          {
            new: true,
          },
        );

        return sendResponse(
          {
            success: true,
            statusCode: 200,
            message: 'Result updated',
            data: updateWinners,
          },
          200,
        );
      }
    }

    if (!body.resultId) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'Result Id is required',
          data: null,
        },
        400,
      );
    }

    const checkPreviousResult = await Result.findOne({
      _id: body?.resultId,
    }).lean();

    if (checkPreviousResult.length === 0) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'Result not found',
          data: null,
        },
        400,
      );
    }

    const isExist = await Winner.findOne({
      title: checkPreviousResult.title,
    });

    if (!isExist) {
      return sendResponse(
        {
          success: false,
          statusCode: 400,
          message: 'Result not found',
          data: null,
        },
        400,
      );
    }

    if (body?.resultId && body.userId === 'system') {
      const checkPreviousResult = await Result.findOne({
        _id: body.resultId,
      });

      const updateResultImage = await Winner.findOneAndUpdate(
        {
          _id: isExist?._id,
        },
        {
          resultImage: checkPreviousResult?._id,
        },
        {
          new: true,
        },
      );

      return sendResponse(
        {
          success: true,
          statusCode: 200,
          message: 'Result updated',
          data: updateResultImage,
        },
        200,
      );
    }
  } catch (error) {
    return errorHandler(error);
  }
}
