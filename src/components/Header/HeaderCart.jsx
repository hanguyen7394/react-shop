import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import { getSalePrice } from '../../utils/common';
import { formatCurrency } from '../../utils/format';
import { handleRemoveCartThunk } from '../../reducers/cartReducer';

const HeaderCart = () => {
  const dispatch = useDispatch();
  const { cartInfo } = useSelector((state) => state.cart);

  const { product: products, quantity, subTotal, variant, totalProduct } = cartInfo || {};

  const _onRemoveProduct = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(handleRemoveCartThunk({index}));
  };

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
        {!!products?.length && <span className="cart-count">{products.length}</span>}
      </a>
      {!!products?.length && (
        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-cart-products">
            {products?.map(({ slug, name, images, price, discount }, index) => {
              const detailPath = `${PATHS.PRODUCT.INDEX}/${slug}`;
              return (
                <div key={index} className="product">
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <Link to={detailPath}>{name}</Link>
                    </h4>
                    <span className="cart-product-info">
                      <span className="cart-product-qty">{quantity[index]}</span> x {getSalePrice(price, discount)}
                    </span>
                  </div>
                  <figure className="product-image-container">
                    <Link to={detailPath} className="product-image">
                      <img src={images?.[0]} alt="product" />
                    </Link>
                  </figure>
                  <Link onClick={(e) => _onRemoveProduct(e, index)} className="btn-remove" title="Remove Product">
                    <i className="icon-close" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="dropdown-cart-total">
            <span>Total</span>
            <span className="cart-total-price">{formatCurrency.format(subTotal)}</span>
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
      )}
    </div>
  );
};

export default HeaderCart;
