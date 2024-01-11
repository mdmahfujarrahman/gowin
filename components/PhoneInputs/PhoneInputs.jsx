import PhoneInput from 'react-phone-input-2';

const PhoneInputs = ({ handleChange, inputData, className, type }) => {
  return (
    <PhoneInput
      country={'bd'}
      enableSearch
      name="phoneNumber"
      className={className}
      containerClass="my-2"
      value={type === 'contactEdit' ? inputData?.data : inputData?.phoneNumber}
      onChange={(phone, i) => {
        handleChange({
          target: { name: 'phoneNumber', value: phone, code: i.countryCode },
        });
      }}
    />
  );
};

export default PhoneInputs;
