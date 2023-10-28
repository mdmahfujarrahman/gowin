import React from 'react';

const CustomButton = ({ btnClass, handleClick, children }) => {
  return (
    <button className={btnClass} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
