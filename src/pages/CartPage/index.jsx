import React from 'react';
import CartSummary from './CartSummary';
import CartTable from './CartTable';
import useCartPage from './useCartPage';
import { PATHS } from '../../constant/paths';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const CartPage = () => {
  const { cartSummaryProps, cartTableProps } = useCartPage();

  return (
    <main className="main">
      <div className="page-header text-center" style={{ backgroundImage: 'url("/assets/images/page-header-bg.jpg")' }}>
        <div className="container">
          <h1 className="page-title">Shopping Cart</h1>
        </div>
      </div>

      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={PATHS.PRODUCT.INDEX}>Product</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>Shopping Cart</Breadcrumb.Item>
      </Breadcrumb>

      <div className="page-content">
        <div className="cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <CartTable {...cartTableProps} />
              </div>
              <aside className="col-lg-3">
                <CartSummary {...cartSummaryProps} />
                <Link to={PATHS.PRODUCT.INDEX} className="btn btn-outline-dark-2 btn-block mb-3">
                  <span>CONTINUE SHOPPING</span>
                  <i className="icon-refresh" />
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
