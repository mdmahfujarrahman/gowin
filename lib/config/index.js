export const envConfig = {
  env: process.env.NODE_ENV,
  serverUrl:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_SERVER_URL_LOCAL
      : process.env.NEXT_PUBLIC_SERVER_URL,
  ipconfig: process.env.NEXT_PUBLIC_IPCONFIG,
  ipkey: process.env.NEXT_PUBLIC_IPKEY,
  nextsecret: process.env.NEXTAUTH_SECRET,
  mongodburi: process.env.MONGO_URL,
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  },
};
