import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import { useDispatch } from 'react-redux';
import { clearWishlist } from '../../reducers/wishlistReducer';
import { handleLogout } from '../../reducers/authReducer';
import Breadcrumb from '../../components/Breadcrumb';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _onLogout = () => {
    dispatch(clearWishlist());
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };

  return (
    <main className="main">
      <div className="page-header text-center" style={{ backgroundImage: 'url("/assets/images/page-header-bg.jpg")' }}>
        <div className="container">
          <h1 className="page-title">My Account</h1>
        </div>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>My Account</Breadcrumb.Item>
      </Breadcrumb>
      <div className="page-content">
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <aside className="col-md-4 col-lg-3">
                <ul className="nav nav-dashboard flex-column mb-3 mb-md-0">
                  <li className="nav-item">
                    <NavLink end to={PATHS.DASHBOARD.INDEX} className="nav-link">
                      Account Details
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={PATHS.DASHBOARD.ORDER} className="nav-link">
                      Orders
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={PATHS.DASHBOARD.ADDRESS} className="nav-link">
                      Adresses
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={PATHS.DASHBOARD.WISHLIST} className="nav-link">
                      Wishlist
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={_onLogout}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </aside>
              <div className="col-md-8 col-lg-9">
                <div className="tab-content">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
