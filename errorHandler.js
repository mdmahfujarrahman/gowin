// Import the ZodError class
import { ZodError } from 'zod';
// Import the ApiError class
import ApiError from './helper/customError/ApiError';
// Import the sendErrorResponse function
import sendErrorResponse from './helper/sendResponse/sendErrorResponse';
// Import the env config
import { envConfig } from './lib/config';

/**
 * Handle errors and return an error response
 *
 * This function handles all the errors and returns an error response.
 *
 * @function errorHandler
 * @memberof Healper
 * @param {Error} error - The error object
 * @returns {Object} An error response containing status code, message, error message and stack trace.
 * @author mdmahfujarrahman
 * @since 28/10/2028
 */

export default async function errorHandler(error) {
  let statusCode = 400;
  let message = 'Internal Server Error';
  let errorMessages = [];

  if (error.name === 'ValidationError') {
    message = 'ValidationError';
    // convert mongoose validation error to array
    errorMessages = Object.values(error.errors).map(err => {
      return {
        path: err.path,
        message: err.message,
      };
    });
  } else if (error instanceof ZodError) {
    message = 'Validation Error';
    // convert zod validation error to array
    errorMessages = error.issues.map(i => {
      return {
        path: i?.path[i?.path.length - 1],
        message: i?.message,
      };
    });
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    // APiError class has a property called errors which is an array of objects
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : [];
  } else if (error instanceof Error) {
    statusCode = 500;
    message = error?.message;
    errorMessages = [{ path: '', message: error.message }];
  }

  // Send the response
  return sendErrorResponse(
    {
      success: false,
      message,
      errorMessage: errorMessages,
      stack: envConfig.env !== 'production' ? error?.stack : undefined,
    },
    statusCode,
  );
}
