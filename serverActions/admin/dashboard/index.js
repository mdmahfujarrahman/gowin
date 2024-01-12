'use server';

import dbConnect from '../../../lib/db/db.connect';
import { Contact } from '../../../model/contact/contact.model';

// Server Actions Helper

const getAllContactInfo = async () => {
  try {
    await dbConnect();
    const allContactInfo = await Contact.getAll();
    return allContactInfo;
  } catch (error) {
    console.log(error);
  }
};

const updateContactId = payload => {
  return payload.map(contact => {
    return {
      ...contact,
      _id: contact?._id?.toString(),
    };
  });
};

// Server Actions

export async function getAllContact() {
  try {
    await dbConnect();
    const allContactInfo = await getAllContactInfo();
    const updateContact = updateContactId(allContactInfo?.contactInfo);
    return updateContact;
  } catch (error) {
    console.log(error);
  }
}

export async function updateContact(payload) {
  try {
    await dbConnect();
    const allContactInfo = await getAllContactInfo();
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
    )?.lean();
    const updateContact = updateContactId(response?.contactInfo);
    return updateContact;
  } catch (error) {
    console.log(error);
  }
}

// export async function createContact() {
//   try {
//     const payload = [
//       {
//         type: 'whatsapp',
//         data: '601127247651',
//       },
//       {
//         type: 'imo',
//         data: '601127247651',
//       },
//       {
//         type: 'email',
//         data: 'gowinoffcialwebsite@gmail.com',
//       },
//     ];
//     await dbConnect();
//     const response = await Contact.create({
//       contactInfo: payload,
//     });

//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
