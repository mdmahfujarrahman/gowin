'use client';
// redux
import { Provider } from 'react-redux';
// store
import { store } from './store';

/**
 * @name Providers
 * @description Providers component
 * @param {Object} props
 * @returns {React.Component}
 */

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
