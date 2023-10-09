import axiosInstance from '../utils/axiosInstance';

const productService = {
  getProducts(query = '') {
    return axiosInstance.get(`/products${query}`);
  },
};

export default productService;
