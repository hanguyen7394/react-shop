import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import { formatCurrency } from '../../utils/format';
import { message } from 'antd';
import RadioGroup from '../../components/RadioGroup';
import { SHIPPING_OPTIONS } from '../../constant/common';

const CartSummary = ({ subTotal, total, typeShip, handleUpdateShipping }) => {
  const navigate = useNavigate();

  const _onProccedCheckout = (e) => {
    e?.preventDefault();
    if (!typeShip) {
      message.error('Please chose a ship type');
    } else {
      navigate(PATHS.CHECKOUT);
    }
  };

  return (
    <div className="summary summary-cart">
      <h3 className="summary-title">Cart Total</h3>
      <table className="table table-summary">
        <tbody>
          <tr className="summary-subtotal">
            <td>Subtotal:</td>
            <td>{formatCurrency(subTotal)}</td>
          </tr>
          <tr className="summary-shipping">
            <td>Shipping:</td>
            <td>&nbsp;</td>
          </tr>
          <RadioGroup defaultValue={typeShip || ''} onGroupChange={handleUpdateShipping}>
            {SHIPPING_OPTIONS.map(({ label, value, price }) => {
              return (
                <tr key={value} className="summary-shipping-row">
                  <td>
                    <RadioGroup.Item value={value}>{label}</RadioGroup.Item>
                  </td>
                  <td>{formatCurrency(price)}</td>
                </tr>
              );
            })}
          </RadioGroup>
          <tr className="summary-shipping-estimate">
            <td>
              Estimate for Your Country <br />
              <Link to={PATHS.DASHBOARD.INDEX}>Change address</Link>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr className="summary-total">
            <td>Total:</td>
            <td>{formatCurrency(total)}</td>
          </tr>
        </tbody>
      </table>
      <Link onClick={_onProccedCheckout} className="btn btn-outline-primary-2 btn-order btn-block">
        PROCEED TO CHECKOUT
      </Link>
    </div>
  );
};

export default CartSummary;
