import mongoose, { Schema, model } from 'mongoose';
// import ApiError from '../../helper/customError/ApiError';

const PendingWinnersSchema = new Schema(
  {
    winners: [
      {
        winner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        prizeType: {
          type: String,
          required: [true, 'Prize is required'],
        },
        prizeAmount: {
          type: String,
          required: [true, 'Prize amount is required'],
        },
        winnerPhoto: {
          type: String,
          required: [true, 'Winner photo is required'],
        },
        accessBankPage: {
          type: Boolean,
          default: false,
        },
        isBankDetailsAdded: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

// export User model if exist or create new model
export const PendingWinners =
  mongoose.models.PendingWinners ||
  model('PendingWinners', PendingWinnersSchema);
