import mongoose from 'mongoose';
import { envConfig } from '../config';
import ApiError from '../../helper/customError/ApiError';

const mongodb = envConfig.mongodburi;
if (!mongodb) {
  throw new ApiError(500, 'MongoDB URI not found');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      bufferCommands: false,
    };
    cached.promise = await mongoose.connect(mongodb, opts).then(mongoose => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;

  if (cached.conn) {
    console.log('🚀 Database connected');
  } else {
    console.log('❌ Database connection failed');
  }

  return cached.conn;
}

export default dbConnect;
