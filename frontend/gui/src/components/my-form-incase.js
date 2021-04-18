

// import { Form, Input, Button } from "antd";
// import React, { useState } from 'react';
// import axios from "axios";
// import { Upload, message } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// /* eslint-disable no-template-curly-in-string */
// const validateMessages = {
//   required: "${label} is required!"
// };





// // state = {
// //   loading: false,
// // };




// function CustomForm(props) {
//     const [form] = Form.useForm();

//     // Upload image utils . 
//     function beforeUpload(file) {
//       const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//       if (!isJpgOrPng) {
//         message.error('You can only upload JPG/PNG file!');
//       }
//       const isLt2M = file.size / 1024 / 1024 < 2;
//       if (!isLt2M) {
//         message.error('Image must smaller than 2MB!');
//       }
//       return isJpgOrPng && isLt2M;
//     }
//     function getBase64(img, callback) {
//         const reader = new FileReader();
//         reader.addEventListener('load', () => callback(reader.result));
//         reader.readAsDataURL(img);
//     }

//     const [state, setState] = useState({
//       imageUrl : "" ,
//       loading : false
//     });
//     // image handle .....
//     const handleChange = info => {
//       if (info.file.status === 'uploading') {
//         setState({ 
//           ...state,
//           loading: true 
//         });
//         return;
//       }
//       if (info.file.status === 'done') {
//         // Get this url from response in real world.
//         getBase64(info.file.originFileObj, imageUrl =>
//           setState({
//             imageUrl,
//             loading: false,
//           }),
//         );
//       }
//     };




//     const handleSubmit = (data, responseType, articleID) => {
//           console.log("Values", data);
//           console.log('Image', state.imageUrl) ;
//           form.resetFields();

//           // Post the final clean data .
//           if (responseType === "put") {
//             axios.put(`http://127.0.0.1:8000/api/${articleID}/`, data).then(
//               (response) => {
//                 console.log(response);
//                 window.location.reload();
//               },
//               (error) => {
//                 console.log(error);
//               }
//             );
//           } else {
//             axios.post("http://127.0.0.1:8000/api/", data).then(
//               (response) => {
//                 console.log(response);
//               },
//               (error) => {
//                 console.log(error);
//               }
//             );
//           }

//     };

//     const { loading, imageUrl } = state;
//     const uploadButton = (
//        <div>
//          {loading ? <LoadingOutlined /> : <PlusOutlined />}
//          <div style={{ marginTop: 8 }}>Upload</div>
//        </div>
//     );
          

//   return (
//     <Form
//       {...layout}
//       form={form}
//       name="nest-messages"
//       onFinish={handleSubmit}
//       validateMessages={validateMessages}
//     >
//       <Form.Item
//         name={["title"]}
//         label="Title"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name={["sub_title"]}
//         label="Sub Title"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item 
//           name={["content"]} 
//           label="Content"
//       >
//         <Input.TextArea />
//       </Form.Item>

//       <Form.Item 
//           name={["ref_image"]}
//           label="Image"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//       >      
//         <Upload
//           name="avatar"
//           listType="picture-card"
//           className="avatar-uploader"
//           showUploadList={false}
//           action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//           beforeUpload={beforeUpload}
//           onChange={handleChange}
//         >
//           {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//         </Upload>
//       </Form.Item>


//       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// }

// export default CustomForm;













