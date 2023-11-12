import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateCartThunk } from '../../reducers/cartReducer';
import { SHIPPING_OPTIONS } from '../../constant/common';
import { useRef } from 'react';

const useCartPage = () => {
  const dispatch = useDispatch();
  const quantityRef = useRef([]);
  const { cartInfo } = useSelector((state) => state.cart);
  const { subTotal, total, shipping, product, quantity, totalProduct, variant } = cartInfo || {};

  const products =
    product?.map((item, index) => {
      return {
        ...item,
        quantity: quantity[index],
        totalProduct: totalProduct[index],
        variant: variant[index],
      };
    }) || [];

  const handleUpdateShipping = (typeShip) => {
    const selectedShipping = SHIPPING_OPTIONS.find((option) => option.value === typeShip);

    if (!!selectedShipping) {
      const shippingPayload = {
        ...cartInfo,
        shipping: {
          typeShip: selectedShipping?.value,
          price: selectedShipping.price,
        },
        total: total - (shipping?.price || 0) + selectedShipping?.price,
      };

      dispatch(handleUpdateCartThunk(shippingPayload));
    }
  };

  const handleUpdateQuantity = (valueQuantity, index) => {
    const { price, discount } = product[index];

    const newQuantity = [...quantity];
    newQuantity[index] = Number(valueQuantity);

    const newTotalProduct = [...totalProduct];
    newTotalProduct[index] = Number(price - discount) * Number(valueQuantity);

    const newSubTotal = newTotalProduct.reduce((sum, product) => Number(sum) + Number(product), 0) || 0;
    const newTotal = newSubTotal - cartInfo.discount;

    const quantityPayload = {
      ...cartInfo,
      quantity: newQuantity,
      totalProduct: newTotalProduct,
      subTotal: newSubTotal,
      total: newTotal,
    };

    dispatch(handleUpdateCartThunk(quantityPayload));
  };

  const cartSummaryProps = {
    subTotal,
    total,
    typeShip: shipping?.typeShip || '',
    handleUpdateShipping,
  };

  const cartTableProps = {
    products,
    quantityRef,
    handleUpdateQuantity,
  };

  return {
    cartSummaryProps,
    cartTableProps,
  };
};

export default useCartPage;
