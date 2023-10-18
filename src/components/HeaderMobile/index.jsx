import React from 'react';
import { Menu } from '../Styled-Components/styled-components';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeTab, handleToggleNavbar } from '../../reducers/mainReducer';

const HeaderMobile = () => {
  const dispatch = useDispatch();
  const { selectedTab } = useSelector((state) => state.main);

  const _onToggleNavbar = (payload) => {
    dispatch(handleToggleNavbar(payload));
  }

  const _onChangeTab = (payload) => {
    dispatch(handleChangeTab(payload));
  }

  return (
    <>
      <div className="mobile-menu-overlay" onClick={() => _onToggleNavbar(false)} />
      <div className="mobile-menu-container">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close" onClick={() => _onToggleNavbar(false)}>
            <i className="icon-close" />
          </span>
          <form action="#" method="get" className="mobile-search">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search in..."
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search" />
            </button>
          </form>
          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className={classNames('nav-link', {
                  active: selectedTab === 'main',
                })}
                onClick={() => _onChangeTab('main')}
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className={classNames('nav-link', {
                  active: selectedTab === 'category',
                })}
                onClick={() => _onChangeTab('category')}
              >
                Categories
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className={classNames('tab-pane fade', {
                'show active': selectedTab === 'main',
              })}
            >
              <nav className="mobile-nav">
                <Menu className="mobile-menu">
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
            </div>
            <div
              className={classNames('tab-pane fade', {
                'show active': selectedTab === 'category',
              })}
            >
              <nav className="mobile-cats-nav">
                <Menu className="mobile-cats-menu">
                  <li>
                    <NavLink to={PATHS.PRODUCT.INDEX}>TV</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.PRODUCT.INDEX}>Computers</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.PRODUCT.INDEX}>Tablets &amp; Cell Phones</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.PRODUCT.INDEX}>Smartwatches</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.PRODUCT.INDEX}>Accessories</NavLink>
                  </li>
                </Menu>
              </nav>
            </div>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon" target="_blank" title="Facebook">
              <i className="icon-facebook-f" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Instagram">
              <i className="icon-instagram" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
