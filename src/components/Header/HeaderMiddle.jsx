import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from '../Styled-Components/styled-components';
import { PATHS } from '../../constant/paths';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { handleToggleNavbar } from '../../reducers/mainReducer';
import HeaderCart from './HeaderCart';

const HeaderMiddle = () => {
  const dispatch = useDispatch();
  const { isShowNavbar } = useSelector((state) => state.main);

  const _toggleNavbar = () => {
    dispatch(handleToggleNavbar());
  };

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
              <NavLink to={PATHS.PRODUCT.INDEX} end>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.BLOG.INDEX} end>
                Blog
              </NavLink>
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
          <HeaderCart />
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
