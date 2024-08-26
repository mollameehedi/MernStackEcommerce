import { Card, Space ,Button, Checkbox, Form, Input} from 'antd';
import axios from "axios";
import {Link, useNavigate, useParams} from 'react-router-dom';

function ChangePassword() {
  let {email} = useParams();

    let navigate = useNavigate()
      const onFinish = (values) => {
        
        let forgotPasswordData  = { 
          password:values.password,
          token:email
        }
        
        axios.post('http://127.0.0.1:8000/api/v1/auth/changepassword',forgotPasswordData)
      .then((response) =>{
      console.log(response);
      
        // navigate(`/otp/${response.data.email}`)
        
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
        <Card title="Change Password" extra={<a href="#">More</a>} style={{ width: 300 }}>
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
          label="New Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your New password!',
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
            Login
          </Button>
          <br/>
          <Link to="/forgotpassword">Forgot Password</Link>
        </Form.Item>
      </Form>
        </Card>
      </Space>
        </>
      )
    }


export default ChangePassword