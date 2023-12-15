import React from 'react';

/**
 * @param {string} type - input type
 * @param {string} name - input name
 * @param {string} placeholder - input placeholder
 * @param {string} className - input class name
 * @param {function} handleChange - input change handler
 * @param {string} value - input value
 * @returns {JSX.Element} - input element
 */

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
