import React from 'react';
import useDashboardPage from './useDashboardPage';
import { formatCurrency, formatDate } from '../../utils/format';
import { PATHS } from '../../constant/paths';
import { Link } from 'react-router-dom';

const MyOrder = () => {
  const { orderProps } = useDashboardPage();
  const { orders } = orderProps || {};

  return (
    <div className="tab-pane fade show active" id="tab-orders" role="tabpanel" aria-labelledby="tab-orders-link">
      {orders?.length ? (
        <section className="order-list">
          {orders?.map(({ id, createdAt, product, totalProduct, quantity }) => {
            const products = product.map((item, index) => ({
              ...item,
              totalProduct: totalProduct[index],
              quantity: quantity[index],
            }));
            return (
              <div key={id} className="order-block">
                <h3 className="order-block__title">
                  {formatDate(createdAt)} - Order {id}
                </h3>
                <table className="table table-cart table-mobile">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map(({ id, slug, name, images, price, discount, totalProduct, quantity }) => {
                      const detailPath = `${PATHS.PRODUCT.INDEX}/${slug}`;
                      return (
                        <tr key={id}>
                          <td className="product-col">
                            <div className="product">
                              <figure className="product-media">
                                <Link to={detailPath}>
                                  <img src={images[0]} alt="Product image" />
                                </Link>
                              </figure>
                              <h3 className="product-title">
                                <Link to={detailPath}>{name}</Link>
                              </h3>
                            </div>
                          </td>
                          <td className="price-col text-center">{formatCurrency(price - discount)}</td>
                          <td className="quantity-col text-center">{quantity}</td>
                          <td className="total-col text-center">{formatCurrency(totalProduct)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <br />
                <br />
              </div>
            );
          })}
        </section>
      ) : (
        <>
          <p>No order has been made yet.</p>
          <a href="category.html" className="btn btn-outline-primary-2">
            <span>GO SHOP</span>
            <i className="icon-long-arrow-right" />
          </a>
        </>
      )}
    </div>
  );
};

export default MyOrder;
