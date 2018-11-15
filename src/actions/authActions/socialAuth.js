import { SOCIAL_AUTH, LOGIN } from "../actionTypes";
import axios from "axios";
import { BASEURL } from ".";

const SocialLogin = payload=>({
  type:SOCIAL_AUTH,
  payload
});
const LogIn = payload=>({
  type:LOGIN,
  status:payload
});

export const facebookAuth  =  (acessToken)=>  dispatch =>{
   
  axios.post(BASEURL+"facebook/", acessToken)
    .then(res => {
      localStorage.setItem("token",res.data.user.token);
      dispatch(SocialLogin(res.data.user));

      dispatch(LogIn(true));

    });};
export const googleAuth = (acessToken)=> dispatch =>{
   
  axios.post(BASEURL+"google/", acessToken)
   
    .then(res => {
      localStorage.setItem("token",res.data.token);
      dispatch(SocialLogin(res.data));
      dispatch(LogIn(true));
      
    });
  
};
