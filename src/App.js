import React, { Component } from "react";
import AppRoutes from "./routes";
import "./assets/css/App.scss";
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
