import React , {useEffect} from "react";
import "antd/dist/antd.css";
import CustomLayout from "./containers/Layout.js";
import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./containers/routes.js";
import {connect} from 'react-redux';


import * as actions from './store/actions/auth.js';

function App(props) {

  useEffect(() => {
    props.onTryAutoSignup() ; 
  },[])



  
  //  <CustomLayout {...props} > by using this we are passing isAuthentiacated to the Custom layout . 

  return (
    <div >
      <BrowserRouter>
        <CustomLayout {...props} > 
          <BaseRouter />
        </CustomLayout>
      </BrowserRouter>
    </div>
  );
}





// what mapStateToProps does ?? : mapStateToProps takes state and let us map it to properties 
const mapStateToProps = state => {
  return {
    isAuthenticated : state.token !== null ,
  }
}

// for auto check authentication every time we reload . 
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup : () => dispatch(actions.authCheckState()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
