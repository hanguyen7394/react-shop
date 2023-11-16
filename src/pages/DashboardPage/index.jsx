import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { PATHS } from '../../constant/paths';

const DashboardPage = () => {
  return (
    <main className="main">
      <div className="page-header text-center" style={{ backgroundImage: 'url("/assets/images/page-header-bg.jpg")' }}>
        <div className="container">
          <h1 className="page-title">My Account</h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </div>
      </nav>
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
                    <a className="nav-link" href="#">
                      Sign Out
                    </a>
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
