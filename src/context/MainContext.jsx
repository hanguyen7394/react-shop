import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const pathname = useLocation();
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const [selectedTab, setSelectedTab] = useState('main');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setIsShowNavbar(false);
  }, [pathname]);

  useEffect(() => {
    if (isShowNavbar) {
      $('body').addClass('mmenu-active');
    } else {
      $('body').removeClass('mmenu-active');
    }
  }, [isShowNavbar])


  const handleToggleNavbar = (action) => {
    setIsShowNavbar(action || !isShowNavbar);
  };

  const handleChangeTab = (tabName) => {
    setSelectedTab(tabName);
  }

  return <MainContext.Provider value={{ isShowNavbar, selectedTab, handleToggleNavbar, handleChangeTab }}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);

export default MainContextProvider;
