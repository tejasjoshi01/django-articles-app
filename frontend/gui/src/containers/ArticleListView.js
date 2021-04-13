import React, { useState, useEffect } from 'react';
import Article from "../components/Article.js"
import axios from 'axios';
import CustomForm from "../components/Form.js";

function ArticleListView() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/")
    .then(res => {
      setArticles(res.data);
    } )
  }, []);

  console.log("Here are my articles : ")
  console.log(articles);


  return (
      <div>
        <Article data={articles}/> 
        <br/>
        <CustomForm/>
      </div>
    )
}

export default ArticleListView



