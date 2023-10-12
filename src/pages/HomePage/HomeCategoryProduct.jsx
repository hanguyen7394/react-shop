import React from 'react';

const HomeCategoryProduct = ({ categories }) => {
  return (
    <div className="container top">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">Featured Products</h2>
        </div>
        <div className="heading-right">
          {categories?.length && (
            <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="top-all-link"
                  data-toggle="tab"
                  href="#top-all-tab"
                  role="tab"
                  aria-controls="top-all-tab"
                  aria-selected="true"
                >
                  All
                </a>
              </li>
              {categories.map(({ id, name }) => (
                <li key={id} className="nav-item">
                  <a
                    className="nav-link"
                    id="top-all-link"
                    data-toggle="tab"
                    href="#top-all-tab"
                    role="tab"
                    aria-controls="top-all-tab"
                    aria-selected="true"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="tab-content tab-content-carousel just-action-icons-sm">
        <div className="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel" aria-labelledby="top-all-link">
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
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-11.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">MacBook Pro 13 Display, i5</a>
                </h3>
                <div className="product-price"> $1,199.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-12.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Bose - SoundLink Bluetooth Speaker</a>
                </h3>
                <div className="product-price"> $79.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 6 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-new">New</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-13.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '80%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-sale">Sale</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-14.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Google - Pixel 3 XL 128GB</a>
                </h3>
                <div className="product-price">
                  <span className="new-price">$35.41</span>
                  <span className="old-price">Was $41.67</span>
                </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 10 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-15.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Samsung - 55 Class LED 2160p Smart</a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 5 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-11.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">MacBook Pro 13 Display, i5</a>
                </h3>
                <div className="product-price"> $1,199.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane p-0 fade" id="top-tv-tab" role="tabpanel" aria-labelledby="top-tv-link">
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
                "768": {
                  "items":3
                },
                "992": {
                  "items":4
                },
                "1200": {
                  "items":5
                }
              }
            }'
          >
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-new">New</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-13.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '80%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-12.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Bose - SoundLink Bluetooth Speaker</a>
                </h3>
                <div className="product-price"> $79.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 6 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-sale">Sale</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-14.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Google - Pixel 3 XL 128GB</a>
                </h3>
                <div className="product-price">
                  <span className="new-price">$35.41</span>
                  <span className="old-price">Was $41.67</span>
                </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 10 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-15.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Samsung - 55 Class LED 2160p Smart</a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 5 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-11.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">MacBook Pro 13 Display, i5</a>
                </h3>
                <div className="product-price"> $1,199.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane p-0 fade" id="top-computers-tab" role="tabpanel" aria-labelledby="top-computers-link">
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
                "768": {
                  "items":3
                },
                "992": {
                  "items":4
                },
                "1200": {
                  "items":5
                }
              }
            }'
          >
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-15.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Samsung - 55 Class LED 2160p Smart</a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 5 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-11.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">MacBook Pro 13 Display, i5</a>
                </h3>
                <div className="product-price"> $1,199.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-new">New</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-13.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '80%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-12.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Bose - SoundLink Bluetooth Speaker</a>
                </h3>
                <div className="product-price"> $79.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 6 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-sale">Sale</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-14.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Google - Pixel 3 XL 128GB</a>
                </h3>
                <div className="product-price">
                  <span className="new-price">$35.41</span>
                  <span className="old-price">Was $41.67</span>
                </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 10 Reviews )</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane p-0 fade" id="top-phones-tab" role="tabpanel" aria-labelledby="top-phones-link">
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
                "768": {
                  "items":3
                },
                "992": {
                  "items":4
                },
                "1200": {
                  "items":5
                }
              }
            }'
          >
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-11.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">MacBook Pro 13 Display, i5</a>
                </h3>
                <div className="product-price"> $1,199.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-12.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Bose - SoundLink Bluetooth Speaker</a>
                </h3>
                <div className="product-price"> $79.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 6 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-new">New</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-13.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '80%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-15.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Samsung - 55 Class LED 2160p Smart</a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 5 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-11.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">MacBook Pro 13 Display, i5</a>
                </h3>
                <div className="product-price"> $1,199.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-sale">Sale</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-14.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Google - Pixel 3 XL 128GB</a>
                </h3>
                <div className="product-price">
                  <span className="new-price">$35.41</span>
                  <span className="old-price">Was $41.67</span>
                </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 10 Reviews )</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane p-0 fade" id="top-watches-tab" role="tabpanel" aria-labelledby="top-watches-link">
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
                "768": {
                  "items":3
                },
                "992": {
                  "items":4
                },
                "1200": {
                  "items":5
                }
              }
            }'
          >
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-sale">Sale</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-14.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Google - Pixel 3 XL 128GB</a>
                </h3>
                <div className="product-price">
                  <span className="new-price">$35.41</span>
                  <span className="old-price">Was $41.67</span>
                </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 10 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-11.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">MacBook Pro 13 Display, i5</a>
                </h3>
                <div className="product-price"> $1,199.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-12.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Bose - SoundLink Bluetooth Speaker</a>
                </h3>
                <div className="product-price"> $79.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 6 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-new">New</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-13.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '80%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane p-0 fade" id="top-acc-tab" role="tabpanel" aria-labelledby="top-acc-link">
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
                "768": {
                  "items":3
                },
                "992": {
                  "items":4
                },
                "1200": {
                  "items":5
                }
              }
            }'
          >
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-11.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">MacBook Pro 13 Display, i5</a>
                </h3>
                <div className="product-price"> $1,199.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-15.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Samsung - 55 Class LED 2160p Smart</a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 5 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-11.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">MacBook Pro 13 Display, i5</a>
                </h3>
                <div className="product-price"> $1,199.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '100%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-12.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Bose - SoundLink Bluetooth Speaker</a>
                </h3>
                <div className="product-price"> $79.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                  </div>
                  <span className="ratings-text">( 6 Reviews )</span>
                </div>
              </div>
            </div>
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-new">New</span>
                <a href="product-detail.html">
                  <img
                    src="/assets/images/demos/demo-3/products/product-13.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
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
                  <a href="product-detail.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
                </h3>
                <div className="product-price"> $899.99 </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '80%' }} />
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategoryProduct;
