import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from "antd";



const Category = () => {
  let [categories,setCategories] = useState([]);
  let [username,setUsername] = useState([]);




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
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
];

useEffect(() =>{
  let data = [];
  async function user(){
  let userData = await  axios.get('http://127.0.0.1:8000/api/v1/product/allcategory')
 console.log(userData.data);
 
 
  userData.data.map((item) => (

    data.push({
      key:item.id,
      name:item.name,
      isActive:item.isActive? 'Approved':'Pending',
    }) 

  ))
  setCategories(data)
  }
  user()
  
  
},[])
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
    </>
  )
}

export default Category