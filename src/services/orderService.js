import axiosInstance from '../utils/axiosInstance';

const orderService = {
  getCoupon(slug = '') {
    return axiosInstance.get(`/orders/voucher/${slug}`);
  },
  checkout(payload = {}) {
    return axiosInstance.post('/orders', payload);
  },
  getOrders(query = '') {
    return axiosInstance.get(`/orders/me${query}`);
  }
};

export default orderService;
