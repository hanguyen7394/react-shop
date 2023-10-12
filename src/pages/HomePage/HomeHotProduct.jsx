import React, { useEffect, useState } from 'react';
import { PATHS } from '../../constant/paths';
import { formatCurrency } from '../../utils/format';
import { Link } from 'react-router-dom';
import { owlCarousels } from '../../utils/common';
import classNames from 'classnames';
import SkeletonLoading from '../../components/SkeletonLoading';
import ProductItem from '../../components/ProductItem';

const TABS = {
  featured: 'Featured',
  on_sale: 'On Sale',
  top_rated: 'Top Rated',
};

const HomeHotProduct = ({ productFeatured, productOnSale, productTopRated }) => {
  const [selectedTab, setSelectedTab] = useState(TABS.featured);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    owlCarousels();
  }, [selectedTab, productFeatured, productOnSale, productTopRated]);

  const handleChangeTab = (e, tabName) => {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    setSelectedTab('');

    setTimeout(() => {
      setSelectedTab(tabName);
    }, 100);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const _getSelectedProducts = (selectedTab) => {
    switch (selectedTab) {
      case TABS.featured:
        return productFeatured;
      case TABS.on_sale:
        return productOnSale;
      case TABS.top_rated:
        return productTopRated;
      default:
        return [];
    }
  };

  const renderProducts = _getSelectedProducts(selectedTab);

  return (
    <div className="container featured">
      <ul className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3" role="tablist">
        <li className="nav-item">
          <Link
            className={classNames('nav-link', {
              active: selectedTab === TABS.featured,
            })}
            onClick={(e) => handleChangeTab(e, TABS.featured)}
          >
            {TABS.featured}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={classNames('nav-link', {
              active: selectedTab === TABS.on_sale,
            })}
            onClick={(e) => handleChangeTab(e, TABS.on_sale)}
          >
            {TABS.on_sale}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={classNames('nav-link', {
              active: selectedTab === TABS.top_rated,
            })}
            onClick={(e) => handleChangeTab(e, TABS.top_rated)}
          >
            {TABS.top_rated}
          </Link>
        </li>
      </ul>
      <div className="tab-content tab-content-carousel">
        <div className="tab-pane p-0 fade show active">
          {loading && <SkeletonLoading columns={4} columnsSM={3} columnsXS={2} height="auto" />}
          {!!renderProducts?.length && (
            <div className={`${loading ? 'is-loading' : 'is-loaded'}`}>
              <div
                className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                data-toggle="owl"
                data-owl-options='{
                  "nav": true,
                  "dots": true,
                  "margin": 20,
                  "loop": false,
                  "responsive": {
                    "0": {
                      "items":2
                    },
                    "600": {
                      "items":2
                    },
                    "992": {
                      "items":3
                    },
                    "1200": {
                      "items":4
                    }
                  }
                }'
              >
                {renderProducts.map((product) => (
                  <ProductItem key={product?.id} {...product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeHotProduct;
