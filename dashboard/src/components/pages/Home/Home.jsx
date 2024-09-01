import React, { useState, } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import {Outlet, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


const Home = () => {
  const data = useSelector((state) => state.activeUser.value);


  const items = [
    data.role == "Admin" &&
    getItem("Users", "sub1", <MailOutlined />, [
      getItem("Merchant", "/home/marchant"),
      getItem("Users", "/home/userlist"),
    ]),
    getItem("Product", "sub2", <AppstoreOutlined />, [
      getItem("Category", "sub3", null, [
        getItem("Add Category", "/home/addcategory"),
        getItem("View Category", "/home/category"),
      ]),
      getItem("Sub Category", "sub4", null, [
        getItem("Add Sub Category", "/home/addsubcategory"),
        getItem("View Sub Category", "/home/subcategory"),
      ]),
      getItem("Product", "sub5", null, [
        getItem("Add Product", "/home/addproduct"),
        getItem("View Product", "8"),
        getItem("Add Variant", "/home/addvariant"),
      ]),
    ]),
    getItem("Store", "sub6", <SettingOutlined />, [
      getItem("Add Store", "/home/addstore"),
      getItem("View Store", "10"),
    ]),
    getItem("Discount", "sub7", <SettingOutlined />, [
      getItem("Add Discount", "/home/adddiscount"),
      getItem("View Discount", "12"),
    ]),
    getItem("Affiliat", "sub8", <SettingOutlined />, [
      getItem("Get Link", "/home/affiliate"),
    ]),
  ];
  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeys = getLevelKeys(items);

  let navigate = useNavigate();
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  const handleClick = (e) => {
    navigate(e.key);
    
  };
  return (
    <>
    <Row>
      <Col span={5}>
      <Menu
      mode="inline"
      defaultSelectedKeys={['231']}
      openKeys={stateOpenKeys}
      onClick={handleClick}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
    />
      </Col>
      <Col span={19}>
    <Outlet/>
      </Col>
    </Row>
    
    </>
  );
};
export default Home;