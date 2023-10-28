import { Modal } from 'antd';

const CustomModal = ({ open, handleCancel, children }) => {
  return (
    <Modal
      className="rounded-none"
      footer={null}
      open={open}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
