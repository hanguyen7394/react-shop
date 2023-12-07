import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import ProductDetailGallery from './ProductDetailGallery';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDetailTab from './ProductDetailTab';
import useProductDetailPage from './useProductDetailPage';
import ComponentLoading from '../../components/ComponentLoading';
import { Empty } from 'antd';

const ProductDetailPage = () => {
  const { productName, detailDebounce, detailGalleryProps, detailInfoProps, detailTabProps } = useProductDetailPage();
  if (detailDebounce) {
    return <ComponentLoading />;
  } else {
    return (
      <main className="main">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={PATHS.HOME}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={PATHS.PRODUCT.INDEX}>Product</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item isActive>{productName || 'Not Found'}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="page-content">
          <div className="container">
            {!productName ? (
              <div style={{textAlign: 'center'}}>
                <Empty description="Could not find this product. It could be deleted" />
                <Link style={{marginTop: '30px'}} to={PATHS.PRODUCT.INDEX} className="btn btn-primary">
                  <span>Choose another product</span>
                </Link>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </main>
    );
  }
};

export default ProductDetailPage;
