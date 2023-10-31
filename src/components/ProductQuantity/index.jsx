import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const ProductQuantity = ({ max, defaultValue, handleChangeQuantity }, ref) => {
  const [quantity, setQuantity] = useState(defaultValue || 1);

  useImperativeHandle(ref, () => {
    return {
      value: quantity,
      reset: () => {
        setQuantity(1);
      },
    };
  });

  const _onChangeQuantity = (number) => {
    number = Math.floor(number);

    if (number < 1) {
      number = 1;
    } else if (number > Number(max)) {
      number = Number(max);
    }

    setQuantity(number);
    handleChangeQuantity(number);
  };

  const _onClickDecrease = () => {
    _onChangeQuantity(quantity - 1);
  };

  const _onClickIncrease = () => {
    _onChangeQuantity(quantity + 1);
  };

  const _onChangeInput = (e) => {
    const value = e.target.value;
    _onChangeQuantity(value);
  };

  return (
    <div className="input-group input-spinner">
      <div className="input-group-prepend">
        <button
          onClick={_onClickDecrease}
          disabled={quantity <= 1}
          style={{ minWidth: 26 }}
          className="btn btn-decrement btn-spinner"
          type="button"
        >
          <i className="icon-minus" />
        </button>
      </div>
      <InputStyled
        onChange={_onChangeInput}
        type="number"
        style={{ textAlign: 'center' }}
        value={quantity}
        className="form-control"
        required
      />
      <div className="input-group-append">
        <button
          onClick={_onClickIncrease}
          disabled={quantity >= Number(max)}
          style={{ minWidth: 26 }}
          className="btn btn-increment btn-spinner"
          type="button"
        >
          <i className="icon-plus" />
        </button>
      </div>
    </div>
  );
};

export default forwardRef(ProductQuantity);
