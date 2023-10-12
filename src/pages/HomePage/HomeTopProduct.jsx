import React from 'react';
import { PATHS } from '../../constant/paths';
import { formatCurrency } from '../../utils/format';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const HomeTopProduct = ({ products, handleChangeTab, seletedTab }) => {
  return (
    <div className="container featured">
      <ul className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3" role="tablist">
        <li className="nav-item">
          <Link className="nav-link active" onClick={() => handleChangeTab('featured')}>
            Featured
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={() => handleChangeTab('sale')}>
            On Sale
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={() => handleChangeTab('rated')}>
            Top Rated
          </Link>
        </li>
      </ul>
      <div className="tab-content tab-content-carousel">
        <div
          className={classNames('tab-pane p-0 fade', {
            'show active': seletedTab === 'featured',
          })}
        >
          {products?.length && (
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
              {products.map(({ id, images, name, price }) => (
                <div key={id} className="product product-2">
                  <figure className="product-media">
                    <Link to={PATHS.PRODUCT.DETAIL}>
                      <img
                        src={images?.[0] || '/assets/images/demos/demo-3/products/product-1.jpg'}
                        alt="Product image"
                        className="product-image"
                      />
                    </Link>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    <div className="product-action product-action-dark">
                      <a href="#" className="btn-product btn-cart" title="Add to cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                  </figure>
                  <div className="product-body">
                    <h3 className="product-title">
                      <Link to={PATHS.PRODUCT.DETAIL}>{name}</Link>
                    </h3>
                    <div className="product-price">{formatCurrency.format(price)} </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div className="ratings-val" style={{ width: '60%' }} />
                      </div>
                      <span className="ratings-text">( 2 Reviews )</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className={classNames('tab-pane p-0 fade', {
            'show active': seletedTab === 'sale',
          })}
        >
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
            {products?.length && (
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
                {products.map(({ id, images, name, price }) => (
                  <div key={id} className="product product-2">
                    <figure className="product-media">
                      <Link to={PATHS.PRODUCT.DETAIL}>
                        <img
                          src={images?.[0] || '/assets/images/demos/demo-3/products/product-1.jpg'}
                          alt="Product image"
                          className="product-image"
                        />
                      </Link>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      <div className="product-action product-action-dark">
                        <a href="#" className="btn-product btn-cart" title="Add to cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>
                    <div className="product-body">
                      <h3 className="product-title">
                        <Link to={PATHS.PRODUCT.DETAIL}>{name}</Link>
                      </h3>
                      <div className="product-price">{formatCurrency.format(price)} </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: '60%' }} />
                        </div>
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          className={classNames('tab-pane p-0 fade', {
            'show active': seletedTab === 'sale',
          })}
        >
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
            {products?.length && (
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
                {products.map(({ id, images, name, price }) => (
                  <div key={id} className="product product-2">
                    <figure className="product-media">
                      <Link to={PATHS.PRODUCT.DETAIL}>
                        <img
                          src={images?.[0] || '/assets/images/demos/demo-3/products/product-1.jpg'}
                          alt="Product image"
                          className="product-image"
                        />
                      </Link>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      <div className="product-action product-action-dark">
                        <a href="#" className="btn-product btn-cart" title="Add to cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>
                    <div className="product-body">
                      <h3 className="product-title">
                        <Link to={PATHS.PRODUCT.DETAIL}>{name}</Link>
                      </h3>
                      <div className="product-price">{formatCurrency.format(price)} </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: '60%' }} />
                        </div>
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopProduct;
