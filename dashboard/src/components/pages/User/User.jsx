import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from "antd";



const User = () => {
  let [users,setUsers] = useState([]);
  let [username,setUsername] = useState([]);




const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: {
      target: 'full-header',
    },
    filters: username,
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Email',
    dataIndex: 'email',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

useEffect(() =>{
  let username = [];
  async function user(){
  let userData = await  axios.get('http://127.0.0.1:8000/api/v1/auth/alluser')
  setUsers(userData.data)
  userData.data.map((item) => (
    username.push({
      text:item.name,
      value:item.name
    })
  ))
  setUsername(username)
  }
  user()
  
  
},[])
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
  return (
    <>
    <div>User</div>
    {/* {users.map((item) => (
      <h1>{item.name}</h1>
    ))} */}
      <Table
    columns={columns}
    dataSource={users}
    onChange={onChange}
    showSorterTooltip={{
      target: 'sorter-icon',
    }}
  />
    </>
  )
}

export default User