import React, { Component } from "react";
import AppRoutes from "./routes";
import "./assets/authAssets/socialAuth.css";
import { Provider } from "react-redux";
import configureStore from "./store/";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppRoutes />
      </Provider>
    );
  }
}
export default App;
