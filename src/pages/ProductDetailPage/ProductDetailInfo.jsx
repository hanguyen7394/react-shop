import React from 'react';
import { calcRateWidth, getSalePrice } from '../../utils/common';
import { formatCurrency } from '../../utils/format';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import ProductQuantity from '../../components/ProductQuantity';
import ProductColor from '../../components/ProductColor';

const ProductDetailInfo = ({ name, rating, price, discount, title, color, category, stock, colorRef, quantityRef, handleAddToCart }) => {
  let categories = category || [];
  categories = Array.isArray(categories) ? categories : [categories];

  const _onAddToCart = (e) => {
    e.preventDefault();
    handleAddToCart();
  };

  return (
    <div className="product-details">
      <h1 className="product-title">{name}</h1>
      <div className="ratings-container">
        <div className="ratings">
          <div className="ratings-val" style={{ width: calcRateWidth(rating) }} />
        </div>
        <a className="ratings-text" href="#product-review-link" id="review-link">
          ( 2 Reviews )
        </a>
      </div>
      <div className="product-price">
        <span className="new-price">{getSalePrice(price, discount)}</span>
        {discount > 0 && <span className="old-price">Was {formatCurrency.format(price)}</span>}
      </div>
      <div className="product-content">
        <p>{title}</p>
      </div>
      {!!color?.length && <ProductColor colors={color} ref={colorRef} />}
      <ProductQuantity max={stock} ref={quantityRef} />
      <div className="product-details-action">
        <Link onClick={_onAddToCart} className="btn-product btn-cart">
          <span>add to cart</span>
        </Link>
        <div className="details-action-wrapper">
          <Link className="btn-product btn-wishlist" title="Wishlist">
            <span>Add to Wishlist</span>
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
          <a href="https://www.facebook.com/" className="social-icon" title="Facebook" target="_blank">
            <i className="icon-facebook-f" />
          </a>
          <a href="https://twitter.com/" className="social-icon" title="Twitter" target="_blank">
            <i className="icon-twitter" />
          </a>
          <a href="https://www.instagram.com/" className="social-icon" title="Instagram" target="_blank">
            <i className="icon-instagram" />
          </a>
          <a href="https://www.pinterest.com/" className="social-icon" title="Pinterest" target="_blank">
            <i className="icon-pinterest" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
