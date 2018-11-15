import React from "react";
import "../../../assets/authAssets/form.css";
import InvokeReset from "../../../actions/authActions/passswordResetAction";
import { connect } from "react-redux";
import "../../../assets/authAssets/error.css";
import EmailSuccess from "../../../views/authViews/EmailSuccess";
import PasswordResetForm from "../../../views/authViews/resetRequestForm";

export class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      validsubmit: false
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.user.status === 200
      ? this.setState({ validsubmit: true})
      : this.setState({ redirect: true});
  }
  handleSubmit = input => {
    this.props.InvokeReset(input);
  };
  redirect=()=>{
    let path = "/register";
    this.props.history.push(path);
  }
  render() {
    const { success, redirect, attrib } = this.propValues();
    let form;
    if (this.state.validsubmit===true) {
      form=<EmailSuccess {...success}/>;
    } else if(this.state.redirect===true){
      form =<EmailSuccess {...redirect}/>;
    }
    else{
      form = <PasswordResetForm {...attrib} />;
    }
    return (
      <div>
        {form}
      </div>
    );
  }

  propValues() {
    const attrib = {
      type: "email",
      placeholder: "Enter your email address",
      name: "email",
      title: "Email",
      className: "form-control input-lg reset-form",
      button: "submit",
      value: "Email",
      buttonvalue: "Send Reset Link",
      id: "reset-form",
      Submit: this.handleSubmit
    };
    const success = {
      value: "Please check your email for the reset link",
      heading: "Password Reset",
      style: { display: "none" }
    };
    const redirect = {
      value: "Email not yet used ,please click the link below to signup",
      heading: "SignUp Redirect",
      clickAction: this.redirect,
      btnvalue: "Sign Up"
    };
    return { success, redirect, attrib };
  }
}
const mapStateToProps = state => ({
  user: state.passwordResetReducer.user
});

export default connect(
  mapStateToProps,
  { InvokeReset }
)(PasswordReset);
