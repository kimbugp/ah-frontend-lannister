import React, { Component } from "react";
import LoginView from "../../views/authViews/login";
import { connect } from "react-redux";
import LoginAction from "../../actions/authActions/loginAction";
import { toast } from "react-toastify";
import { Authenticate } from "../../routes/protectedRoutes";

export class Login extends Component {
  state = {};
  handleSubmit = (event, value) => {
    this.setState({ user: value });
    this.props.LoginAction(this.state);
  };
  componentDidMount(){
    if(Authenticate(localStorage.getItem("token"))){
      this.props.history.push("/view-articles");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.user) {
      toast.success("you have succesfully logged in", {
        autoClose: 2500,
        hideProgressBar: true
      });
      localStorage.setItem("token", nextProps.user.user.token);
      nextProps.history.push("/view-articles");
    } else {
      toast.error("Invalid login details", {
        autoClose: 2500,
        hideProgressBar: true
      });
    }
  }
  render() {
    const attrib = {
      handleSubmit: this.handleSubmit,
      isLoggedIn: false,
      validate: this.validate
    };
    return <LoginView {...attrib} />;
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  { LoginAction }
)(Login);
