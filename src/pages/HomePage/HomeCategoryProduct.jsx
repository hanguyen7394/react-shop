import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import { owlCarousels } from '../../utils/common';
import SkeletonLoading from '../../components/SkeletonLoading';

const HomeCategoryProduct = ({ categories, handleChangeCatSlug, productCategory, selectedCatSlug }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    owlCarousels();
  }, [selectedCatSlug, productCategory]);

  const _onChangeCatSlug = (e, catSlug) => {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    handleChangeCatSlug('');

    setTimeout(() => {
      handleChangeCatSlug(catSlug);
    }, 100);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <div className="container top">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">Featured Products</h2>
        </div>
        <div className="heading-right">
          {categories?.length && (
            <ul className="nav nav-pills nav-border-anim justify-content-center">
              {categories.map(({ id, name, slug }) => (
                <li key={id} className="nav-item">
                  <Link
                    className={classNames('nav-link', {
                      active: slug === selectedCatSlug,
                    })}
                    onClick={(e) => _onChangeCatSlug(e, slug)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="tab-content tab-content-carousel just-action-icons-sm">
        <div className="tab-pane p-0 fade show active" style={{minHeight: '474px'}}>
          {loading && <SkeletonLoading columns={4} columnsSM={3} columnsXS={2} height="auto" />}
          {!!productCategory?.length && (
            <div className={`${loading ? 'is-loading' : 'is-loaded'}`}>
              <div
                className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                data-toggle="owl"
                data-owl-options='{
                  "nav": true,
                  "dots": false,
                  "margin": 20,
                  "loop": false,
                  "responsive": {
                    "0": {
                      "items":2
                    },
                    "480": {
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
                {productCategory.map((product) => (
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

export default HomeCategoryProduct;
