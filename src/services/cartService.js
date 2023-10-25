import axiosInstance from '../utils/axiosInstance';

const cartService = {
  getCart() {
    return axiosInstance.get('/carts/me');
  },
  updateCart(payload = {}) {
    return axiosInstance.put('/carts', payload);
  }
};

export default cartService;
