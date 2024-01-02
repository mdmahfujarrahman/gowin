'use client';
import { AutoComplete } from 'antd';

const CustomAutoComplete = ({
  options,
  placeholder,
  name,
  handleChange,
  value,
  isDisable,
}) => {
  return (
    <AutoComplete
      className="h-10 w-full px-3 py-1 rounded-sm focus:outline-none"
      placeholder={placeholder}
      disabled={isDisable}
      options={options}
      defaultValue={value}
      style={{
        height: '40px',
      }}
      onSelect={(value, option) => {
        handleChange({ target: { name, value: option.id } });
      }}
      filterOption={(inputValue, option) =>
        option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};

export default CustomAutoComplete;
