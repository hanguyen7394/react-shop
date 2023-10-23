import React from 'react';
import Pagination from '../../components/Pagination';
import ProductFilter from './ProductFilter';
import useProductPage from './useProductPage';
import ProductList from './ProductList';
import ProductToolbox from './ProductToolbox';

const ProductPage = () => {
  const { productToolboxProps, productListProps, productFilterProps, paginationProps } = useProductPage();
  return (
    <main className="main">
      <div className="page-header text-center" style={{ backgroundImage: 'url("/assets/images/page-header-bg.jpg")' }}>
        <div className="container">
          <h1 className="page-title">Product</h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product
            </li>
          </ol>
        </div>
      </nav>
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
