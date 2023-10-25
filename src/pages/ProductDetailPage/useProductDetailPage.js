import { useParams } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import productService from '../../services/productService';
import { useEffect, useRef } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { message } from 'antd';
import reviewService from '../../services/reviewService';
import useQuery from '../../hooks/useQuery';

const useProductDetailPage = () => {
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
  const detailInfo = detailData || {};
  const reviews= reviewData || [];

  const { id: productId, images, name: productName, description, shippingReturn } = detailInfo || {};
  // const { data: reviewData } = useQuery(() => productId && reviewService.getReviewsByProduct(productId), [productId]);
  // console.log('reviewData :>> ', reviewData);

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
    }

    if (Number.isNaN(quantity) || quantity < 1) {
      message.error('Please input correct quantity');
      return;
    }

    resetColor();
    resetQuantity();
  };

  //Props list
  const detailGalleryProps = {
    images,
  };

  const detailInfoProps = {
    ...detailInfo,
    colorRef,
    quantityRef,
    handleAddToCart,
  };

  const detailTabProps = {
    description,
    shippingReturn,
    reviews,
  };

  return {
    productName,
    detailGalleryProps,
    detailInfoProps,
    detailTabProps,
  };
};

export default useProductDetailPage;
