import { Empty } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calcRateWidth } from '../../utils/common';
import { formatDate } from '../../utils/format';

const TABS = {
  desc: 'Description',
  shipping: 'Shipping & Returns',
  review: 'Reviews',
};

const ProductDetailTab = ({ description, shippingReturn, reviews }) => {
  const [selectedTab, setSelectedTab] = useState(TABS.desc);

  const _onChangeTab = (e, tabType) => {
    e.preventDefault();
    setSelectedTab(tabType);
  };

  return (
    <div className="product-details-tab">
      <ul className="nav nav-pills justify-content-center" role="tablist">
        <li className="nav-item">
          <Link
            onClick={(e) => _onChangeTab(e, TABS.desc)}
            className={classNames('nav-link', { active: selectedTab === TABS.desc })}
          >
            {TABS.desc}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={(e) => _onChangeTab(e, TABS.shipping)}
            className={classNames('nav-link', { active: selectedTab === TABS.shipping })}
          >
            {TABS.shipping}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={(e) => _onChangeTab(e, TABS.review)}
            className={classNames('nav-link', { active: selectedTab === TABS.review })}
          >
            {`${TABS.review} (${reviews?.length || 0})`}
          </Link>
        </li>
      </ul>
      <div className="tab-content">
        {selectedTab === TABS.desc && (
          <div className="tab-pane fade show active">
            <div className="product-desc-content">
              <h3>Product Information</h3>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        )}
        {selectedTab === TABS.shipping && (
          <div className="tab-pane fade show active">
            <div className="product-desc-content" dangerouslySetInnerHTML={{ __html: shippingReturn }} />
          </div>
        )}
        {selectedTab === TABS.review && (
          <div className="tab-pane fade show active">
            {!!reviews?.length ? (
              <div className="reviews">
                <h3>Reviews ({reviews?.length})</h3>
                {reviews?.map(({ id, order, rate, title, updateAt, description }) => (
                  <div key={id} className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4>
                          <span>#{order?.slice(-4)}</span>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: calcRateWidth(rate) }} />
                          </div>
                        </div>
                        <span className="review-date">{formatDate(updateAt)}</span>
                      </div>
                      <div className="col">
                        <h4>{title}</h4>
                        <div className="review-content">
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>There are no reviews for this product</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailTab;
