import toast from 'react-hot-toast';

const notification = (type, msg, id) => {
  switch (type) {
    case 'success':
      toast.success(msg, {
        id: id,
      });
      break;
    case 'error':
      toast.error(msg, {
        id: id,
      });
      break;
    default:
      toast(msg, {
        id: id,
      });
      break;
  }
};

export default notification;
