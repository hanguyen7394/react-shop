import axiosInstance from '../utils/axiosInstance';

const addressService = {
  getProvince(provinceId = '') {
    return axiosInstance.get(`/provinces/${provinceId}`);
  },
  getDistrict(districtId = '') {
    return axiosInstance.get(`/districts/${districtId}`);
  },
  getWard(wardId = '') {
    return axiosInstance.get(`/wards/${wardId}`);
  },
  getProvinces() {
    return axiosInstance.get('/provinces');
  },
  getDistrictsByProvince(provinceId = '') {
    return axiosInstance.get(`/districts?province=${provinceId}`);
  },
  getWardsByDistrict(districtId = '') {
    return axiosInstance.get(`/wards?district=${districtId}`);
  },
};

export default addressService;
