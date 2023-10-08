import React, { createContext, useContext, useEffect, useState } from 'react';
import authService from '../services/authService';
import tokenMethod from '../utils/token';
import { message } from 'antd';
import useMutation from '../hooks/useMutation';

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [showedModal, setShowedModal] = useState('');
  const [profile, setProfile] = useState({});
  const { execute: updateProfile } = useMutation(authService.updateProfile);
  const { execute: executeLogin, loading: loadingLogin } = useMutation(authService.login);
  const { execute: executeRegister, loading: loadingRegister } = useMutation(authService.register);

  useEffect(() => {
    if (!!tokenMethod.get()) {
      handleGetProfile();
    }
  }, []);

  const handleShowModal = (modalType = '') => {
    setShowedModal(modalType);
    $('body').addClass('modal-open');
  };

  const handleCloseModal = (e) => {
    e?.stopPropagation();
    $('body').removeClass('modal-open');
    setShowedModal('');
  };

  const handleLogout = (e) => {
    tokenMethod.remove();
    message.success('Signed out successfully')
    setProfile({});
  };

  const handleGetProfile = async () => {
    if (!!tokenMethod.get()) {
      try {
        const res = await authService.getProfile();
        if (res?.data?.data) {
          setProfile(res.data.data);
        }
      } catch (error) {
        console.error(error);
        handleLogout();
      }
    }
  };

  const handleUpdateProfile = async (formData) => {
    const payload = {
      ...formData,
      lastName: '',
    };
    updateProfile(payload, {
      onSuccess: async () => {
        message.success('Updated information successfully');
        await handleGetProfile();
      },
      onFail: () => {
        message.error('Updated information failed');
      },
    });
  };

  const handleLogin = async (loginData, callback) => {
    const payload = { ...loginData };

    executeLogin(payload, {
      onSuccess: async (data) => {
        const { token: accessToken, refreshToken } = data;
        tokenMethod.set({ accessToken, refreshToken });
        message.success('Signed in successfully');
        handleGetProfile();
      },
      onFail: () => {
        message.error('Signed in failed');
      },
      onFinally: () => {
        callback?.();
      },
    });
  };

  const handleRegister = async (registerData, callback) => {
    const payload = {
      ...registerData,
      firstName: '',
      lastName: '',
    };

    executeRegister(payload, {
      onSuccess: async () => {
        handleLogin(registerData);
        message.success('Registered successfully');
      },
      onFail: () => {
        message.error('Registered failed');
        console.error(error);
      },
      onFinally: () => {
        callback?.();
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        showedModal,
        profile,
        handleGetProfile,
        handleUpdateProfile,
        handleShowModal,
        handleCloseModal,
        handleLogout,
        handleLogin,
        handleRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
