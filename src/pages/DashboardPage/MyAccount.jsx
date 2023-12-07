import React, { useEffect } from 'react';
import FormField from '../../components/FormField';
import { Controller, useForm } from 'react-hook-form';
import { MESSAGE } from '../../constant/message';
import { REGREX } from '../../constant/regrex';
import { useSelector } from 'react-redux';
import { Select } from 'antd';
import { removeAccents } from '../../utils/common';
import useAddress from '../../hooks/useAddress';
import useDashboardPage from './useDashboardPage';

const MyAccount = () => {
  const { accountProps } = useDashboardPage();
  const { profile, handleUpdateProfile } = accountProps || {};
  const { firstName, lastName, phone, email, province, district, ward, street, birthday } = profile || {};
  const fullName = lastName ? firstName + ' ' + lastName : firstName;

  const {
    register,
    reset,
    control,
    watch,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName,
      phone: phone,
      email: email,
      birthday: '',
      province: '',
      district: '',
      ward: '',
      street: '',
      password: '',
      newPassword: '',
      retypePassword: '',
    },
  });

  const {
    provinces,
    districts,
    wards,
    selectedProvince,
    selectedDistrict,
    selectedWard,
    handleProvinceChange,
    handleDistrictChange,
    handleWardChange,
  } = useAddress();

  useEffect(() => {
    if (!profile) return;
    reset?.({
      fullName,
      phone,
      email,
      birthday: birthday?.split('T')[0],
      province,
      district,
      ward,
      street,
    });
    handleProvinceChange?.(province);
    handleDistrictChange?.(district);
    handleWardChange?.(ward);
  }, [profile]);

  const _onProvinceChange = (provinceId) => {
    handleProvinceChange?.(provinceId);
    reset?.({
      ...getValues(),
      province: provinceId,
      district: undefined,
      ward: undefined,
    });
  };

  const _onDistrictChange = (districtId) => {
    handleDistrictChange?.(districtId);
    reset?.({
      ...getValues(),
      district: districtId,
      ward: undefined,
    });
  };

  const _onWardChange = (wardId) => {
    handleWardChange?.(wardId);
    reset?.({
      ...getValues(),
      ward: wardId,
    });
  };

  const _onSubmit = (data) => {
    handleUpdateProfile(data);
  };

  return (
    <div className="tab-pane fade show active" id="tab-account" role="tabpanel" aria-labelledby="tab-account-link">
      <form onSubmit={handleSubmit(_onSubmit)} className="account-form">
        <div className="row">
          <FormField
            className="col-sm-6"
            {...register('fullName', {
              required: MESSAGE.required,
            })}
            error={errors?.fullName?.message || ''}
            placeholder="Full Name"
            label="Full Name"
            required
          />
          <FormField
            className="col-sm-6"
            {...register('email', {
              required: MESSAGE.required,
              pattern: {
                value: REGREX.email,
                message: MESSAGE.email,
              },
            })}
            error={errors?.email?.message || ''}
            placeholder="Email address"
            label="Email address"
            required
          />
        </div>
        <div className="row">
          <FormField
            className="col-sm-6"
            {...register('phone', {
              required: MESSAGE.required,
            })}
            error={errors?.phone?.message || ''}
            placeholder="Phone number"
            label="Phone number"
            required
          />
          <FormField
            className="col-sm-6"
            {...register('birthday', {
              required: MESSAGE.required,
            })}
            error={errors?.birthday?.message || ''}
            placeholder="mm/dd/yyyy"
            label="Birthday"
            type="date"
            required
          />
        </div>
        <div className="row">
          <Controller
            name="province"
            control={control}
            rules={{ required: MESSAGE.required }}
            render={({ formState: { errors } }) => {
              return (
                <FormField
                  className="col-sm-4"
                  error={errors?.province?.message || ''}
                  label="Province/City"
                  required
                  renderField={() => (
                    <Select
                      className="select-custom"
                      showSearch
                      placeholder="Province/City"
                      onChange={_onProvinceChange}
                      status={errors?.province ? 'error' : ''}
                      filterOption={(input, option) =>
                        removeAccents(option?.label ?? '')
                          .toLowerCase()
                          .includes(removeAccents(input.toLowerCase()))
                      }
                      options={provinces}
                      value={selectedProvince}
                    />
                  )}
                />
              );
            }}
          />

          <Controller
            name="district"
            control={control}
            rules={{ required: MESSAGE.required }}
            render={({ formState: { errors } }) => {
              return (
                <FormField
                  className="col-sm-4"
                  error={errors?.district?.message || ''}
                  label="District/Town"
                  required
                  renderField={() => (
                    <Select
                      className="select-custom"
                      showSearch
                      placeholder="District/Town"
                      onChange={_onDistrictChange}
                      status={errors?.district ? 'error' : ''}
                      filterOption={(input, option) =>
                        removeAccents(option?.label ?? '')
                          .toLowerCase()
                          .includes(removeAccents(input.toLowerCase()))
                      }
                      options={districts}
                      value={selectedDistrict}
                    />
                  )}
                />
              );
            }}
          />

          <Controller
            name="ward"
            control={control}
            rules={{ required: MESSAGE.required }}
            render={({ formState: { errors } }) => {
              return (
                <FormField
                  className="col-sm-4"
                  error={errors?.ward?.message || ''}
                  label="Ward"
                  required
                  renderField={() => (
                    <Select
                      className="select-custom"
                      showSearch
                      placeholder="Ward"
                      onChange={_onWardChange}
                      status={errors?.ward ? 'error' : ''}
                      filterOption={(input, option) =>
                        removeAccents(option?.label ?? '')
                          .toLowerCase()
                          .includes(removeAccents(input.toLowerCase()))
                      }
                      options={wards}
                      value={selectedWard}
                    />
                  )}
                />
              );
            }}
          />
        </div>
        <FormField
          {...register('street', {
            required: MESSAGE.required,
          })}
          className=""
          error={errors?.street?.message || ''}
          placeholder="House number and Street name"
          label="Street address"
          required
        />
        <FormField
          {...register('password', {
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          })}
          className=""
          error={errors?.password?.message || ''}
          placeholder="Current password"
          label="Current password (leave blank to leave unchanged)"
          type="password"
        />
        <FormField
          {...register('newPassword', {
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          })}
          className=""
          error={errors?.newPassword?.message || ''}
          placeholder="New password"
          label="New password (leave blank to leave unchanged)"
          type="password"
        />
        <FormField
          {...register('retypePassword', {
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
            validate: (value) => {
              if (value !== watch('newPassword')) {
                return 'The passwords do not match';
              }
            },
          })}
          className="form-group"
          error={errors?.retypePassword?.message || ''}
          placeholder="Confirm new password"
          label="Confirm new password"
          type="password"
        />

        <button type="submit" className="btn btn-outline-primary-2">
          <span>SAVE CHANGES</span>
          <i className="icon-long-arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default MyAccount;
