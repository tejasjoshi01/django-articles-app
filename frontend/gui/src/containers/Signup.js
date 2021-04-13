import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth.js';
import { NavLink } from "react-router-dom";


import { Form, Input, Button } from 'antd';

const formItemLayout = {
     labelCol: {
          xs: {
               span: 24,
          },
          sm: {
               span: 8,
          },
     },
     wrapperCol: {
          xs: {
               span: 24,
          },
          sm: {
               span: 16,
          },
     },
};
const tailFormItemLayout = {
     wrapperCol: {
          xs: {
               span: 24,
               offset: 0,
          },
          sm: {
               span: 16,
               offset: 8,
          },
     },
};




function Signup(props) {

          const [form] = Form.useForm();

          const handleSubmit = (values, errorInfo) => {
               if (!errorInfo) {
                    console.log('Received values of form: ', values);
                    props.onAuth(values.username, values.email, values.password, values.confirm);
                    props.history.push('/');
               } else {
                    console.log('Failed:', errorInfo);
               }
          };

          let errorMessage = null;
          if (props.error) {
               errorMessage = (
                    <p>{props.error.message} </p>
               )
          }


          return (
               <div>
                    {errorMessage}

                    <Form
                         {...formItemLayout}
                         form={form}
                         name="register"
                         onFinish={handleSubmit}
                         initialValues={{
                              prefix: '86',
                         }}
                         scrollToFirstError
                    >
                         <Form.Item
                              name="email"
                              label="E-mail"
                              rules={[
                                   {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                   },
                                   {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                   },
                              ]}
                         >
                              <Input/>
                         </Form.Item>

                         <Form.Item
                              name="username"
                              label="Username"
                              rules={[{ required: true, message: 'Please input your username!'}]}
                         >
                              <Input/>
                         </Form.Item>

                         <Form.Item
                              name="password"
                              label="Password"
                              rules={[
                                   {
                                        required: true,
                                        message: 'Please input your password!',
                                   },
                              ]}
                              hasFeedback
                         >
                              <Input.Password/>
                         </Form.Item>

                         <Form.Item
                              name="confirm"
                              label="Confirm Password"
                              dependencies={['password']}
                              hasFeedback
                              rules={[
                                   {
                                        required: true,
                                        message: 'Please confirm your password!',
                                   },
                                   ({ getFieldValue }) => ({
                                        validator(_, value) {
                                             if (!value || getFieldValue('password') === value) {
                                                  return Promise.resolve();
                                             }

                                             return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                   }),
                              ]}
                         >
                              <Input.Password/>
                         </Form.Item>

                         <Form.Item {...tailFormItemLayout}>
                              <Button type="primary" htmlType="submit">
                                   Register
                              </Button> 
                              Or  
                              <NavLink to="/login/" style={{ marginRight: '10px' }} >
                                   login
                              </NavLink>
                         </Form.Item>
                    </Form>


               </div>
          )
};

const mapStateToProps = (state) => {
          return {
               loading: state.loading,
               error: state.error
          }
}

const mapDispatchToProps = (dispatch) => {
          return {
               onAuth: (username, email, password1, password2) => dispatch(actions.authSignUp(username, email, password1, password2))
          }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);










