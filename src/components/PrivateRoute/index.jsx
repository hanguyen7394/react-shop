import React, { useEffect } from 'react';
import tokenMethod from '../../utils/token';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { MODAL_TYPES } from '../../constant/common';

const PrivateRoute = ({ redirectPath }) => {
  const { handleShowModal } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!!tokenMethod.get()) {
      handleShowModal(MODAL_TYPES.LOGIN);
    }
  }, [handleShowModal]);

  if (!!!tokenMethod.get()) {
    if (redirectPath) {
      return <Navigate to={redirectPath} />;
    } else {
      navigate(-1);
    }
  }

  return <Outlet />;
};

export default PrivateRoute;
