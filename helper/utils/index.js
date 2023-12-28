import { CountryNameList } from '../../constant/countryName';

export const getCountryName = countryCode => {
  const country = CountryNameList.find(
    item => item.countryCode === countryCode,
  );
  return country.countryName.toUpperCase();
};
