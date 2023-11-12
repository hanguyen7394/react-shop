import axiosInstance from '../utils/axiosInstance';

const orderService = {
  getCoupon(slug = '') {
    return axiosInstance.get(`/orders/voucher/${slug}`);
  },
  checkout(payload = {}) {
    return axiosInstance.post('/orders', payload);
  },
};

export default orderService;
