import { useParams } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import productService from '../../services/productService';
import { useEffect, useRef } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { message } from 'antd';
import reviewService from '../../services/reviewService';
import { useDispatch } from 'react-redux';
import { handleUpdateCart } from '../../reducers/cartReducer';
// import useQuery from '../../hooks/useQuery';

const useProductDetailPage = () => {
  const dispatch = useDispatch();

  //Handle get detail data
  const { productSlug } = useParams();

  const {
    data: detailData,
    execute: getProductBySlug,
    loading: detailLoading,
  } = useMutation(productService.getProductBySlug);

  const {
    data: reviewData,
    execute: getReviewsByProduct,
    loading: loadingReview,
  } = useMutation(reviewService.getReviewsByProduct);

  const detailDebounce = useDebounce(detailLoading, 300);

  const { id: productId, images, name: productName, description, shippingReturn, price, discount } = detailData || {};

  useEffect(() => {
    !!productSlug && getProductBySlug(productSlug);
  }, [productSlug]);

  useEffect(() => {
    !!productId && getReviewsByProduct(productId);
  }, [productId]);

  //Handle add to cart
  const colorRef = useRef();
  const quantityRef = useRef();

  const handleAddToCart = () => {
    const { value: color, reset: resetColor } = colorRef?.current;
    const { value: quantity, reset: resetQuantity } = quantityRef?.current;

    if (!color) {
      message.error('Please choose a color variant');
      return;
    } else if (Number.isNaN(quantity) || quantity < 1) {
      message.error('Please input correct quantity');
      return;
    }

    const payload = {
      addedId: productId,
      addedColor: color,
      addedQuantity: quantity,
      addedPrice: price - discount,
    };

    try {
      const res = dispatch(handleUpdateCart(payload)).unwrap();
      if (res) {
        resetColor();
        resetQuantity();
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Props list
  const detailGalleryProps = {
    images,
  };

  const detailInfoProps = {
    ...detailData,
    colorRef,
    quantityRef,
    handleAddToCart,
  };

  const detailTabProps = {
    description,
    shippingReturn,
    reviews: reviewData || [],
  };

  return {
    productName,
    detailGalleryProps,
    detailInfoProps,
    detailTabProps,
  };
};

export default useProductDetailPage;
