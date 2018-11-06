import React from "react";
import {Link} from "react-router-dom";
import SocialAuth from "../components/auth/socialAuth";

export default function LoginView(){
  return (
    <div >
      <form > 
        <h1>Please Login</h1>
        <SocialAuth/>
        <input placeholder="Email..." type="text" name="email"/><br/>
        <input placeholder="password..."type="password" name="password"/><br/>
        <Link to="/">
          <button  type ="submit">Login</button>
        </Link>
        <Link to="/password_reset">
          <button  type ="submit">forgot passsword ?</button>
        </Link>
      </form>
    </div>
  );
}
