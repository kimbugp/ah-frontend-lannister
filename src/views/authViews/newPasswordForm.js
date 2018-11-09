import PropTypes from "prop-types";
import React from "react";

const Form = props => {
  return (
    <div className="signup-form">
      <form onSubmit={props.passwordInput}>
        <h2>Password Reset Form</h2>
        <p className="hint-text">Please enter your new password Here</p>
        <PswInput {...props}/>
        <PswConfirm {...props}/>
        <div className="form-group">
          <button
            id="reset-form-2"
            type="submit"
            className="btn btn-success btn-lg btn-block signup-btn"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};
const PswInput = props => (
  <div className={props.divclass}>
    <input
      className="form-control input-lg"
      id="reset-form"
      name="password"
      type="password"
      placeholder="Enter New Password"
      pattern="(?=.*[A-Z])(?=.*[a-z]).{8,}"
      required
      onChange={props.handlePassword}
    />
  </div>
);
const PswConfirm = props => (
  <div className={props.psw2}>
    <input
      className="form-control input-lg "
      id="reset-form-1"
      name="confirmPassword"
      type="password"
      placeholder="Re-enter Password"
      required
      onChange={props.handleChange}
    />
  </div>
);
Form.propTypes = {
  passwordInput: PropTypes.func
};
PswInput.propTypes = {
  handlePassword: PropTypes.func,
  divclass: PropTypes.string,
};
PswConfirm.propTypes = {
  handleChange: PropTypes.func,
  psw2: PropTypes.string
};
export default Form;
