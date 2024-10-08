import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Card,
  Col,
  Row,
  Select,
  Upload,
} from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddProduct = () => {
  let [checkSize, setCheckSize] = useState("");
  let [value, setValue] = useState("");
  let [valuestock, setValueStock] = useState("");
  let [storelist, setStorelist] = useState([]);
  let [image, setImage] = useState({});
  let [imagePrev, setImagePrev] = useState("");
  let [productType, setProductType] = useState("");
  let [description, setDescription] = useState("");

  let userInfo = useSelector((state) => state.activeUser.value);

  
  
  const onFinishMain = async (values) => {
    let {name,regularprice,salesprice,quantity} = values;
    //formdata object
    
    
    let data = await axios.post(
      "http://localhost:8000/api/v1/product/products",
      {
        name:name,
        description: description,
        avatar: image,
        regularprice: regularprice,
        salesprice: salesprice,
        quantity: quantity,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then(res => {
      console.log(res);
      
    });
  };

  const onFinish = (values) => {
    let arr = [...varinatvalue];

    if (values.variantname.toLowerCase() == "size") {
      setCheckSize("size");
    }
    arr.push({
      name: values.variantname,
      value: [],
    });
    if (arr.length <= 2) {
      setVarinatvalue(arr);
    } else {
      console.log("Bas r na");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleVariantValue = (index) => {
    varinatvalue[index].value.push({
      name: value,
      stock: valuestock,
    });
    let arr = [...varinatvalue];
    console.log(arr);
    setVarinatvalue(arr);
  };

  let handleDelete = (index) => {
    console.log(index);
    let arr = [...varinatvalue];
    arr.splice(index, 1);
    setVarinatvalue(arr);
  };

  let handleValueDelete = (mainid, id) => {
    console.log(mainid, id);
    let arr = [...varinatvalue];
    console.log(arr[mainid].value);
    arr[mainid].value.splice(id, 1);
    setValue(arr);
  };
  useEffect(() => {
   console.log(userInfo.id);
   
    async function getData() {
      let data = await axios.get(
        `http://localhost:8000/api/v1/product/allstore/${userInfo.id}`
      );
      console.log(data.data);
      setStorelist(data.data);
    }
    getData();
  }, []);

  let handleChange = (e) => {
    setImage(e.target.files[0]);
    setImagePrev(URL.createObjectURL(e.target.files[0]));
  };
  let handleChange2 = (e) => {
    setProductType(e);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishMain}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        enctype="multipart/form-data"
      >
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
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Regular Price"
          name="regularprice"
          rules={[
            {
              required: true,
              message: "Please input your regular price!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Sales Price"
          name="salesprice"
          rules={[
            {
              required: true,
              message: "Please input your sales price!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[
            {
              required: true,
              message: "Please input your Quantity!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Input onChange={handleChange} type="file" />
        <img src={imagePrev} />

        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
            setDescription(data);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />

        {/* <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input />
        </Form.Item> */}

<Form.Item
          label="Brand Name"
          name="brandname"
          rules={[
            {
              required: true,
              message: "Please input your brand name!",
            },
          ]}
        >
          <Select>
            {storelist.map((item) => (
              <Select.Option key={item._id} value={item._id}>{item.storename}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
      {productType == "variant" && (
        <>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 1000,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Variant Name"
              name="variantname"
              rules={[
                {
                  required: true,
                  message: "Please input your variant!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </>
      )}
    </>
  );
};

export default AddProduct;