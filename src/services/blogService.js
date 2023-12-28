import axiosInstance from '../utils/axiosInstance';

const blogService = {
  getBlogs(query = '') {
    return axiosInstance.get(`/blogs${query}`);
  },
  getCategories() {
    return axiosInstance.get('/blog-categories');
  },
  getTags() {
    return axiosInstance.get('/blog-tags');
  },
  getBlogBySlug(slug = '') {
    return axiosInstance.get(`/blogs/${slug}`);
  },
};

export default blogService;
