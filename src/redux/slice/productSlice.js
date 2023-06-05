import { createSlice } from "@reduxjs/toolkit";

const product=createSlice({
    name: "product",
    initialState:{
        product:[]
    },
    reducers: {
        addProduct(state, action) {
            state.product=action.payload;
    }
}})
export default product.reducer;
export const {addProduct}=product.actions;