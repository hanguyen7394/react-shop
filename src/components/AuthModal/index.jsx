import React from 'react';
import ReactDOM from 'react-dom';
import { useAuthContext } from '../../context/AuthContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { MODAL_TYPES } from '../../constant/common';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const AuthModal = () => {
  const { showedModal, handleCloseModal, handleShowModal } = useAuthContext();
  return ReactDOM.createPortal(
    <>
      <div
        className={classNames('modal fade', {
          show: !!showedModal
        })}
        id="signin-modal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
        style={{ display: !!showedModal ? 'block' : 'none' }}
        onClick={handleCloseModal}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
              <button
                type="button"
                className="close"
                onClick={handleCloseModal}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close" />
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
                    <li className="nav-item">
                      <Link
                        className={classNames('nav-link', {
                          active: showedModal === MODAL_TYPES.LOGIN
                        })}
                        onClick={() => handleShowModal(MODAL_TYPES.LOGIN)}
                      >
                        Sign In
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={classNames('nav-link', {
                          active: showedModal === MODAL_TYPES.REGISTER
                        })}
                        onClick={() => handleShowModal(MODAL_TYPES.REGISTER)}
                      >
                        Register
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    {showedModal === MODAL_TYPES.LOGIN && <LoginForm />}
                    {showedModal === MODAL_TYPES.REGISTER && <RegisterForm />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!!showedModal && <div className="modal-backdrop fade show"></div>}
    </>,
    document.body
  );
};

export default AuthModal;
