import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../lib/firebase/firebase.config';

const uploadImage = (
  e,
  setIsUploading,
  setPercentUpload,
  inputData,
  setInputData,
) => {
  setIsUploading(true);
  const file = e.target.files[0];
  const sotrageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(sotrageRef, file);
  uploadTask.on(
    'state_changed',
    snapshot => {
      const prog = `${Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      )}%`;
      console.log(prog);
      setPercentUpload(prog);
    },
    error => console.log(error),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        setIsUploading(false);
        setInputData({
          ...inputData,
          profilePicture: downloadURL,
        });
      });
    },
  );
};

export default uploadImage;
