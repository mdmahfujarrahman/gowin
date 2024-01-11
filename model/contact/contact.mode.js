import mongoose, { Schema, model } from 'mongoose';

const ContactSchema = new Schema(
  {
    contactInfo: [
      {
        type: {
          type: String,
          required: [true, 'Type is required'],
        },
        data: {
          type: String,
          required: [true, 'Data is required'],
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

ContactSchema.statics.getAll = async function () {
  const contactInfo = await this.find().lean();
  return contactInfo[0];
};

export const Contact =
  mongoose?.models?.Contact || model('Contact', ContactSchema);
