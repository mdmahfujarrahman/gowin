import React from 'react';

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
