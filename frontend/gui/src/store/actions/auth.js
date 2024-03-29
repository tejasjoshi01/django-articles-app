import * as actionTypes from './actionType.js';
import axios from 'axios';

export const authStart = () => {
     return {
          type: actionTypes.AUTH_START
     }
}


export const authSuccess = (token) => {
     return {
          type: actionTypes.AUTH_SUCCESS,
          token: token
     }
}

export const authFail = (error) => {
     return {
          type: actionTypes.AUTH_FAIL,
          error: error

     }
}


export const logout = () => {
     localStorage.removeItem('token');
     localStorage.removeItem('expirationDate');

     return {
          type : actionTypes.AUTH_LOGOUT
     }
}

export const checkAuthTimeout=(expirationTime)=>{
     return dispatch => {

          setTimeout(()=> { 
               dispatch(logout());
          }, expirationTime * 1000);
     }
}

export const authLogin = (username, password) => {
     return dispatch => {
          dispatch(authStart());
          axios.post("http://127.0.0.1:8000/rest-auth/login/", { 
               username: username,
               password: password
          }).then((response) => {
               console.log(response);
               const token = response.data.key ; 
               // console.log("User Data", response.data);
               const expirationDate = new Date(new Date().getTime() + 36000*1000)
               localStorage.setItem('token', token);
               localStorage.setItem('expirationDate', expirationDate)
               dispatch(authSuccess(token));
               dispatch(checkAuthTimeout(3600));

          }).catch((error) => {
               console.log(error);
               dispatch(authFail(error));
          })
     }
}



export const authSignUp = (username, email, password1, password2) =>{
     return dispatch => {
          dispatch(authStart());
          axios.post("http://127.0.0.1:8000/rest-auth/registration/", { 
               username: username , 
               email: email,
               password1 : password1, 
               password2 : password2, 
          }).then((response)=>{
               const token = response.data.key;
               const expirationDate = new Date(new Date().getTime + 3600*1000); // add 1 hr . 
     
               localStorage.setItem('token',token);
               localStorage.setItem('expirationDate',expirationDate);
     
               dispatch(authSuccess(token));
               dispatch(checkAuthTimeout(3600));
          }).catch((error)=>{
               dispatch(authFail(error));
          })
     }
}


export const authCheckState = () => {
     return dispatch => {
         const token = localStorage.getItem('token');
         if (token === undefined) {
             dispatch(logout());
         } else {
             const expirationDate = new Date(localStorage.getItem('expirationDate'));
             if ( expirationDate <= new Date() ) {
                 dispatch(logout());
             } else {
                 dispatch(authSuccess(token));
                 dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
             }
         }
     }
 }