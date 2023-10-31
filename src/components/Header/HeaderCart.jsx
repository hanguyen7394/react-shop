import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import { getSalePrice } from '../../utils/common';
import { formatCurrency } from '../../utils/format';
import { handleRemoveCartThunk } from '../../reducers/cartReducer';
import styled from 'styled-components';
import ProductColor from '../ProductColor';
import { Modal } from 'antd';
import { VariantStyled } from '../Styled-Components/styled-components';

const DropdownStyled = styled.div`
  max-height: 30vh;
  overflow-y: scroll;
  padding-right: 15px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const CartDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HeaderCart = () => {
  const dispatch = useDispatch();
  const { confirm } = Modal;
  const { cartInfo, cartLoading } = useSelector((state) => state.cart);

  const { product, quantity, subTotal, variant, totalProduct, shipping } = cartInfo || {};

  const products = product?.map((item, index) => {
    return {
      ...item,
      quantity: quantity[index],
      totalProduct: totalProduct[index],
      variant: variant[index],
    };
  });

  const _onRemoveProduct = (e, removeIndex) => {
    e.preventDefault();
    e.stopPropagation();
    if (cartLoading || removeIndex < 0) return;
    const removeProduct = products[removeIndex];
    confirm({
      title: 'Do you want to remove this item from cart?',
      content: (
        <>
          <p>{removeProduct.name}</p>
          <p>
            {removeProduct.quantity}x{getSalePrice(removeProduct.price, removeProduct.discount)}
          </p>
        </>
      ),
      onOk() {
        dispatch(handleRemoveCartThunk({ removeIndex }));
      },
    });
  };

  return (
    <div className="dropdown cart-dropdown">
      <a className="dropdown-toggle">
        <i className="icon-shopping-cart" />
        {!!products?.length && <span className="cart-count">{products.length}</span>}
      </a>
      <div className="dropdown-menu dropdown-menu-right" style={{ width: '400px' }}>
        {!!products?.length ? (
          <>
            <DropdownStyled className="dropdown-cart-products">
              {products?.map(({ slug, name, images, price, discount, variant, quantity }, index) => {
                const detailPath = `${PATHS.PRODUCT.INDEX}/${slug}`;

                let imagePath = images[0];
                if (imagePath?.split('https').length > 2) {
                  imagePath = imagePath?.split('https');
                  imagePath = 'https' + imagePath[2];
                }

                return (
                  <div key={index} className="product">
                    <CartDetailStyled className="product-cart-details">
                      <h4 className="product-title">
                        <Link to={detailPath}>{name}</Link>
                      </h4>
                      <VariantStyled className="product-variant">
                        Color: <ProductColor colors={[variant]} />
                      </VariantStyled>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">{quantity}</span> x {getSalePrice(price, discount)}
                      </span>
                    </CartDetailStyled>
                    <figure className="product-image-container">
                      <Link to={detailPath} className="product-image">
                        <img src={imagePath} alt={name} />
                      </Link>
                    </figure>
                    <Link onClick={(e) => _onRemoveProduct(e, index)} className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </Link>
                  </div>
                );
              })}
            </DropdownStyled>
            <div className="dropdown-cart-total">
              <span>Total</span>
              <span className="cart-total-price">{formatCurrency.format(subTotal)}</span>
            </div>
            <div className="dropdown-cart-action">
              <Link to={PATHS.CART} className="btn btn-primary">
                View Cart
              </Link>
              {shipping?.typeShip && (
                <Link to={PATHS.CHECKOUT} className="btn btn-outline-primary-2">
                  <span>Checkout</span>
                  <i className="icon-long-arrow-right" />
                </Link>
              )}
            </div>
          </>
        ) : (
          <p>
            There is no any product in cart <Link to={PATHS.PRODUCT.INDEX}>Go to shop</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default HeaderCart;
