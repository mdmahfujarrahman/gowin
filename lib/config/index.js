export const envConfig = {
  serverUrl:
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_SERVER_URL,
};
