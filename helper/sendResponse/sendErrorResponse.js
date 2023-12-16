/**
 * Handle errors and return an error response
 *
 * This function handles all the errors and returns an error response.
 *
 * @param {{success: boolean , message: string, errorMessage: Array, stack: Array}} options
 * @param {number} statusCode
 * @returns {Object} An error response containing status code, message, error message and stack trace.
 * @author mdmahfujarrahman
 * @since 28/10/2028
 */

const sendErrorResponse = (options, statusCode) => {
  // Send the response
  const response = Response.json(options, {
    status: statusCode,
  });
  return response;
};

export default sendErrorResponse;
