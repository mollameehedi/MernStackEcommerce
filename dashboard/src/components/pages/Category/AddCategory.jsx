import React from 'react';
import { Button, Card, Form, Input, Space } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";


const AddCategory = () => {
  const data = useSelector((state) => state.activeUser.value)


  const onFinish = async (values) => {
    await  axios.post('http://127.0.0.1:8000/api/v1/product/categorycreate',{
      name:values.name,
      ownerid:data.id
    })
    .then((respone) =>{
      console.log(respone);
      
    })
    .catch((err) =>{
      console.log(err)
    })
    
    console.log(data);
    
    console.log('Success:', values);
  };
  const onFinishFailed =  (errorInfo) => {
   
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <Space direction="vertical" size={24}>
    <Card title="Create New Category" style={{ maxWidth:"500" }}>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Category Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your Categroy name!',
        },
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </Card>
  </Space>
  </>
  )
};

export default AddCategory