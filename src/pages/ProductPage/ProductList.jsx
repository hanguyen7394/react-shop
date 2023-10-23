import React from 'react';
import SkeletonLoading from '../../components/SkeletonLoading';
import ProductItem from '../../components/ProductItem';
import { Empty } from 'antd';
import classNames from 'classnames';

const ProductList = ({products, productDebounce}) => {
  return (
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
  );
};

export default ProductList;
