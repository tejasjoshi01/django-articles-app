import React from "react";
import {Route} from "react-router-dom";
import ArticleListView from "./ArticleListView.js";
import ArticleDetailView from "../components/ArticleDetailView.js";
import NormalLoginForm from "../containers/Login.js";
import Signup from "../containers/Signup.js";

const BaseRouter = () => {
     return (
          <div>
               <Route exact path='/' component={ArticleListView}/>
               <Route exact path='/articles/:articleID/' component={ArticleDetailView}/>
               <Route exact path='/login/' component={NormalLoginForm}/>
               <Route exact path='/signup/' component={Signup}/>
          </div>
     )

}

export default BaseRouter ;