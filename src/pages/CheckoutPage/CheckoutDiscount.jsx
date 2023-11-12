import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import { MESSAGE } from '../../constant/message';

const DiscountWrapperStyled = styled.div`
  display: flex;
  gap: 10px;
  height: 40px;

  .form-control {
    margin-bottom: 0;
  }

  .checkout-discount {
    margin-bottom: 0;
    flex: 1;
  }

  label {
    cursor: pointer;
  }
`;

const CheckoutDiscount = ({ addedCoupon, handleAddCoupon, handleRemoveCoupon }) => {
  useEffect(() => {
    $('#checkout-discount-input')
      .on('focus', function () {
        $(this).parent('form').find('label').css('opacity', 0);
      })
      .on('blur', function () {
        var $this = $(this);

        if ($this.val().length !== 0) {
          $this.parent('form').find('label').css('opacity', 0);
        } else {
          $this.parent('form').find('label').css('opacity', 1);
        }
      });
  }, []);

  useEffect(() => {
    reset({
      discountCode: addedCoupon,
    });
  }, [addedCoupon]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { discountCode: addedCoupon } });

  const _onAddCoupon = (data) => {
    if (data?.discountCode) {
      handleAddCoupon(data.discountCode);
    }
  };

  const _onRemoveCoupon = () => {
    handleRemoveCoupon();
  };

  return (
    <DiscountWrapperStyled>
      <div className="checkout-discount">
        <form>
          <input
            type="text"
            className="form-control"
            id="checkout-discount-input"
            {...register('discountCode', {
              required: MESSAGE.required,
            })}
          />
          <label htmlFor="checkout-discount-input" className="text-truncate">
            Have a coupon? <span>Click here to enter your code</span>
          </label>
        </form>
        <p className="form-error" style={{ minHeight: '23px' }}>
          {errors?.discountCode?.message || ''}
        </p>
      </div>
      {addedCoupon ? (
        <Button variant="outline" onClick={_onRemoveCoupon}>
          Remove
        </Button>
      ) : (
        <Button onClick={handleSubmit(_onAddCoupon)}>Add</Button>
      )}
    </DiscountWrapperStyled>
  );
};

export default CheckoutDiscount;
