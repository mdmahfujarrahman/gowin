import mongoose, { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import httpStatus from 'http-status';
import ApiError from '../../helper/customError/ApiError';

const ResetPasswordSchema = new Schema(
  {
    token: {
      type: String,
      required: [true, 'Token is required'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
      expires: 60,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

ResetPasswordSchema.statics.setResetPasswordToken = async function (id) {
  const user = await this.findOne({ userId: id });
  const token = await bcrypt.hash(id, 10);
  if (user) {
    const updateResetPasswordToken = await this.findOneAndUpdate(
      {
        userId: id,
      },
      {
        token,
      },
      {
        new: true,
      },
    );
    return updateResetPasswordToken;
  }
  const payload = {
    userId: id,
    token,
  };
  const resetPassword = await this.create(payload);

  return resetPassword;
};

ResetPasswordSchema.statics.verifyPasswordToken = async function (token) {
  const resetPassword = await this.findOne({ token });
  if (!resetPassword) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Token not found');
  }
  return resetPassword;
};

export const PasswordReset =
  mongoose?.models?.PasswordReset ||
  model('PasswordReset', ResetPasswordSchema);
