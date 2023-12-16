import mongoose, { Schema, model } from 'mongoose';
import ApiError from '../../helper/customError/ApiError';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';

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
    status: {
      type: String,
      enum: ['active', 'inactive', 'pending'],
      default: 'pending',
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

/**
 *  Check if user is exist or not using phone number and country code of user
 *
 * @param {String} phoneNumber  User phone number
 * @param {String} countryCode  User country code
 * @returns  {Promise<User,Error>} Return user if exist else return null
 */
UserSchema.statics.isUserExist = async function (phoneNumber, countryCode) {
  const user = await this.findOne({
    phoneNumber: phoneNumber,
    countryCode: countryCode,
  });
  return user;
};
UserSchema.statics.getSingleUser = async function (id) {
  const user = await this.findOne({ _id: id });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  return user;
};

// Check hashed password with user password before save user document
UserSchema.pre('save', async function (next) {
  // check if the user is exist

  const isExist = await User.findOne({ phoneNumber: this.phoneNumber });

  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Phone number already exist.');
  }
  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// export User model if exist or create new model
export const User = mongoose.models.User || model('User', UserSchema);
