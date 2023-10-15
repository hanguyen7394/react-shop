import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MODAL_TYPES } from '../../constant/common';
import { PATHS } from '../../constant/paths';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout, handleShowModal } from '../../reducers/authReducer';

const HeaderTop = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.auth);
  const [showedDropdown, setShowedDropdown] = useState(false);

  const { firstName, lastName } = profile || {};
  const fullName = firstName || lastName ? `${firstName} ${lastName}` : 'Guest';

  const _onShowDropdown = (e) => {
    e?.stopPropagation();
    setShowedDropdown(true);
  };

  const _onHideDropdown = () => {
    setShowedDropdown(false);
  };

  const _onShowModal = (type) => {
    dispatch(handleShowModal(type));
  }

  const _onLogout = () => {
    dispatch(handleLogout());
  }

  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <a href="tel:0989596912">
            <i className="icon-phone" /> Hotline: 098 9596 912{' '}
          </a>
        </div>
        <div className="header-right">
          {!profile?.id ? (
            <ul className="top-menu top-link-menu">
              <li>
                <Link onClick={() => _onShowModal(MODAL_TYPES.LOGIN)} className="top-menu-login">
                  <i className="icon-user"></i>Login | Resgister{' '}
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="top-menu" onMouseEnter={_onShowDropdown} onMouseLeave={_onHideDropdown}>
              <li>
                <Link className="top-link-menu">
                  <i className="icon-user" />
                  {fullName}
                </Link>
                <ul style={{ visibility: showedDropdown ? 'visible' : 'hidden', opacity: showedDropdown ? 1 : 0 }}>
                  <li>
                    <ul onClick={_onHideDropdown}>
                      <li>
                        <Link to={PATHS.DASHBOARD.INDEX}>Account Details</Link>
                      </li>
                      <li>
                        <Link to={PATHS.DASHBOARD.ORDER}>Your Orders</Link>
                      </li>
                      <li>
                        <Link to={PATHS.DASHBOARD.WISHLIST}>
                          Wishlist <span>(3)</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={_onLogout}>Sign Out</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
