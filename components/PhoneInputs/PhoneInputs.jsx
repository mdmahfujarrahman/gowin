import PhoneInput from 'react-phone-input-2';

const PhoneInputs = ({ handleChange, inputData }) => {
  return (
    <PhoneInput
      country={'bd'}
      enableSearch
      name="phoneNumber"
      containerClass="my-2"
      value={inputData?.phoneNumber}
      onChange={(phone, i) => {
        handleChange({
          target: { name: 'phoneNumber', value: phone, code: i.countryCode },
        });
      }}
    />
  );
};

export default PhoneInputs;
