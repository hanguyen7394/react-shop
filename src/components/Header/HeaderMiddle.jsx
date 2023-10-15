import React, { useEffect } from 'react';
import { useMainContext } from '../../context/MainContext';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from '../Styled-Components/styled-components';
import { PATHS } from '../../constant/paths';
import classNames from 'classnames';

const HeaderMiddle = () => {
  const { isShowNavbar, handleToggleNavbar } = useMainContext();

  const _toggleNavbar = () => {
    handleToggleNavbar();
  };

  useEffect(() => {
    var catDropdown = $('.category-dropdown'),
      catInitVal = catDropdown.data('visible');

    if ($('.sticky-header').length && $(window).width() >= 992) {
      var sticky = new Waypoint.Sticky({
        element: $('.sticky-header')[0],
        stuckClass: 'fixed',
        offset: -300,
        handler: function (direction) {
          // Show category dropdown
          if (catInitVal && direction == 'up') {
            catDropdown.addClass('show').find('.dropdown-menu').addClass('show');
            catDropdown.find('.dropdown-toggle').attr('aria-expanded', 'true');
            return false;
          }

          // Hide category dropdown on fixed header
          if (catDropdown.hasClass('show')) {
            catDropdown.removeClass('show').find('.dropdown-menu').removeClass('show');
            catDropdown.find('.dropdown-toggle').attr('aria-expanded', 'false');
          }
        },
      });
    }
  }, []);

  return (
    <div className="header-middle sticky-header">
      <div className="container">
        <div className="header-left">
          <button
            className={classNames('mobile-menu-toggler', {
              active: isShowNavbar,
            })}
            onClick={_toggleNavbar}
          >
            <span className="sr-only">Toggle mobile menu</span>
            <i className="icon-bars" />
          </button>
          <Link to={PATHS.HOME} className="logo">
            <img src="/assets/images/logo.svg" alt="Molla Logo" width={160} />
          </Link>
        </div>
        <nav className="main-nav">
          <Menu className="menu">
            <li>
              <NavLink end to={PATHS.HOME}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.ABOUT}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.PRODUCT.INDEX}>Product</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.BLOG.INDEX}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.CONTACT}>Contact Us</NavLink>
            </li>
          </Menu>
        </nav>
        <div className="header-right">
          <div className="header-search">
            <a href="#" className="search-toggle" role="button" title="Search">
              <i className="icon-search" />
            </a>
            <form action="#" method="get">
              <div className="header-search-wrapper">
                <label htmlFor="q" className="sr-only">
                  Search
                </label>
                <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
              </div>
            </form>
          </div>
          <div className="dropdown cart-dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
            >
              <i className="icon-shopping-cart" />
              <span className="cart-count">2</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-cart-products">
                <div className="product">
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <a href="product-detail.html">Beige knitted</a>
                    </h4>
                    <span className="cart-product-info">
                      <span className="cart-product-qty">1</span> x $84.00{' '}
                    </span>
                  </div>
                  <figure className="product-image-container">
                    <a href="product-detail.html" className="product-image">
                      <img src="/assets/images/products/cart/product-1.jpg" alt="product" />
                    </a>
                  </figure>
                  <a href="#" className="btn-remove" title="Remove Product">
                    <i className="icon-close" />
                  </a>
                </div>
                <div className="product">
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <a href="product-detail.html">Blue utility</a>
                    </h4>
                    <span className="cart-product-info">
                      <span className="cart-product-qty">1</span> x $76.00{' '}
                    </span>
                  </div>
                  <figure className="product-image-container">
                    <a href="product-detail.html" className="product-image">
                      <img src="/assets/images/products/cart/product-2.jpg" alt="product" />
                    </a>
                  </figure>
                  <a href="#" className="btn-remove" title="Remove Product">
                    <i className="icon-close" />
                  </a>
                </div>
              </div>
              <div className="dropdown-cart-total">
                <span>Total</span>
                <span className="cart-total-price">$160.00</span>
              </div>
              <div className="dropdown-cart-action">
                <Link to={PATHS.CART} className="btn btn-primary">
                  View Cart
                </Link>
                <Link to={PATHS.CHECKOUT} className="btn btn-outline-primary-2">
                  <span>Checkout</span>
                  <i className="icon-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
