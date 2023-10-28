import mongoose from 'mongoose';
import ApiError from '../../helper/customError/ApiError';

const UserSchema = new mongoose.Schema(
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

UserSchema.pre('save', async function (next) {
  const isExist = await User.findOne({ phoneNumber: this.phoneNumber });
  if (isExist) {
    throw new ApiError(400, 'Phone number already exist.');
  }
  next();
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
