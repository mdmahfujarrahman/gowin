import { Toaster } from 'react-hot-toast';

/**
 * @returns {JSX.Element} - toast element
 */

const Toast = () => {
  return <Toaster position="top-right" gutter={8} reverseOrder={false} />;
};

export default Toast;
