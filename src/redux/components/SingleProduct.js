import React from 'react'
import { Button } from 'antd';
import  './SingleProduct.css';
// import add from '../';
import { useDispatch, useSelector } from 'react-redux';
import { add, remov } from '../slice/add_remove';

function SingleProduct({props}) {

const dispatch=useDispatch();
const deploy=useSelector(state=>state.cartinfo.cart)

const fin=deploy.find(item=>item.id==props.id);
const pas={
  id:props.id,
  price:props.price,
  imgurl:props.image
}
const v=fin ? fin.q:0;
const p=fin ? fin.price:0;
const im=fin ? fin.imgurl:"";

  return (
    <div className="productimg" >
   <img  src= {props.image} alt={props.description} />
  <div className="info">

  <h5 className="title">{props.title}</h5>
   <h3 className="price"> Rs. {(props.price)*50}</h3>
  </div>
  <div className="cartinfo">
  <Button type="primary" className="btn" onClick={()=>dispatch(add(pas))} >+</Button>
  <h4> {v} </h4>
  <Button type="primary" className="btn" onClick={()=>dispatch(remov(pas))}>-</Button>
  </div>
      <div className="total">
        <h4 style={{display:'block'}}> Rs: {(p*50).toFixed(1)}</h4>
        
        </div>
    </div>
  )
}

export default SingleProduct