import React from "react";
import Home from "../components";
import LoginPage from "../components/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerUser from "../components/auth/registerUser";
import CreateArticle from "../components/articles/createArticle";
import NewPassword from "../components/auth/passwordReset/newPassword";
import ResetRequest from "../components/auth/passwordReset/passwordResetPage";
import ProtectedRoute from "./protectedRoutes";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact strict />
          <Route path="/login" component={LoginPage} exact strict />
          <Route path="/register" component={registerUser} exact strict />
          <Route path="/password_reset" component={ResetRequest} exact strict />
          <Route path="/reset_confirm/:token" component={NewPassword} strict />
          <ProtectedRoute path="/create-article" component={CreateArticle} exact strict/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
