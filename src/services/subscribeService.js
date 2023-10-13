import axiosInstance from '../utils/axiosInstance';

const subscribeService = {
  subscribeDeal(payload = {}) {
    return axiosInstance.post('/subscribes/deals', payload);
  },
};

export default subscribeService;
