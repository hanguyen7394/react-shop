import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import ProductDetailGallery from './ProductDetailGallery';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDetailTab from './ProductDetailTab';
import useProductDetailPage from './useProductDetailPage';

const ProductDetailPage = () => {
  const { productName, detailGalleryProps, detailInfoProps, detailTabProps } = useProductDetailPage();

  return (
    <main className="main">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={PATHS.PRODUCT.INDEX}>Product</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>{productName}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="page-content">
        <div className="container">
          <div className="product-details-top">
            <div className="row">
              <div className="col-md-6">
                <ProductDetailGallery {...detailGalleryProps} />
              </div>
              <div className="col-md-6">
                <ProductDetailInfo {...detailInfoProps} />
              </div>
            </div>
          </div>
          <ProductDetailTab {...detailTabProps} />
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
