import React from "react";
import PropTypes from "prop-types";
import { InputBox } from "./inputBox";

const PasswordResetForm = props => {
  const emailInput = event => {
    event.preventDefault();
    props.Submit({
      user: {
        email: event.target.email.value,
        url: `http://${window.location.host}/reset_confirm/`
      }
    });
  };
  return (
    <div className="signup-form">
      <form onSubmit={emailInput}>
        <h2>Password Reset</h2>
        <p className="hint-text">
          Enter your email to receive password reset link
        </p>
        <InputBox {...props} />
        <SubmitBtn {...props} />
      </form>
    </div>
  );
};
const SubmitBtn = props => (
  <div className="form-group">
    <button
      id={props.id}
      type={props.button}
      className="btn btn-success btn-lg btn-block signup-btn"
    >
      {props.buttonvalue}
    </button>
  </div>
);
SubmitBtn.propTypes = {
  id: PropTypes.string,
  button: PropTypes.string,
  buttonvalue: PropTypes.string
};

export default PasswordResetForm;
