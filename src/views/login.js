import React from "react";
import {Link} from "react-router-dom";

export default function LoginView(){
  return (
    <div >
      <form > 
        <h1>Please Login</h1>
        <input placeholder="Email..." type="text" name="email"/><br/>
        <input placeholder="password..."type="password" name="password"/><br/>
        <Link to="/">
          <button  type ="submit">Login</button>
        </Link>
      </form>
    </div>
  );
}
