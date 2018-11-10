import React, { Component } from "react";
import AppRoutes from "./routes";
import "./assets/css/App.scss";
import "./assets/articleAssets/demo2.scss";
import "./assets/authAssets/socialAuth.css";
import { Provider } from "react-redux";
import store from "./store/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <ToastContainer />
          <AppRoutes />
        </React.Fragment>
      </Provider>
    );
  }
}
export default App;
