import React, { Component,Fragment } from "react";
import AppRoutes from "./routes";
import "./assets/css/App.scss";
import { Provider } from "react-redux";
import store from "./store/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <ToastContainer />
          <AppRoutes />
        </Fragment>
      </Provider>
    );
  }
}
export default App;
