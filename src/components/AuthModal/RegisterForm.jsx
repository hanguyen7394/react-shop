import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import FormField from '../FormField';
import { REGREX } from '../../constant/regrex';
import { MESSAGE } from '../../constant/message';
import { useAuthContext } from '../../context/AuthContext';

const RegisterForm = () => {
  const { handleRegister } = useAuthContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const _onSubmit = (data) => {
    handleRegister(data, () => {
      handleCloseModal();
    });
  };

  return (
    <div className="tab-pane fade show active" id="register" role="tabpanel" aria-labelledby="register-tab">
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
          placeholder="Your email address"
          label="Your email address"
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
            <span>SIGN UP</span>
            <i className="icon-long-arrow-right" />
          </button>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="policy"
              {...register('policy', { required: MESSAGE.policy })}
            />
            <label className="custom-control-label" htmlFor="policy">
              I agree to the&nbsp;
              <Link to={PATHS.POLICY}>privacy policy</Link> *
            </label>
            {errors?.policy?.message && <p className="form-error">{errors?.policy?.message || ''}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
