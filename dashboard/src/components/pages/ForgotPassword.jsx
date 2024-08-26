import { Card, Space ,Button, Checkbox, Form, Input} from 'antd';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function ForgotPassword() {

    let navigate = useNavigate()
      const onFinish = (values) => {
        
        let data  = {
          email:values.email, 
        }
        axios.post('http://127.0.0.1:8000/api/v1/auth/forgotpassword',data)
      .then((response) =>{
         console.log('Link Send Successfully!!')
        
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
        <Card title="Forgot Password" extra={<a href="#">More</a>} style={{ width: 300 }}>
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
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Send Link
          </Button>
         
        </Form.Item>
      </Form>
        </Card>
      </Space>
        </>
      )
    }

export default ForgotPassword
