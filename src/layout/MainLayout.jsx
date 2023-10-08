import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ScrollTopButton from '../components/SrollTopButton';
import HeaderMobile from '../components/HeaderMobile';
import AuthModal from '../components/AuthModal';
import MainContextProvider from '../context/MainContext';
import AuthContextProvider from '../context/AuthContext';

const MainLayout = () => {
  return (
    <MainContextProvider>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </MainContextProvider>
  );
};

export default MainLayout;
