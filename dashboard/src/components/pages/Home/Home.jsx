import React, { useState, } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import {Outlet, useNavigate} from 'react-router-dom';

const items = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Users',
    children: [
      {
        key: '/marchantlist',
        label: 'Merchants',
      },
      {
        key: '/userlist',
        label: 'Users',
      }
    ],
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Category',
    children: [
      {
        key: '/category',
        label: 'Category',
      },
      {
        key: '/subcategory',
        label: 'Sub Category',
      },
      
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: 'Product',
    children: [
      {
        key: 'productcreate',
        label: 'Create',
      },
      {
        key: 'allproduct',
        label: 'All Products',
      }
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: 'Discount',
    children: [
      {
        key: '31',
        label: 'Add Discount',
      },
      {
        key: '32',
        label: 'View Discount',
      }
    ],
  },
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

const Home = () => {
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