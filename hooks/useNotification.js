import { message } from 'antd';

const useNotification = () => {
  const Notification = (type, msg) => {
    const types = ['success', 'error', 'warning', 'info'];
    if (!types.includes(type)) {
      return message.info('Invalid Notification Type');
    }

    switch (type) {
      case 'success':
        message.success(msg);
        break;
      case 'error':
        message.error(msg);
        break;
      case 'warning':
        message.warning(msg);
        break;
      case 'info':
        message.info(msg);
        break;
      default:
        message.info(msg);
        break;
    }
  };

  return Notification;
};

export default useNotification;
