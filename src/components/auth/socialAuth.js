import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { facebookAuth, googleAuth } from "../../actions/authActions/socialAuth";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { APP_ID, CLIENT_ID } from "../../config";

export class SocialAuth extends Component {
  onFailure = error => {
    alert(error);
  };
  handleFacebookResponse = response => {
    this.props.facebookAuth({ access_token: response.accessToken });
  };

  handleGoogleResponse = response => {
    this.props.googleAuth({ access_token: response.accessToken });
  };
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{textAlign:"center"}}>
        <FacebookLogin
          appId={APP_ID}
          fields="name,email,picture"
          callback={this.handleFacebookResponse}
          textButton=""
          cssClass="c-facebook"
          icon="fa fa-facebook"
        />

        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText=""
          onSuccess={this.handleGoogleResponse}
          onFailure={this.handleGoogleResponse}
          className="fa fa-google c-google"
        />
      </div>
    );
  }
}
SocialAuth.propTypes = {
  user: PropTypes.object,
  isLoggedIn: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  facebookAuth: PropTypes.func,
  googleAuth: PropTypes.func
};
const mapStateToProps = state => ({
  user:state.userReducer.user,
  isLoggedIn: state.userReducer.isLoggedIn
});
export default connect(
  mapStateToProps,
  { facebookAuth, googleAuth }
)(SocialAuth);
