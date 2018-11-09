import React from "react";
import PropTypes from "prop-types";
import { newPasswordRequest } from "../../../actions/authActions.js/passswordResetAction";
import { connect } from "react-redux";
import EmailSuccess from "../../../views/authViews/EmailSuccess";
import Form from "../../../views/authViews/newPasswordForm";

export class ResetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      error: "sdfgd",
      divclass: "form-group",
      psw2: "form-group"
    };
  }
  componentDidMount() {
    localStorage.setItem("token", this.props.match.params.token);
  }
  componentWillReceiveProps(nextProps) {
    localStorage.clear();
    if (nextProps.resetStatus === 200) {
      this.setState({ success: true });
    }
  }

  passwordInput = event => {
    event.preventDefault();
    this.setState({
      confirmPassword: event.target.confirmPassword.value,
      password: event.target.password.value
    });
    let token = localStorage.getItem("token");
    event.target.confirmPassword.setCustomValidity("");
    if (this.state.password === event.target.confirmPassword.value) {
      this.setState({ disabled: false });
      this.props.newPasswordRequest(
        { user: { password: this.state.password } },
        token
      );
      event.target.confirmPassword.setCustomValidity("");
    } else {
      this.setState({ psw2: "form-group c-error" });
      event.target.confirmPassword.setCustomValidity("Passwords not matching");
    }
  };
  handlePassword = event => {
    this.setState({ password: event.target.value });
    var re = new RegExp("(?=.*[A-Z])(?=.*[a-z]).{8,}");
    if (re.test(this.state.password) === false) {
      this.setState({ divclass: "form-group c-error" });
      event.target.setCustomValidity(
        "Password must contains be atleast 8 characters,with uppercase,lowercase ,number and a symbol such as (@!##?>)"
      );
    } else {
      this.setState({ divclass: "form-group" });
      event.target.setCustomValidity("");
      
    }
  };
  redirect = () => {
    let path = "/login";
    this.props.history.push(path);
  };
  render() {
    const formattrib = {
      passwordInput: this.passwordInput,
      handlePassword: this.handlePassword,
      handleChange: this.handleChange,
      message: this.state.error,
      divclass: this.state.divclass,
      psw2: this.state.psw2
    };
    const resetSuccess = {
      value: "Password Changed Successfully ,click the link below to login",
      heading: "A-Haven ",
      btnvalue: "Log In",
      clickAction: this.redirect
    };
    if (this.state.success === true) {
      return <EmailSuccess {...resetSuccess} />;
    } else {
      return <Form {...formattrib} />;
    }
  }
}
ResetPage.propTypes = {
  Submit: PropTypes.func,
  newPasswordRequest: PropTypes.func,
  match: PropTypes.object,
  params: PropTypes.object,
  token: PropTypes.string,
  resetStatus: PropTypes.number,
  history: PropTypes.object,
  push: PropTypes.object,
  disabled: PropTypes.bool
};
const mapStateToProps = state => ({
  resetStatus: state.passwordResetReducer.user
});

export default connect(
  mapStateToProps,
  { newPasswordRequest }
)(ResetPage);
