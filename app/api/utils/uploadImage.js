import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../lib/firebase/firebase.config';
import errorHandler from '../../../errorHandler';

export const uploadImage = async (image, fileName, folderName) => {
  try {
    const response = await fetch(image);
    const blob = await response.blob();
    const storageRef = ref(storage, `${folderName}/${fileName}`);
    await uploadBytes(storageRef, blob);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    errorHandler(error);
  }
};
