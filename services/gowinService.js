import API from './common';

// Auth
const loginReq = payload => {
  return API.post('/auth/login', payload);
};
const signUpReq = payload => {
  return API.post('/auth/signup', payload);
};

const isUserExistReq = payload => {
  return API.post(
    `/auth/user?phoneNumber=${payload.phoneNumber}&countryCode=${payload.countryCode}`,
  );
};

const getCurrentUserReq = () => {
  return API.get('/user');
};

export const GowinService = {
  loginReq,
  signUpReq,
  isUserExistReq,
  getCurrentUserReq,
};
