import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Space, Table,Modal, Input, Form  } from "antd";
import { useSelector } from 'react-redux';



const Category = () => {
  let [categories,setCategories] = useState([]);
  let [loadData,setLoadData] = useState(false);
  const [loading, setLoading] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState('');

  const data = useSelector((state) => state.activeUser.value)

let handleDelete = async(id) =>{
  setLoading(id)
  let userData = await  axios.post('http://127.0.0.1:8000/api/v1/product/deletecategory',{id:id})
  console.log(userData);
  setLoadData(!loadData)
  setLoading('')
}

let handleApproved = async(item) =>{
  setLoading(item.key);
  let response = await axios.post(
    "http://localhost:8000/api/v1/product/approvecategory",
    {
      isActive: (item.isActive == "Approved") ? false : true,
      id: item.key,
    }
  );

  console.log(response);
  setLoadData(!loadData);
  setLoading("");
}

const showModal = (id) => {
  setEditId(id)
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};
const onFinishModal = async (values) => {
  await  axios.post('http://127.0.0.1:8000/api/v1/product/editcategory',{
    name:values.name,
    id:editId
  })
  .then((respone) =>{
    setLoadData(!loadData)
    setIsModalOpen(false);
    
  })
  .catch((err) =>{
    console.log(err)
  })
  
  // console.log(data);
  
  console.log('Success:', values);
};
const onFinishFailed =  (errorInfo) => {
 
  console.log('Failed:', errorInfo);
};


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: {
      target: 'full-header',
    },
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Status',
    dataIndex: 'isActive',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Action',
    dataIndex: 'isActive',
    render: (_, record) => (
      <Space size="middle">
        {data.role == 'Merchant' &&
        <Button onClick={()=> showModal(record.key)}>Edit</Button>
  }
        <Button onClick={()=>handleDelete(record.key)} loading={loading == record.key? true: ''}>Delete</Button>
        {data.role == 'Admin' &&
          <Button onClick={()=>handleApproved(record)}
            loading={loading == record.key ? true : false}
            >
              {" "}
              {record.isActive == "Approved" ? "Hold" : "Approve"}{" "}
          </Button>

        }
      </Space>
    ),
  },
];

useEffect(() =>{
  let data = [];
  async function user(){
  let userData = await  axios.get('http://127.0.0.1:8000/api/v1/product/allcategory')
 
 
  userData.data.map((item) => (

    data.push({
      key:item._id,
      name:item.name,
      isActive:item.isActive? 'Approved':'Pending',
    }) 

  ))
  setCategories(data)
  }
  user()
  
  
},[loadData])
const onChange = (pagination, sorter, extra) => {
  console.log('params', pagination, sorter, extra);
};
  return (
    <>
    <h2>All Category</h2>
      <Table
    columns={columns}
    dataSource={categories}
    onChange={onChange}
    showSorterTooltip={{
      target: 'sorter-icon',
    }}
  />
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
    onFinish={onFinishModal}
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
      </Modal>
    </>
  )
}

export default Category