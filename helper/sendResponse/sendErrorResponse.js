/**
 *
 * @param {{status: boolean, message: string, errorMessage: Array, stack: Array}} options
 * @param {number} statusCode
 * @returns
 */

const sendErrorResponse = (options, statusCode) => {
  const response = Response.json(options, {
    status: statusCode,
  });
  return response;
};

export default sendErrorResponse;
