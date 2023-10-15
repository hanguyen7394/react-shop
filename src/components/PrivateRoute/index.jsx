import React, { useEffect } from 'react';
import tokenMethod from '../../utils/token';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { MODAL_TYPES } from '../../constant/common';
import { useDispatch } from 'react-redux';
import { handleShowModal } from '../../reducers/authReducer';

const PrivateRoute = ({ redirectPath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!!tokenMethod.get()) {
      dispatch(handleShowModal(MODAL_TYPES.LOGIN));
    }
  }, []);

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
