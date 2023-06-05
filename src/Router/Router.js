import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Show from "./Show";
import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
function Router() {
  const deplo = useSelector((state) => state.cartinfo.cart);
  let p = 0;
  let c = 0;
  // console.log(deplo);
  deplo.forEach((element) => {
    p += element.price * 50;
    c += element.q;
  });

  let u = 0;
  const u1 = useRef(null);
  const u2 = useRef(null);
  const u3 = useRef(null);
  // dispatch(route({deplo}))
  // console.log(deplo);
  // deplo.forEach(element => {
  //     // dispatch(route(element.img));
  //     // dispatch(route(element));

  //     console.log(element);
  // });
  // const aaa = () => {
  //  alert('Successfully Ordered')
  // }
  // function z() {
  //   alert("Name = " ,{u1});

  // }
  return (
    <>
      <div className="productlist">
        {deplo.slice(1) &&
          deplo.slice(1).map((item, i) => <Show key={i} props={item} />)}
      </div>
      <div className="last">
        <div className="last-l">
          <h2 className="w">Total Quantity: {c}</h2>
          <h2 className="w">Total Rs: {p.toFixed(1)}</h2>
        </div>
        <div className="last-r">
          <Form>
            <Form.Item name="Name" label="Name" rules={[{ required: true }]}>
              <Input ref={u1} />
            </Form.Item>
            <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
              <Input ref={u2} />
            </Form.Item>

            <Form.Item
              name="payment"
              label="Payment"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select a option For Payment" ref={u3}>
                <Option value="male">UPI</Option>
                <Option value="female">Card</Option>
                <Option value="other">Cash on delivery</Option>
              </Select>
            </Form.Item>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Router;
