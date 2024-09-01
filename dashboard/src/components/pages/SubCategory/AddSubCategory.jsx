import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Input, Space, Select } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";


const AddSubCategory = () => {
  const data = useSelector((state) => state.activeUser.value)
  let [categories, setCategories] = useState([]);


  const onFinish = async (values) => {
    await  axios.post('http://127.0.0.1:8000/api/v1/product/categorysubcreate',{
      name:values.name,
      ownerid:data.id,
      categoryid:values.categoryid
    })
    .then((respone) =>{
      console.log(respone);
      
    })
    .catch((err) =>{
      console.log(err)
    })
    
    
    console.log('Success:', values);
  };
  const onFinishFailed =  (errorInfo) => {
   
    console.log('Failed:', errorInfo);
  };

  useEffect(()=>{
    let arr = [];
    async function getCategory(){
      let catData = await axios.get("http://localhost:8000/api/v1/product/allcategory")
      catData.data.map((item) => {
        arr.push({
          value: item._id,
          label: item.name,
        });
      });

      setCategories(arr);
    }
    getCategory()
    console.log(categories);
    
  },['']);
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
        label="SubCategory"
        name="categoryid"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        
        <Select 
        defaultValue="Select a Category"
        // onChange={handleCategoryChange}
        options={categories}
        />
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

export default AddSubCategory