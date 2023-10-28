/**
 * Sends a JSON response to the client.
 *
 * @param {{sucess: boolean ,statusCode: number, message: string, data: T}} data The data to send in the response.
 * @param {{statusCode: number}} options The response status code.
 * @returns {NextResponse} A NextResponse object.
 */
const sendResponse = (data, statusCode) => {
  return Response.json(
    { data },
    {
      status: statusCode,
    },
  );
};

export default sendResponse;
