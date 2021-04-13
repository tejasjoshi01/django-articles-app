import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Card, Button} from "antd";
import CustomForm from "../components/Form.js";


function ArticleDetailView(props) {
  const [article, setArticleDetail] = useState({});
  const { articleID } = useParams();
  useEffect(() => {

    axios.get(`http://127.0.0.1:8000/api/${articleID}`)
    .then(res => {
     setArticleDetail(res.data);
    })

    
  },[]);

  const handleDelete = (e) => {
    axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
    props.history.push('/');
  }


  return (
      <div>

          <Card title={article.title}>
               <p>{article.content}</p>
          </Card>
          <br/>
          <CustomForm
            responseType="put"
            articleID={articleID}
            />
          <Button type="danger" text="Delete" onClick={handleDelete}>Delete</Button>
      </div>
    )
}

export default ArticleDetailView



