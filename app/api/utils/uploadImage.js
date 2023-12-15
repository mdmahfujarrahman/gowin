import moment from 'moment';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../lib/firebase/firebase.config';

export const uploadImage = async image => {
  try {
    const response = await fetch(image);
    const blob = await response.blob();
    const fileName = `Draw-Results-${moment().format('DD-MMM-YYYY')}.jpg`;
    // can change image type png to jpg or other
    const storageRef = ref(storage, `draw-result/${fileName}`);
    await uploadBytes(storageRef, blob);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.log(error);
  }
};
