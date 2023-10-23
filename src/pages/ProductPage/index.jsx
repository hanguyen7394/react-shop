import React from 'react';
import Pagination from '../../components/Pagination';
import ProductFilter from './ProductFilter';
import useProductPage from './useProductPage';
import ProductList from './ProductList';
import ProductToolbox from './ProductToolbox';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';

const ProductPage = () => {
  const { productToolboxProps, productListProps, productFilterProps, paginationProps } = useProductPage();
  return (
    <main className="main">
      <div className="page-header text-center" style={{ backgroundImage: 'url("/assets/images/page-header-bg.jpg")' }}>
        <div className="container">
          <h1 className="page-title">Product</h1>
        </div>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>Product</Breadcrumb.Item>
      </Breadcrumb>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <ProductToolbox {...productToolboxProps} />
              <ProductList {...productListProps} />
              <Pagination {...paginationProps} />
            </div>
            <aside className="col-lg-3 order-lg-first">
              <ProductFilter {...productFilterProps} />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
