import { useParams } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import productService from '../../services/productService';
import { useEffect, useMemo, useRef } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { message } from 'antd';
import reviewService from '../../services/reviewService';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddCartThunk } from '../../reducers/cartReducer';
import { handleAddWishlistThunk, handleRemoveWishlistThunk } from '../../reducers/wishlistReducer';

const useProductDetailPage = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

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

  const isAddedWishlist = useMemo(() => {
    return wishlist.some((product) => product.id === productId);
  }, [wishlist, productId]);

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
      const res = dispatch(handleAddCartThunk(payload)).unwrap();
      if (res) {
        resetColor();
        resetQuantity();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleWishlist = () => {
    try {
      if (isAddedWishlist) {
        dispatch(handleRemoveWishlistThunk({ productId })).unwrap();
      } else {
        dispatch(handleAddWishlistThunk({ productId })).unwrap();
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
    reviews: reviewData || [],
    colorRef,
    quantityRef,
    isAddedWishlist,
    handleAddToCart,
    handleToggleWishlist,
  };

  const detailTabProps = {
    description,
    shippingReturn,
    reviews: reviewData || [],
  };

  return {
    productName,
    detailDebounce,
    detailGalleryProps,
    detailInfoProps,
    detailTabProps,
  };
};

export default useProductDetailPage;
