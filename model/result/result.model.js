import mongoose, { Schema, model } from 'mongoose';

const ResultSchema = new Schema(
  {
    orginalImage: {
      type: String,
      required: [true, 'Orginal Image URL is required'],
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    resultCode: {
      type: String,
      required: [true, 'Result Code is required'],
    },
    orginalImageAlt: {
      type: String,
      required: [true, 'Orginal Image Alt is required'],
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
 * @returns  {Promise<Result,Error>} Return user if exist else return null
 */
ResultSchema.statics.previousResult = async function () {
  const result = await this.find().limit(1).sort({ $natural: -1 });
  return result;
};

// export User model if exist or create new model
export const Result =
  mongoose.models.ResultImage || model('ResultImage', ResultSchema);
