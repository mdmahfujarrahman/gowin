'use client';
// redux
import { Provider } from 'react-redux';
// store
import { store } from './store';

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
