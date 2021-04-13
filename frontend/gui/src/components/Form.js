import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
// import ArticleDetailView from "./ArticleDetailView";



function CustomForm(props) {

     const [formData, setformData] = useState({
          title: '',
          sub_title: '',
          content: ''
     })

     const handleSubmit = (e, responseType, articleID) => {
          e.preventDefault();
          console.log(formData);

          if(responseType==="put"){
               axios.put(`http://127.0.0.1:8000/api/${articleID}/`, formData)
               .then((response) => {
                 console.log(response);
                    window.location.reload();
               }, (error) => {
                 console.log(error);
               });  
          }else{
               axios.post('http://127.0.0.1:8000/api/', formData)
               .then((response) => {
                 console.log(response);
               }, (error) => {
                 console.log(error);
               }); 
          }
          


  


          setformData({
               title: '',
               sub_title: '',
               content: ''           
          });
     }

     const handleChange = (e) => {
          setformData({ 
               ...formData, 
               [e.target.id]: e.target.value
          })
     }

     return (
          <div>
               <Form>
                    <Form.Item label="title">
                         <Input id="title" placeholder="title"
                              onChange={handleChange} 
                              value={formData.title}
                              />
                    </Form.Item>
                    <Form.Item label="sub title">
                         <Input id="sub_title" placeholder="subtile"
                              onChange={handleChange} 
                              value={formData.sub_title}
                              />
                    </Form.Item>
                    <Form.Item label="content">
                         <Input id="content" placeholder="content"
                              onChange={handleChange} 
                              value={formData.content}     
                              />
                    </Form.Item>
                    <Form.Item>
                         <Button type="primary" onClick={e=> handleSubmit(e, props.responseType, props.articleID)}>Submit</Button>
                    </Form.Item>
               </Form>
          </div>
     );
}

export default CustomForm;



