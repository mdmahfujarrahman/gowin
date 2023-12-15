import { Modal } from 'antd';

/**
 * CustomModal
 * @param {boolean} open - modal open state
 * @param {function} handleCancel - modal cancel handler
 * @param {JSX.Element} children - modal children
 * @returns {JSX.Element} - modal element
 */

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
