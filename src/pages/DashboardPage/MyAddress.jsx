import React from 'react';
import useDashboardPage from './useDashboardPage';
import { PATHS } from '../../constant/paths';
import { Link } from 'react-router-dom';

const MyAddress = () => {
  const { addressProps } = useDashboardPage();
  const { profile, provinceName, districtName, wardName } = addressProps || {};
  const { firstName, lastName, phone, email, street } = profile || {};
  const fullName = lastName ? firstName + ' ' + lastName : firstName;
  const fullAddress = `${street}, ${wardName}, ${districtName}, ${provinceName}`;

  return (
    <div className="tab-pane fade show active" id="tab-address" role="tabpanel" aria-labelledby="tab-address-link">
      <p>The following addresses will be used on the checkout page by default.</p>
      <div className="row">
        <div className="col-lg-6">
          <div className="card card-dashboard">
            <div className="card-body">
              <h3 className="card-title">Billing Address</h3>
              <p>
                <strong>Fullname:</strong> {fullName} <br />
                <strong>Email:</strong> {email} <br />
                <strong>Phone number:</strong> {phone} <br />
                <br />
                <Link to={PATHS.DASHBOARD.INDEX}>
                  Edit <i className="icon-edit" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-dashboard">
            <div className="card-body">
              <h3 className="card-title">Shipping Address</h3>
              <p>
                {fullAddress} <br />
                <br />
                <Link to={PATHS.DASHBOARD.INDEX}>
                  Edit <i className="icon-edit" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddress;
