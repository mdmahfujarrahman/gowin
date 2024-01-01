import { Switch } from 'antd';

const CustomSwitch = ({ handleChange, inputData, className, name }) => {
  return (
    <Switch
      checked={inputData[name]}
      className={className}
      onChange={e => {
        handleChange({ target: { name, value: e } });
      }}
    />
  );
};

export default CustomSwitch;
