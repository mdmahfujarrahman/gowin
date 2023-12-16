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
      default: 'Asia/Dhaka',
    },
    hours: {
      type: Number,
      required: [true, 'Hours is required'],
      default: 5,
    },
    resultCollect: {
      start: {
        hours: {
          type: Number,
          required: [true, 'Hours is required'],
          default: 11,
        },
        minutes: {
          type: Number,
          required: [true, 'Minutes is required'],
          default: 5,
        },
        seconds: {
          type: Number,
          required: [true, 'Seconds is required'],
          default: 0,
        },
      },
      end: {
        hours: {
          type: Number,
          required: [true, 'Hours is required'],
          default: 11,
        },
        minutes: {
          type: Number,
          required: [true, 'Minutes is required'],
          default: 5,
        },
        seconds: {
          type: Number,
          required: [true, 'Seconds is required'],
          default: 0,
        },
      },
    },
    startCountdown: {
      start: {
        hours: {
          type: Number,
          required: [true, 'Hours is required'],
          default: 11,
        },
        minutes: {
          type: Number,
          required: [true, 'Minutes is required'],
          default: 5,
        },
        seconds: {
          type: Number,
          required: [true, 'Seconds is required'],
          default: 0,
        },
      },
      end: {
        hours: {
          type: Number,
          required: [true, 'Hours is required'],
          default: 11,
        },
        minutes: {
          type: Number,
          required: [true, 'Minutes is required'],
          default: 5,
        },
        seconds: {
          type: Number,
          required: [true, 'Seconds is required'],
          default: 0,
        },
      },
    },
  },
  {
    timestamps: true,
  },
);

// export User model if exist or create new model
export const ClockTiming =
  mongoose.models.ClockTiming || model('ClockTiming', ClockSchema);
