import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import { formatCurrency } from '../../utils/format';

const ProductItem = ({ name, images, price, slug, rating }) => {
  const detailPath = `${PATHS.PRODUCT.INDEX}/${slug}`;
  const rateWidth = `${(100 / 5) * rating}%`;
  return (
    <div className="product product-2">
      <figure className="product-media">
        <Link to={detailPath}>
          <img
            src={images?.[0] || '/assets/images/demos/demo-3/products/product-11.jpg'}
            alt="Product image"
            className="product-image"
          />
        </Link>
        <div className="product-action-vertical">
          <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
            <span>add to wishlist</span>
          </a>
        </div>
        <div className="product-action product-action-dark">
          <a href="#" className="btn-product btn-cart" title="Add to cart">
            <span>add to cart</span>
          </a>
        </div>
      </figure>
      <div className="product-body">
        <h3 className="product-title">
          <Link to={detailPath}>{name}</Link>
        </h3>
        <div className="product-price"> {formatCurrency.format(price)} </div>
        <div className="ratings-container">
          <div className="ratings">
            <div className="ratings-val" style={{ width: rateWidth }} />
          </div>
          <span className="ratings-text">( 4 Reviews )</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
