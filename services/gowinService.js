import API from './common';

// Auth
const loginReq = payload => {
  return API.post('/auth/login', payload);
};
const signUpReq = payload => {
  return API.post('/auth/signup', payload);
};

const createResetToken = payload => {
  return API.post('/auth/resetToken', payload);
};

const isUserExistReq = payload => {
  return API.get(
    `/auth/user?phoneNumber=${payload.phoneNumber}&countryCode=${payload.countryCode}`,
  );
};

const getCurrentUserReq = () => {
  return API.get('/user');
};

// admin panel

// dashboard

const getDashboardStateReq = () => {
  return API.get('/admin/dashboard');
};

// pending user
const getPendingUserReq = payload => {
  return payload
    ? API.get(`/admin/pendingUser?status=${payload}`)
    : API.get('/admin/pendingUser');
};
const updatePendingUserStatusReq = payload => {
  return API.patch('/admin/pendingUser/action', payload);
};

// active user
const getActiveUserReq = () => {
  return API.get('/admin/activeUser');
};
const updateActiveUserStatusReq = payload => {
  return API.patch('/admin/activeUser/action', payload);
};

// pending winner

const getPendingWinnerReq = () => {
  return API.get('/admin/pendingWinner');
};
const addPendingWinnerReq = payload => {
  return API.put('/admin/pendingWinner', payload);
};
const updatePendingWinnerReq = payload => {
  return API.patch('/admin/pendingWinner', payload);
};

export const GowinService = {
  loginReq,
  signUpReq,
  isUserExistReq,
  getCurrentUserReq,
  getDashboardStateReq,
  getPendingUserReq,
  updatePendingUserStatusReq,
  getActiveUserReq,
  updateActiveUserStatusReq,
  getPendingWinnerReq,
  addPendingWinnerReq,
  updatePendingWinnerReq,
  createResetToken,
};
