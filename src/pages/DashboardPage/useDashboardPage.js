import { useDispatch, useSelector } from 'react-redux';
import authService from '../../services/authService';
import { handleGetProfile } from '../../reducers/authReducer';
import { message } from 'antd';
import useQuery from '../../hooks/useQuery';
import orderService from '../../services/orderService';
import addressService from '../../services/addressService';

const useDashboardPage = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const { profile } = useSelector((state) => state.auth);

  const handleUpdateProfile = async (data) => {
    if (data) {
      const { fullName, phone, email, birthday, province, district, ward, street, password, newPassword } = data;

      const payload = {
        firstName: fullName,
        lastName: '',
        phone,
        email,
        street,
        province,
        district,
        ward,
        birthday,
        password,
        newPassword,
      };

      try {
        const res = await authService.updateProfile(payload);
        if (res?.data?.data) {
          dispatch(handleGetProfile());
          message.success('Update Profile successfully');
        } else {
          message.error('Update Profile failed');
        }
      } catch (error) {
        message.error('Update Profile failed');
      }
    }
  };

  const { data: orderData, loading: orderLoading } = useQuery(orderService.getOrders);
  const { orders } = orderData || {};

  const { province: provinceId, district: districtId, ward: wardId } = profile || {};
  const { data: provinceData } = useQuery(() => addressService.getProvince(provinceId));
  const { data: districtData } = useQuery(() => addressService.getDistrict(districtId));
  const { data: wardData } = useQuery(() => addressService.getWard(wardId));
  const provinceName = provinceData?.name;
  const districtName = districtData?.name;
  const wardName = wardData?.name;

  const wishlistProps = {
    wishlist,
  };

  const orderProps = {
    orders,
  };

  const accountProps = {
    profile,
    handleUpdateProfile,
  };

  const addressProps = {
    profile,
    provinceName,
    districtName,
    wardName,
  };

  return {
    wishlistProps,
    accountProps,
    orderProps,
    addressProps,
  };
};

export default useDashboardPage;
