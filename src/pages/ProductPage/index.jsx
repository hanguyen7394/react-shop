import React, { useEffect, useState } from 'react';
import useMutation from '../../hooks/useMutation';
import productService from '../../services/productService';
import useDebounce from '../../hooks/useDebounce';
import classNames from 'classnames';
import SkeletonLoading from '../../components/SkeletonLoading';
import { Empty } from 'antd';
import ProductItem from '../../components/ProductItem';
import Pagination from '../../components/Pagination';
import ProductFilter from './ProductFilter';

const ProductPage = () => {
  const [query, setQuery] = useState('?page=1&limit=6');
  const {
    data: productData,
    execute: getProductList,
    loading: loadingProduct,
  } = useMutation(productService.getProducts);
  const { products } = productData || {};
  const productDebounce = useDebounce(loadingProduct, 300);

  const SORT = {
    pricehight: '&orderBy=price&order=desc',
    pricelow: '&orderBy=price&order=asc',
    newest: '&orderBy=createdAt',
    rating: '&orderBy=rating',
  };

  useEffect(() => {
    getProductList(query);
  }, [query]);

  const _changeSort = (e) => {
    const value = e.target.value;
    setQuery('?page=1&limit=6' + SORT[value]);
  };

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
              <div className="toolbox">
                <div className="toolbox-left">
                  <div className="toolbox-info">
                    {' '}
                    Showing <span>9 of 56</span> Products{' '}
                  </div>
                </div>
                <div className="toolbox-right">
                  <div className="toolbox-sort">
                    <label htmlFor="sortby">Sort by:</label>
                    <div className="select-custom">
                      <select onChange={_changeSort} name="sortby" id="sortby" className="form-control">
                        <option value="popularity" defaultValue>
                          Most Popular
                        </option>
                        <option value="pricelow">Price Low to High</option>
                        <option value="pricehight">Price Hight to Low </option>
                        <option value="newest">Newest</option>
                        <option value="rating">Most Rated</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products mb-3">
                {productDebounce && <SkeletonLoading columns={3} />}
                {products?.length && (
                  <div
                    className={classNames('row justify-content-center', {
                      'is-loading': productDebounce,
                      'is-loaded': !productDebounce,
                    })}
                  >
                    {products?.map((product) => (
                      <div key={product?.id} className="col-6 col-md-4 col-lg-4">
                        <ProductItem key={product.id} {...product} />
                      </div>
                    ))}
                  </div>
                )}
                {!productDebounce && !products?.length && <Empty description="Not found any products" />}
              </div>
              <Pagination />
            </div>
            <aside className="col-lg-3 order-lg-first">
              <ProductFilter />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
