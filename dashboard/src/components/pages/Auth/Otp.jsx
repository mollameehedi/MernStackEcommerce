import { Card, Space ,Button, Checkbox, Form, Input} from 'antd';
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';

function Otp() {
  let {email} = useParams();
let navigate = useNavigate();

    const onFinish = (values) => {
      
      let data  = {
        email:email,
        otp:values.otp,
      }

     axios.post('http://127.0.0.1:8000/api/v1/auth/otpverify',data)
      .then((response) =>{
        console.log(response);
        navigate('/login')
        
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
      <Card title="Check Email From Otp" extra={<a href="#">More</a>} style={{ width: 300 }}>
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
        label="Opt"
        name="otp"
        rules={[
          {
            required: true,
            message: 'Please input your Otp!',
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
  }

export default Otp