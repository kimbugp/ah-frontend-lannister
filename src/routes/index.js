import React from "react";
import Home from "../components";
import Login from "../components/login";
import {BrowserRouter,Route,Switch} from "react-router-dom";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact strict/>
        <Route path="/login" component={Login} exact strict/>
        {/* Add your routes here */}
      </Switch>
    </BrowserRouter>
  );

}
