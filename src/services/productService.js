import axiosInstance from '../utils/axiosInstance';

const productService = {
  getProducts(query = '') {
    return axiosInstance.get(`/products${query}`);
  },
  getCategories() {
    return axiosInstance.get('/product-categories');
  },
  getProductBySlug(slug = '') {
    return axiosInstance.get(`/products/${slug}`);
  },
};

export default productService;
