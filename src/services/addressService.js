import axiosInstance from '../utils/axiosInstance';

const addressService = {
  getProvinces() {
    return axiosInstance.get('/provinces');
  },
  getDistrictByProvince(provinceId = '') {
    return axiosInstance.get(`/districts?province=${provinceId}`);
  },
  getWardByDistrict(districtId = '') {
    return axiosInstance.get(`/wards?district=${districtId}`);
  },
};

export default addressService;
