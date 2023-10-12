import axiosInstance from '../utils/axiosInstance';

const productService = {
  getProducts(query = '') {
    return axiosInstance.get(`/products${query}`);
  },
  getCategories() {
    return axiosInstance.get('/product-categories');
  }
};

export default productService;
