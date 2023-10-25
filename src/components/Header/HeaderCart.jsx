import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';

const HeaderCart = () => {
  const { cartInfo } = useSelector((state) => state.cart);
  console.log('cartInfo :>> ', cartInfo);
  return (
    <div className="dropdown cart-dropdown">
      <a
        href="#"
        className="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-display="static"
      >
        <i className="icon-shopping-cart" />
        <span className="cart-count">2</span>
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-cart-products">
          <div className="product">
            <div className="product-cart-details">
              <h4 className="product-title">
                <a href="product-detail.html">Beige knitted</a>
              </h4>
              <span className="cart-product-info">
                <span className="cart-product-qty">1</span> x $84.00{' '}
              </span>
            </div>
            <figure className="product-image-container">
              <a href="product-detail.html" className="product-image">
                <img src="/assets/images/products/cart/product-1.jpg" alt="product" />
              </a>
            </figure>
            <a href="#" className="btn-remove" title="Remove Product">
              <i className="icon-close" />
            </a>
          </div>
          <div className="product">
            <div className="product-cart-details">
              <h4 className="product-title">
                <a href="product-detail.html">Blue utility</a>
              </h4>
              <span className="cart-product-info">
                <span className="cart-product-qty">1</span> x $76.00{' '}
              </span>
            </div>
            <figure className="product-image-container">
              <a href="product-detail.html" className="product-image">
                <img src="/assets/images/products/cart/product-2.jpg" alt="product" />
              </a>
            </figure>
            <a href="#" className="btn-remove" title="Remove Product">
              <i className="icon-close" />
            </a>
          </div>
        </div>
        <div className="dropdown-cart-total">
          <span>Total</span>
          <span className="cart-total-price">$160.00</span>
        </div>
        <div className="dropdown-cart-action">
          <Link to={PATHS.CART} className="btn btn-primary">
            View Cart
          </Link>
          <Link to={PATHS.CHECKOUT} className="btn btn-outline-primary-2">
            <span>Checkout</span>
            <i className="icon-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;
