'use server';
import dbConnect from '../../../lib/db/db.connect';
import { Contact } from '../../../model/contact/contact.mode';

export async function createContact() {
  try {
    const payload = [
      {
        type: 'whatsapp',
        data: '601127247651',
      },
      {
        type: 'imo',
        data: '601127247651',
      },
      {
        type: 'email',
        data: 'gowinoffcialwebsite@gmail.com',
      },
    ];
    console.log(payload);
    await dbConnect();
    const response = await Contact.create({
      contactInfo: payload,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function updateContact(payload) {
  try {
    const allContactInfo = await Contact.getAll();

    const response = await Contact.findOneAndUpdate(
      {
        _id: allContactInfo._id,
      },
      {
        contactInfo: payload,
      },
      {
        new: true,
      },
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
