import { CountryNameList } from '../../constant/countryName';

export const getCountryName = countryCode => {
  const country = CountryNameList.find(
    item => item.countryCode === countryCode,
  );
  return country.countryName.toUpperCase();
};

export const getURL = item => {
  if (item?.type === 'email') {
    return `mailto:${item?.data}`;
  } else if (item?.type === 'whatsapp') {
    return `https://wa.me/${item?.data}`;
  } else {
    return `tel:${item.data}`;
  }
};

export const checkUploadOptions = (isUploading, percentUpload, inputData) => {
  if (isUploading) {
    return percentUpload;
  } else {
    if (inputData) {
      return 'Upload Again';
    }
    return 'Upload';
  }
};
