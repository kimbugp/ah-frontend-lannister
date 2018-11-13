import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/auth/socialAuth";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button} from "reactstrap";
import logo from "../../assets/img/home.png";
import PropTypes from "prop-types";

const LoginView = props => (
  <div className="signup-form">
    <AvForm onValidSubmit={props.handleSubmit}>
      <h1>Authors Haven - Log In</h1>
      <p className="hint-text">
        Log in below with your email address and password
      </p>
      <SocialLogin />
      <div className="or-seperator">
        <b>or</b>
      </div>
      <AvField name="email" label="Email Address" type="email" required errorMessage="Invalid email"/>
      <AvField name="password" label="Password" type="password" required errorMessage="Enter your password"/>
      <Button
        className="btn btn-success btn-lg btn-block signup-btn"
        color="primary"
      >
        Log In
      </Button>
      <div id="password-reset" className="center-text">
        <Link to="/register">New user ? Sign Up Here </Link>
      </div>
      <div className="center-text">
        <Link to="/password_reset">Forgot Password ?</Link>
      </div>
      <div className="center-text">
        <Link to="/">
          <img id="home-icon" src={logo} alt="home" />
        </Link>
      </div>
    </AvForm>
  </div>
);
LoginView.propTypes = {
  handleSubmit: PropTypes.func
};

export default LoginView;
