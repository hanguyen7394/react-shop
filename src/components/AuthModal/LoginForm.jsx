import React from 'react';
import FormField from '../FormField';
import { useForm } from 'react-hook-form';
import { MESSAGE } from '../../constant/message';
import { REGREX } from '../../constant/regrex';
import { useAuthContext } from '../../context/AuthContext';

const LoginForm = () => {
  const { handleCloseModal, handleLogin } = useAuthContext();

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
    <div className="tab-pane fade show active">
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
        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>LOG IN</span>
            <i className="icon-long-arrow-right" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
