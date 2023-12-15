import mongoose, { Schema, model } from 'mongoose';
// import ApiError from '../../helper/customError/ApiError';

const ClockSchema = new Schema(
  {
    status: {
      type: String,
      required: [true, 'status is required'],
    },
    timeZone: {
      type: String,
      required: [true, 'Time Zone required'],
    },
    hours: {
      type: Number,
      required: [true, 'Hours is required'],
      default: 5,
    },
  },
  {
    timestamps: true,
  },
);

// export User model if exist or create new model
export const ClockTiming =
  mongoose.models.ClockTiming || model('ClockTiming', ClockSchema);
