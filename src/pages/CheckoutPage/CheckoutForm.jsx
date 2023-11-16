import { Select, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';
import { MESSAGE } from '../../constant/message';
import { PATHS } from '../../constant/paths';
import { REGREX } from '../../constant/regrex';
import useAddress from '../../hooks/useAddress';
import { getSalePrice, removeAccents } from '../../utils/common';
import { formatCurrency } from '../../utils/format';
import { PAYMENT_METHODS } from '../../constant/common';
import classNames from 'classnames';

const CheckoutForm = ({ handleCheckout }) => {
  const { cartInfo } = useSelector((state) => state.cart);
  const { profile } = useSelector((state) => state.auth);
  const { firstName, lastName, phone, email, province, district, ward, street, note } = profile || {};
  const fullName = lastName ? firstName + ' ' + lastName : firstName;
  const { product, subTotal, shipping, total, quantity, variant, totalProduct, discount, discountCode } =
    cartInfo || {};
  const renderProducts = product?.map((item, index) => ({
    ...item,
    quantity: quantity[index],
    variant: variant[index],
    totalProduct: totalProduct[index],
  }));

  const [paymentMethod, setPaymentMethod] = useState('');
  const isBank = paymentMethod === PAYMENT_METHODS.bank.label;
  const isCash = paymentMethod === PAYMENT_METHODS.cash.label;

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

  const {
    register,
    reset,
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName,
      phone: phone,
      email: email,
      province: '',
      district: '',
      ward: '',
      street: '',
      note: '',
    },
  });

  useEffect(() => {
    if (!profile) return;
    reset?.({
      fullName,
      phone,
      email,
      province,
      district,
      ward,
      street,
      note,
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

  const _onChangePaymentMethod = (e, paymentMethod) => {
    e.preventDefault();
    setPaymentMethod(paymentMethod);
  };

  const _onSubmit = (data) => {
    if (!shipping?.typeShip) {
      message.error('Please select shipping type');
      return;
    }

    if (!paymentMethod) {
      message.error('Please select payment method');
      return;
    }

    handleCheckout({
      formInfo: {
        ...data,
        province: provinces?.find((item) => item.value === province),
        district: districts?.find((item) => item.value === district),
        ward: wards?.find((item) => item.value === ward),
        paymentMethod,
      },
      cartInfo,
    });
  };

  return (
    <form onSubmit={handleSubmit(_onSubmit)} className="checkout-form">
      <div className="row">
        <div className="col-lg-9">
          <h2 className="checkout-title">Billing Details</h2>
          <div className="row">
            <FormField
              className="col-sm-4"
              {...register('fullName', {
                required: MESSAGE.required,
              })}
              error={errors?.fullName?.message || ''}
              placeholder="Full Name"
              label="Full Name"
              required
            />
            <FormField
              className="col-sm-4"
              {...register('phone', {
                required: MESSAGE.required,
              })}
              error={errors?.phone?.message || ''}
              placeholder="Phone number"
              label="Phone number"
              required
            />
            <FormField
              className="col-sm-4"
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
            error={errors?.street?.message || ''}
            placeholder="House number and Street name"
            label="Street address"
            required
          />
          <FormField
            placeholder="Notes about your order, e.g. special notes for delivery"
            label="Order notes (optional)"
            renderField={(fieldProps) => (
              <textarea className="form-control" cols={30} rows={4} {...fieldProps} {...register('note')} />
            )}
          />
        </div>

        <aside className="col-lg-3">
          <div className="summary">
            <h3 className="summary-title">Your Order</h3>
            <table className="table table-summary">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {renderProducts?.map(({ id, name, price, discount, slug, quantity, totalProduct }) => (
                  <tr key={id}>
                    <td>
                      <Link to={`${PATHS.PRODUCT.INDEX}/${slug}`}>{name}</Link>
                      <p>
                        {getSalePrice(price, discount)} x {quantity}{' '}
                      </p>
                    </td>
                    <td>{formatCurrency(totalProduct)}</td>
                  </tr>
                ))}
                <tr className="summary-subtotal">
                  <td>Subtotal:</td>
                  <td>{formatCurrency(subTotal)}</td>
                </tr>
                <tr>
                  <td>Shipping:</td>
                  {!!shipping ? (
                    <td>
                      {shipping?.typeShip} - {formatCurrency(shipping?.price)}
                    </td>
                  ) : (
                    <td>
                      <Link to={PATHS.CART}>Select Shipping</Link>
                    </td>
                  )}
                </tr>
                {!!discount && (
                  <tr>
                    <td>Discount:</td>
                    <td>
                      {/* not found discountCode */}
                      {discountCode} - {formatCurrency(discount)}
                    </td>
                  </tr>
                )}
                <tr className="summary-total">
                  <td>Total:</td>
                  <td>{formatCurrency(total)}</td>
                </tr>
              </tbody>
            </table>
            <div className="accordion-summary">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">
                    <Link
                      className={classNames('', {
                        collapsed: !isBank,
                      })}
                      onClick={(e) => _onChangePaymentMethod(e, PAYMENT_METHODS.bank.label)}
                    >
                      {PAYMENT_METHODS.bank.label}
                    </Link>
                  </h2>
                </div>
                <div
                  className={classNames('collapse', {
                    show: isBank,
                  })}
                >
                  <div className="card-body">{PAYMENT_METHODS.bank.description}</div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">
                    <Link
                      className={classNames('', {
                        collapsed: !isCash,
                      })}
                      onClick={(e) => _onChangePaymentMethod(e, PAYMENT_METHODS.cash.label)}
                    >
                      {PAYMENT_METHODS.cash.label}
                    </Link>
                  </h2>
                </div>
                <div
                  className={classNames('collapse', {
                    show: isCash,
                  })}
                >
                  <div className="card-body">{PAYMENT_METHODS.cash.description}</div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
              <span className="btn-text">Place Order</span>
              <span className="btn-hover-text">Proceed to Checkout</span>
            </button>
          </div>
        </aside>
      </div>
    </form>
  );
};

export default CheckoutForm;
