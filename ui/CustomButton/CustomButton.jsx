import React from 'react';

/**
 *
 * @param {string} btnClass - class name for button
 * @param {function} handleClick - click handler
 * @param {string} children - button text
 * @param {boolean} isDisabled - is button disabled
 * @returns {JSX.Element} - button element
 */

const CustomButton = ({
  btnClass,
  handleClick,
  children,
  isDisabled = false,
}) => {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={btnClass}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
