import { Empty, Modal } from 'antd';
import React from 'react';
import { formatCurrency } from '../../utils/format';
import { getSalePrice } from '../../utils/common';
import { PATHS } from '../../constant/paths';
import { Link } from 'react-router-dom';
import ProductQuantity from '../../components/ProductQuantity';
import ProductColor from '../../components/ProductColor';
import { VariantStyled } from '../../components/Styled-Components/styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveCartThunk } from '../../reducers/cartReducer';

const CartTable = ({ products, quantityRef, handleUpdateQuantity }) => {
  const dispatch = useDispatch();
  const { cartInfo, cartLoading } = useSelector((state) => state.cart);
  const { confirm } = Modal;

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

  if (!!products.length) {
    return (
      <table className="table table-cart table-mobile">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {products?.map(({ name, slug, price, discount, images, totalProduct, variant, quantity }, index) => {
            const detailPath = `${PATHS.PRODUCT.INDEX}/${slug}`;

            let imagePath = images[0];
            if (imagePath?.split('https').length > 2) {
              imagePath = imagePath?.split('https');
              imagePath = 'https' + imagePath[2];
            }

            return (
              <tr key={index}>
                <td className="product-col">
                  <div className="product">
                    <figure className="product-media">
                      <Link to={detailPath}>
                        <img src={imagePath} alt={name} />
                      </Link>
                    </figure>
                    <div>
                      <h3 className="product-title">
                        <Link to={detailPath}>{name}</Link>
                      </h3>
                      <VariantStyled className="product-variant">
                        Color: <ProductColor colors={[variant]} />
                      </VariantStyled>
                    </div>
                  </div>
                </td>
                <td className="price-col">{getSalePrice(price, discount)}</td>
                <td className="quantity-col">
                  <div className="cart-product-quantity">
                    <ProductQuantity
                      max={100}
                      ref={(thisRef) => {
                        quantityRef.current[index] = thisRef;
                      }}
                      defaultValue={quantity}
                      handleChangeQuantity={(value) => {
                        handleUpdateQuantity(value, index);
                      }}
                    />
                  </div>
                </td>
                <td className="total-col">{formatCurrency(totalProduct)}</td>
                <td className="remove-col">
                  <button onClick={(e) => _onRemoveProduct(e, index)} className="btn-remove">
                    <i className="icon-close" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return <Empty description="There are no any products in your cart" />;
  }
};

export default CartTable;
