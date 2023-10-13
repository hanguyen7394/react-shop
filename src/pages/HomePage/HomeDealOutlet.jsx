import React from 'react';
import ProductItem from '../../components/ProductItem';
import moment from 'moment';
import { formatCurrency } from '../../utils/format';
import { getSalePrice } from '../../utils/common';
import { PATHS } from '../../constant/paths';
import { Link } from 'react-router-dom';
import CountDown from './CountDown';

const HomeDealOutlet = ({ dealProducts }) => {
  const targetTime = moment().add(1, 'day').set({ hour: 17, minute: 0, second: 0, millisecond: 0 });
  const dealCountDown = dealProducts?.[0] || {};
  const image = dealCountDown?.images?.[0];
  const detailPath = `${PATHS.PRODUCT.INDEX}/${dealCountDown?.slug}`;
  return (
    <div className="bg-light deal-container pt-7 pb-7 mb-5">
      <div className="container">
        <div className="heading text-center mb-4">
          <h2 className="title">Deals &amp; Outlet</h2>
          <p className="title-desc">Today’s deal and more</p>
        </div>
        <div className="row">
          <div className="col-lg-6 deal-col">
            <div
              className="deal"
              style={{ backgroundImage: `url("${image}")`, backgroundSize: '50%', backgroundPosition: 'right center' }}
            >
              <div className="deal-top">
                <h2>Deal of the Day.</h2>
                <h4>Limited quantities. </h4>
              </div>
              <div className="deal-content">
                <h3 className="product-title">
                  <Link to={detailPath}>{dealCountDown?.name}</Link>
                </h3>
                <div className="product-price">
                  <span className="new-price">{getSalePrice(dealCountDown?.price, dealCountDown?.discount)}</span>
                  <span className="old-price">Was {formatCurrency.format(dealCountDown?.price)}</span>
                </div>
                <Link to={detailPath} className="btn btn-link">
                  <span>Shop Now</span>
                  <i className="icon-long-arrow-right" />
                </Link>
              </div>
              <div className="deal-bottom">
                <CountDown targetTime={targetTime} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="products">
              {!!dealProducts?.length && (
                <div className="row">
                  {dealProducts?.map((product, index) => {
                    return (
                      index > 0 && (
                        <div key={product?.id} className="col-6">
                          <ProductItem {...product} />
                        </div>
                      )
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="more-container text-center mt-3 mb-0">
          <Link to={PATHS.PRODUCT.INDEX} className="btn btn-outline-dark-2 btn-round btn-more">
            <span>Shop more</span>
            <i className="icon-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDealOutlet;
