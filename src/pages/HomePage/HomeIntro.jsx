import React from 'react';
import { PATHS } from '../../constant/paths';
import { Link } from 'react-router-dom';

const HomeIntro = ({ productIntro }) => {
  return (
    <div className="intro-section pt-3 pb-3 mb-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
              <div
                className="intro-slider owl-carousel owl-simple owl-dark owl-nav-inside"
                data-toggle="owl"
                data-owl-options='{
                    "nav": false,
                    "dots": true,
                    "responsive": {
                      "768": {
                        "nav": true,
                        "dots": false
                      }
                    }
                  }'
              >
                <div className="intro-slide">
                  <figure className="slide-image">
                    <img src="/assets/images/demos/demo-3/slider/slide-1.jpg" alt="Image Desc" />
                  </figure>
                  <div className="intro-content">
                    <h3 className="intro-subtitle text-primary">Daily Deals</h3>
                    <h1 className="intro-title">
                      {' '}
                      AirPods <br />
                      Earphones{' '}
                    </h1>
                    <div className="intro-price">
                      <sup>Today:</sup>
                      <span className="text-primary">
                        {' '}
                        $247 <sup>.99</sup>
                      </span>
                    </div>
                    <a href="product-detail.html" className="btn btn-primary btn-round">
                      <span>Click Here</span>
                      <i className="icon-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <span className="slider-loader" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="intro-banners">
              {!!productIntro?.length &&
                productIntro?.map(({ id, name, images, slug }) => {
                  const detailPath = `${PATHS.PRODUCT.INDEX}/${slug}`;
                  return (
                    <div key={id} className="banner mb-lg-1 mb-xl-2">
                      <Link to={detailPath}>
                        <img
                          src={images?.[0] || '/assets/images/demos/demo-3/banners/banner-1.jpg'}
                          alt="Banner"
                          style={{
                            height: 119,
                            objectFit: 'contain',
                            objectPosition: 'center right',
                          }}
                        />
                      </Link>
                      <div className="banner-content">
                        <h3 className="banner-title">
                          <Link to={detailPath}>{name}</Link>
                        </h3>
                        <Link to={detailPath} className="banner-link">
                          Shop Now <i className="icon-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
