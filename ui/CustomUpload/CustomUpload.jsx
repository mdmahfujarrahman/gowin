import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

/**
 * CustomUpload
 * @returns {JSX.Element} - upload element
 */

const CustomUpload = () => {
  return (
    <Upload>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};

export default CustomUpload;
