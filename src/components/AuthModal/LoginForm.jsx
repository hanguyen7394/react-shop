import React from 'react';
import FormField from '../FormField';
import { useForm } from 'react-hook-form';
import { MESSAGE } from '../../constant/message';
import { REGREX } from '../../constant/regrex';
import { useAuthContext } from '../../context/AuthContext';
import ComponentLoading from '../ComponentLoading';
import useDebounce from '../../hooks/useDebounce';

const LoginForm = () => {
  const { handleCloseModal, handleLogin, loadingLogin } = useAuthContext();
  const loadingDebounce = useDebounce(loadingLogin, 300);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const _onSubmit = (data) => {
    handleLogin(data, () => {
      handleCloseModal();
    });
  };

  return (
    <div className="tab-pane fade show active" style={{ position: 'relative' }}>
      {loadingDebounce && <ComponentLoading />}
      <form onSubmit={handleSubmit(_onSubmit)}>
        <FormField
          {...register('email', {
            required: MESSAGE.required,
            pattern: {
              value: REGREX.email,
              message: MESSAGE.email,
            },
          })}
          error={errors?.email?.message || ''}
          placeholder="Username or email address"
          label="Username or email address"
          required
        />
        <FormField
          {...register('password', { required: MESSAGE.required })}
          error={errors?.password?.message || ''}
          type="password"
          placeholder="Password"
          label="Password"
          required
        />
        <button type="submit" className="btn btn-outline-primary-2">
          <span>LOG IN</span>
          <i className="icon-long-arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
