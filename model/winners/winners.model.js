import mongoose, { Schema, model } from 'mongoose';

// import ApiError from '../../helper/customError/ApiError';

const WinnersPhotoSchema = new Schema(
  {
    winners: [
      {
        winnerImage: {
          type: String,
          required: [true, 'Image is required'],
        },
        winnerAlt: {
          type: String,
          required: [true, 'Winner alt is required'],
        },
        orginalImage: {
          type: String,
          required: [true, 'Orginal image is required'],
        },
        orginalImageAlt: {
          type: String,
          required: [true, 'Orginal image alt is required'],
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

WinnersPhotoSchema.statics.getAll = async function () {
  const Winner = await this.find().lean();
  return Winner;
};

export const WinnersPhoto =
  mongoose.models.WinnersPhoto || model('WinnersPhoto', WinnersPhotoSchema);
