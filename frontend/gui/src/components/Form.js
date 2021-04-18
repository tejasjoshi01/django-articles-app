import React from "react";
import { Button, Form, Input } from 'antd';
import axios from "axios";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!"
};





function CustomForm(props) {
     const [form] = Form.useForm();
     const handleSubmit = (data, responseType, articleID) => {
          console.log("Values", data);
          form.resetFields();



          if (responseType === "put") {
            axios.put(`http://127.0.0.1:8000/api/${articleID}/`, data).then(
              (response) => {
                console.log(response);
                window.location.reload();
              },
              (error) => {
                console.log(error);
              }
            );
          } else {
            axios.post("http://127.0.0.1:8000/api/", data).then(
              (response) => {
                console.log(response);
              },
              (error) => {
                console.log(error);
              }
            );
          }
        };






     

  return (
    <Form
      {...layout}
      form={form}
      name="nest-messages"
      onFinish={handleSubmit}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["title"]}
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["sub_title"]}
        label="Sub Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
          name={["content"]} 
          label="Content"
      >
        <Input.TextArea />
      </Form.Item>


      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CustomForm;




