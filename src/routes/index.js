import React from "react";
import Home from "../components";
import Login from "../components/login";
import SocialAuth from "../components/auth/socialAuth";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import NewPassword from "../components/auth/passwordReset/newPassword";
import ResetRequest from "../components/auth/passwordReset/passwordResetPage";

export default function AppRoutes(){
  
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact strict/>
        <Route path="/login" component={Login} exact strict/>
        <Route path="/register" component={SocialAuth}exact strict/>
        <Route path="/password_reset" component={ResetRequest} exact strict/>
        <Route path="/reset_confirm/:token" component={NewPassword} strict/>
      </Switch> 
    </BrowserRouter>
  );

}
