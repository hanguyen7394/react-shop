import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
const Header = lazy(() => import('../components/Header'));
const Footer = lazy(() => import('../components/Footer'));
const ScrollTopButton = lazy(() => import('../components/SrollTopButton'));
const HeaderMobile = lazy(() => import('../components/HeaderMobile'));
const AuthModal = lazy(() => import('../components/AuthModal'));
import MainContextProvider from '../context/MainContext';
import ComponentLoading from '../components/ComponentLoading';

const MainLayout = () => {
  return (
    <MainContextProvider>
        <Suspense fallback={<ComponentLoading style={{height: '100vh'}}/>}>
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
        </Suspense>
    </MainContextProvider>
  );
};

export default MainLayout;
