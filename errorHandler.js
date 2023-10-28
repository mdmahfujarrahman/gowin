import { ZodError } from 'zod';
import ApiError from './helper/customError/ApiError';
import sendErrorResponse from './helper/sendResponse/sendErrorResponse';
import { envConfig } from './lib/config';

export default async function errorHandler(error) {
  let statusCode = 400;
  let message = 'Internal Server Error';
  let errorMessages = [];
  if (error.name === 'ValidationError') {
    statusCode = 400;
    message = 'ValidationError';
    errorMessages = Object.values(error.errors).map(err => {
      return {
        path: err.path,
        message: err.message,
      };
    });
  } else if (error instanceof ZodError) {
    statusCode = 400;
    message = 'Validation Error';
    errorMessages = error.issues.map(i => {
      return {
        path: i?.path[i?.path.length - 1],
        message: i?.message,
      };
    });
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : [];
  } else if (error instanceof Error) {
    console.log(error);
    statusCode = 500;
    message = error?.message;
    errorMessages = [{ path: '', message: error.message }];
  }

  return sendErrorResponse(
    {
      sucess: false,
      message,
      errorMessage: errorMessages,
      stack: envConfig.env !== 'production' ? error?.stack : undefined,
    },
    statusCode,
  );
}
