import axiosInstance from '../utils/axiosInstance';

const authService = {
  login(payload = {}) {
    return axiosInstance.post('/customer/login', payload);
  },
  register(payload = {}) {
    return axiosInstance.post('/customer/register', payload);
  },
  getProfile() {
    return axiosInstance.get('/customer/profiles');
  },
  updateProfile(payload = {}) {
    return axiosInstance.put('/customer/profiles', payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  refreshToken(payload = {}) {
    return axiosInstance.put('/customer/refresh', payload);
  },
  addToWishList(payload = {}) {
    return axiosInstance.post('/customer/white-list', payload);
  },
  removeFromWishList(payload = {}) {
    return axiosInstance.delete('/customer/white-list', payload);
  }
};

export default authService;
