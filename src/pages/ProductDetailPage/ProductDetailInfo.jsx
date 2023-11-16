import React from 'react';
import { calcRateWidth, getSalePrice } from '../../utils/common';
import { formatCurrency } from '../../utils/format';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import ProductQuantity from '../../components/ProductQuantity';
import ProductColor from '../../components/ProductColor';
import ShareLink from '../../components/ShareLink';

const ProductDetailInfo = ({
  name,
  rating,
  price,
  discount,
  images,
  title,
  description,
  color,
  category,
  stock,
  reviews,
  colorRef,
  quantityRef,
  isAddedWishlist,
  handleAddToCart,
  handleToggleWishlist,
}) => {
  const path = window.location.href;
  let categories = category || [];
  categories = Array.isArray(categories) ? categories : [categories];

  const _onAddToCart = (e) => {
    e.preventDefault();
    handleAddToCart();
  };

  const _onToggleWishlist = (e) => {
    e.preventDefault();
    handleToggleWishlist();
  };

  return (
    <div className="product-details">
      <h1 className="product-title">{name}</h1>
      <div className="ratings-container">
        <div className="ratings">
          <div className="ratings-val" style={{ width: calcRateWidth(rating) }} />
        </div>
        <a className="ratings-text" href="#product-review-link" id="review-link">
          ( {reviews?.length} Reviews )
        </a>
      </div>
      <div className="product-price">
        <span className="new-price">{getSalePrice(price, discount)}</span>
        {discount > 0 && <span className="old-price">Was {formatCurrency(price)}</span>}
      </div>
      <div className="product-content" dangerouslySetInnerHTML={{ __html: description }} />

      {!!color?.length && (
        <div className="details-filter-row details-row-size">
          <label>Color:</label>
          <ProductColor colors={color} ref={colorRef} />
        </div>
      )}

      <div className="details-filter-row details-row-size">
        <label htmlFor="qty">Qty:</label>
        <div className="product-details-quantity">
          <ProductQuantity max={stock} ref={quantityRef} />
        </div>
      </div>

      <div className="product-details-action">
        <Link onClick={_onAddToCart} className="btn-product btn-cart">
          <span>add to cart</span>
        </Link>
        <div className="details-action-wrapper">
          <Link
            onClick={_onToggleWishlist}
            className="btn-product btn-wishlist"
            title="Wishlist"
            style={{ color: isAddedWishlist ? '#ef837b' : '#fcb941' }}
          >
            <span
              style={{
                color: isAddedWishlist ? '#ef837b' : '#fcb941',
                boxShadow: isAddedWishlist ? '0 1px 0 0 #ef837b' : '0 1px 0 0 #fcb941',
              }}
            >
              {isAddedWishlist ? 'Remove from wishlist' : 'Add to Wishlist'}
            </span>
          </Link>
        </div>
      </div>
      <div className="product-details-footer">
        {!!categories?.length && (
          <div className="product-cat">
            <span>Category:</span>
            {categories?.map(({ name, id }) => (
              <Link key={id} to={`${PATHS.PRODUCT.INDEX}?category=${id}`}>
                {name}
              </Link>
            ))}
          </div>
        )}
        <div className="social-icons social-icons-sm">
          <span className="social-label">Share:</span>
          <ShareLink path={path} title={title}>
            <i className="icon-facebook-f" />
          </ShareLink>
          <ShareLink path={path} title={title} type="twitter">
            <i className="icon-twitter" />
          </ShareLink>
          <ShareLink path={path} title={title} image={images?.[0]} type="pinterest">
            <i className="icon-pinterest" />
          </ShareLink>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
