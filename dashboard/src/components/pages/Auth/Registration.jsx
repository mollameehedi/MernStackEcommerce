import { Card, Space ,Button, Checkbox, Form, Input} from 'antd';
import axios from "axios";
import {useNavigate} from 'react-router-dom';


function Registration() {

  let navigate = useNavigate()
    const onFinish = (values) => {
      
      let data  = {
        name:values.name,
        email:values.email,
        password:values.password,
      }
     axios.post('http://127.0.0.1:8000/api/v1/auth/registration',data)
      .then((response) =>{
        console.log(response);
        navigate(`/otp/${response.data.email}`)
        
      })
      .catch((err) =>{
        console.log(err);
        
      })
      
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <>
      <Space direction="vertical" size={16}>
      <Card title="Registration" extra={<a href="#">More</a>} style={{ width: 300 }}>
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
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
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
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
  
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
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
  }

export default Registration