import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../slice/productSlice";
import SingleProduct from "./SingleProduct";

import  './ProductList.css'
function ProductList() {
  const dispatch = useDispatch();
  const deploy = useSelector((state) => state.Product.product);
  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    const reponse = await fetch("https://fakestoreapi.com/products");
    const data = await reponse.json();
    dispatch(addProduct(data));
  }

  return <div className="productlist">{deploy&&deploy.map((item,i)=> < SingleProduct key={i} props={item}/> )}</div>;
}

export default ProductList;
