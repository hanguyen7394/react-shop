import { useDispatch, useSelector } from 'react-redux';
import authService from '../../services/authService';
import { handleGetProfile } from '../../reducers/authReducer';
import { message } from 'antd';

const useDashboardPage = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

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

  const wishlistProps = {
    wishlist,
  };

  const accountProps = {
    handleUpdateProfile,
  };

  return {
    wishlistProps,
    accountProps,
  };
};

export default useDashboardPage;
