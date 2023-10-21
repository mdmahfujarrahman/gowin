export const envConfig = {
  serverUrl:
    process.env.NODE_ENV === 'production'
      ? process.env.SERVER_URL
      : 'http://localhost:3000',
};
