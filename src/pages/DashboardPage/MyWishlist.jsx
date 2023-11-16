import React from 'react';
import useDashboardPage from './useDashboardPage';
import { Empty, Modal } from 'antd';
import { PATHS } from '../../constant/paths';
import { Link } from 'react-router-dom';
import { getImageURL, getSalePrice } from '../../utils/common';
import { handleRemoveWishlistThunk } from '../../reducers/wishlistReducer';
import { useDispatch } from 'react-redux';
import { handleAddCartThunk } from '../../reducers/cartReducer';

const MyWishlist = () => {
  const dispatch = useDispatch();
  const { confirm } = Modal;
  const { wishlistProps } = useDashboardPage();
  const { wishlist } = wishlistProps || {};

  const _onRemoveFromWishlist = (productId, productName) => {
    confirm({
      title: 'Do you want to remove this item from wishlist?',
      content: <p>{productName}</p>,
      onOk() {
        dispatch(handleRemoveWishlistThunk({ productId }));
      },
    });
  };

  const _onAddToCart = (e, id, color, price, discount) => {
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

  return (
    <div className="tab-pane fade show active" id="tab-wishlist" role="tabpanel" aria-labelledby="tab-wishlist-link">
      {wishlist.length ? (
        <table className="table table-wishlist table-mobile">
          <thead>
            <tr>
              <th>Product</th>
              <th className="text-center">Price</th>
              <th className="text-center">Stock Status</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {wishlist?.map(({ id, slug, name, images, price, discount, color, stock }) => {
              const detailPath = `${PATHS.PRODUCT.INDEX}/${slug}`;
              return (
                <tr key={id}>
                  <td className="product-col">
                    <div className="product">
                      <figure className="product-media">
                        <Link to={detailPath}>
                          <img
                            src={getImageURL(images?.[0]) || '/assets/images/demos/demo-3/products/product-4.jpg'}
                            alt="Product image"
                          />
                        </Link>
                      </figure>
                      <h3 className="product-title">
                        <Link to={detailPath}>{name}</Link>
                      </h3>
                    </div>
                  </td>
                  <td className="price-col text-center">{getSalePrice(price, discount)}</td>
                  <td className="stock-col text-center">
                    {stock > 0 ? (
                      <span className="in-stock">In stock</span>
                    ) : (
                      <span className="out-of-stock">Out of stock</span>
                    )}
                  </td>
                  <td className="action-col">
                    {stock > 0 ? (
                      <button
                        onClick={(e) => _onAddToCart(e, id, color, price, discount)}
                        className="btn btn-block btn-outline-primary-2"
                      >
                        <i className="icon-cart-plus" />
                        Add to Cart{' '}
                      </button>
                    ) : (
                      <button className="btn btn-block btn-outline-primary-2 disabled">Out of stock</button>
                    )}
                  </td>
                  <td className="remove-col">
                    <button onClick={() => _onRemoveFromWishlist(id, name)} className="btn-remove">
                      <i className="icon-close" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Empty description="There are no products in wishlist" />
      )}
    </div>
  );
};

export default MyWishlist;
