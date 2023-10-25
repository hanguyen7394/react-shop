import axiosInstance from '../utils/axiosInstance';

const reviewService = {
  getReviewsByProduct(productId, query = '') {
    axiosInstance.get(`/reviews/product/${productId}${query}`);
  },
};

export default reviewService;
