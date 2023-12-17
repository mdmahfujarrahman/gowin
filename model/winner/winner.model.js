import mongoose, { Schema, model } from 'mongoose';

// import ApiError from '../../helper/customError/ApiError';

const WinnerSchema = new Schema(
  {
    winners: {
      superSix: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
      funFour: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
      luckeyThree: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    resultImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ResultImage',
    },
    title: {
      type: String,
      unique: true,
    },
    winnersCode: {
      type: String,
      unique: true,
    },
    canditates: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  },
);

WinnerSchema.statics.previousWinners = async function () {
  const Winner = await this.find().limit(1).sort({ $natural: -1 });
  return Winner;
};

export const Winner = mongoose.models.Winner || model('Winner', WinnerSchema);
