import React from 'react';

const CustomInput = ({
  type,
  name,
  placeholder,
  className,
  handleChange,
  value,
}) => {
  return (
    <input
      type={type ? type : 'text'}
      name={name ? name : ''}
      placeholder={placeholder ? placeholder : ''}
      className={`px-3 py-1  fontLeto outline-none border-0  ${className}`}
      onChange={handleChange ? handleChange : null}
      defaultValue={value ? value : ''}
    />
  );
};

export default CustomInput;
