import React from "react";
import { Route, Redirect } from "react-router-dom";
import ArticleListView from "./ArticleListView.js";
import ArticleDetailView from "../components/ArticleDetailView.js";
import NormalLoginForm from "../containers/Login.js";
import Signup from "../containers/Signup.js";
import CreateArticle from "../containers/CreateArticle.js";

const BaseRouter = (props) => {
  return (
    <div>
      <Route exact path="/" component={ArticleListView} />
      <Route exact path="/articles/:articleID/" component={ArticleDetailView} />
      <Route exact path="/login/" component={NormalLoginForm} />
      <Route exact path="/signup/" component={Signup} />
     <Route exact path="/create/">
          {props.isAuthenticated ? <CreateArticle /> : <Redirect to="/login/" /> }
     </Route>
    </div>
  );
};

export default BaseRouter;
