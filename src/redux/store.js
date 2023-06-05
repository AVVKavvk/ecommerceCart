import { configureStore } from "@reduxjs/toolkit";
import  Product  from "./slice/productSlice";
import cartinfo from './slice/add_remove';
import route from '../Router/route';
export default configureStore({
    reducer:{
        Product,
        cartinfo,
        route
    }
})