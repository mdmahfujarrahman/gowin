import mongoose, { Schema, model } from 'mongoose';
import ApiError from '../../helper/customError/ApiError';
import httpStatus from 'http-status';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    countryCode: {
      type: String,
      required: [true, 'Country code is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      length: [6, 'Password must be at least 6 characters'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    profilePicture: {
      type: String,
      required: [true, 'Profile picture is required'],
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.statics.isUserExist = async function (phoneNumber, countryCode) {
  const user = await this.findOne({
    phoneNumber: phoneNumber,
    countryCode: countryCode,
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  return user;
};

UserSchema.pre('save', async function (next) {
  const isExist = await User.findOne({ phoneNumber: this.phoneNumber });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Phone number already exist.');
  }
  next();
});

export const User = mongoose.models.User || model('User', UserSchema);
