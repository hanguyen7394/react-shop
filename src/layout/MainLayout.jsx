import React, { useEffect } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { scrollToTop } from '../utils/common';
import { handleToggleNavbar } from '../reducers/mainReducer';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';
import ScrollTopButton from '../components/SrollTopButton';

const MainLayout = () => {
  const dispatch = useDispatch();
  const pathname = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('stopSrolling') === 'true') return;
    scrollToTop();
    dispatch(handleToggleNavbar(false));
  }, [pathname]);

  useEffect(() => {
    if ($('.sticky-header').length && $(window).width() >= 992) {
      var sticky = new Waypoint.Sticky({
        element: $('.sticky-header')[0],
        stuckClass: 'fixed',
        offset: -300
      });
    }
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <div>
        <ScrollTopButton />
        <HeaderMobile />
        <AuthModal />
      </div>
    </>
  );
};

export default MainLayout;
