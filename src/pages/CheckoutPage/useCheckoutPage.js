import { message } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetCart, handleUpdateCartThunk } from '../../reducers/cartReducer';
import orderService from '../../services/orderService';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constant/paths';

const useCheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartInfo } = useSelector((state) => state.cart);
  const { subTotal, shipping, discountCode } = cartInfo || {};
  const [addedCoupon, setAddedCoupon] = useState('');

  const handleAddCoupon = async (code) => {
    setAddedCoupon(code);

    try {
      const res = await orderService.getCoupon(code);
      const couponInfo = res?.data?.data;

      if (couponInfo) {
        dispatch(
          handleUpdateCartThunk({
            ...cartInfo,
            discount: couponInfo?.value || 0,
            discountCode: couponInfo?.code || '',
            total: subTotal - (couponInfo?.value || 0) + (shipping?.price || 0),
          })
        );

        message.success('Added coupon successfully');
      }
    } catch (error) {
      console.error(error);
      message.error('Added coupon failed');
    }
  };

  const handleRemoveCoupon = () => {
    setAddedCoupon('');

    try {
      dispatch(
        handleUpdateCartThunk({
          ...cartInfo,
          discount: 0,
          discountCode: '',
          total: subTotal + (shipping?.price || 0),
        })
      );

      message.success('Removed coupon successfully');
    } catch (error) {
      console.error(error);
      message.error('Removed coupon failed');
    }
  };

  const handleCheckout = async (data) => {
    if (data) {
      const { cartInfo, formInfo } = data;

      const { shipping, variant, subTotal, total, product, quantity, totalProduct, discount, discountCode } = cartInfo;

      const { phone, email, fullName, province, district, ward, street, note, paymentMethod } = formInfo;

      const payload = {
        address: {
          phone,
          email,
          fullName,
          street: `${street}, ${ward?.label}, ${district?.label}, ${province?.label}`,
        },
        note,
        shipping,
        variant,
        subTotal,
        total,
        product: product?.map((product) => product.id),
        quantity,
        totalProduct,
        discount,
        discountCode,
        paymentMethod,
      };

      try {
        const res = await orderService.checkout(payload);
        if (res?.data?.data) {
          dispatch(handleGetCart());
          message.success('Checkout successfully');
          navigate(PATHS.CHECKOUT_SUCCESS);
        } else {
          message.error('Checkout failed');
        }
      } catch (error) {
        message.error('Checkout failed');
      }
    }
  };

  const discountProps = {
    addedCoupon,
    handleAddCoupon,
    handleRemoveCoupon,
  };

  const checkoutFormProps = {
    handleCheckout,
  };

  return {
    discountProps,
    checkoutFormProps,
  };
};

export default useCheckoutPage;
