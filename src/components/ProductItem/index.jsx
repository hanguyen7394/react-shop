import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import { formatCurrency } from '../../utils/format';
import { calcRateWidth, getSalePrice } from '../../utils/common';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddCartThunk } from '../../reducers/cartReducer';
import { handleAddWishlistThunk, handleRemoveWishlistThunk } from '../../reducers/wishlistReducer';

const ProductItem = ({ id, name, color, images, price, slug, rating, discount }) => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  const isAddedWishlist = useMemo(() => {
    return wishlist.some((product) => product.id === id);
  }, [wishlist, id]);

  const detailPath = `${PATHS.PRODUCT.INDEX}/${slug}`;

  const _onAddToCart = (e) => {
    e.preventDefault();

    const payload = {
      addedId: id,
      addedColor: color?.[0],
      addedQuantity: 1,
      addedPrice: price - discount,
    };

    try {
      dispatch(handleAddCartThunk(payload));
    } catch (error) {
      console.error(error);
    }
  };

  const _onToggleWishlist = (e) => {
    e.preventDefault();

    try {
      if (isAddedWishlist) {
        dispatch(handleRemoveWishlistThunk({ productId: id }));
      } else {
        dispatch(handleAddWishlistThunk({ productId: id }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="product product-2">
      <figure className="product-media">
        {discount > 0 && <span className="product-label label-circle label-sale">Sale</span>}
        <Link to={detailPath}>
          <img
            src={images?.[0] || '/assets/images/demos/demo-3/products/product-11.jpg'}
            alt="Product image"
            className="product-image"
          />
        </Link>
        <div className="product-action-vertical">
          <Link
            onClick={_onToggleWishlist}
            style={{ backgroundColor: isAddedWishlist ? '#ef837b' : '#fcb941' }}
            className="btn-product-icon btn-wishlist btn-expandable"
          >
            <span style={{ backgroundColor: isAddedWishlist ? '#ef837b' : '#fcb941' }}>
              {isAddedWishlist ? 'remove from wishlist' : 'add to wishlist'}
            </span>
          </Link>
        </div>
        <div className="product-action product-action-dark">
          <Link onClick={_onAddToCart} className="btn-product btn-cart" title="Add to cart">
            <span>add to cart</span>
          </Link>
        </div>
      </figure>
      <div className="product-body">
        <h3 className="product-title">
          <Link to={detailPath}>{name}</Link>
        </h3>
        <div className="product-price">
          <span className="new-price">{getSalePrice(price, discount)}</span>
          {discount > 0 && <span className="old-price">Was {formatCurrency(price)}</span>}
        </div>
        <div className="ratings-container">
          <div className="ratings">
            <div className="ratings-val" style={{ width: calcRateWidth(rating) }} />
          </div>
          <span className="ratings-text">( 4 Reviews )</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
