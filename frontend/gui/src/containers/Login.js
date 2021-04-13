import React from "react";
import * as actions from "../store/actions/auth.js";
import {connect} from "react-redux";


import { Form, Input, Button } from "antd";
import { NavLink } from "react-router-dom";
import { Spin, Space } from 'antd';




const layout = {
     labelCol: {
          span: 8,
     },
     wrapperCol: {
          span: 16,
     },
};
const tailLayout = {
     wrapperCol: {
          offset: 8,
          span: 16,
     },
};








function NormalLoginForm(props) {

     const handleSubmit = (values, errorInfo) => {
          if(!errorInfo){
               console.log('Success:', values);
               props.onAuth(values.username, values.password);
               props.history.push('/')  ;
          }else{
               console.log('Failed:', errorInfo);
          }
          
     };

     let errorMessage = null ;
     if(props.error) {
          errorMessage = (
               <p>{props.error.message} </p>
          )
     }
     


     return (
          <div>

               {errorMessage}
               {

               props.loading?  
               
               
                    <Space size="middle">
                         <Spin size="large" />
                    </Space>
               
               :
               <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                         remember: true,
                    }}
                    onFinish={handleSubmit}
               >
                    <Form.Item
                         label="Username"
                         name="username"
                         rules={[
                              {
                                   required: true,
                                   message: "Please input your username!",
                              },
                         ]}
                    >
                         <Input />
                    </Form.Item>

                    <Form.Item
                         label="Password"
                         name="password"
                         rules={[
                              {
                                   required: true,
                                   message: "Please input your password!",
                              },
                         ]}
                    >
                         <Input.Password />
                    </Form.Item>


                    <Form.Item {...tailLayout}>
                         <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                              Submit
                         </Button>
                         Or  
                         <NavLink to="/signup/" style={{ marginRight: '10px' }} >
                              
                              SignUp
                         </NavLink>
                    </Form.Item>
               </Form> 

               
          }
          </div>
          
  ); 
}

const mapStateToProps = (state) => {
     return {
          loading : state.loading ,
          error : state.error
     }
}

const mapDispatchToProps = (dispatch) => {
     return {
          onAuth : (username, password) => dispatch(actions.authLogin(username, password)) 
        }
}

export default connect(mapStateToProps, mapDispatchToProps )(NormalLoginForm) ;
