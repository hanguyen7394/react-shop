import React from 'react';
import { Outlet } from 'react-router-dom';
import MainContextProvider from '../context/MainContext';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';
import ScrollTopButton from '../components/SrollTopButton';

const MainLayout = () => {
  return (
    <MainContextProvider>
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
    </MainContextProvider>
  );
};

export default MainLayout;
