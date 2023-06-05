import { createSlice } from "@reduxjs/toolkit";

const cartinfo = createSlice({
  name: "cartinfo",
  initialState: {
    cart: [{
        price:0,
        q:0,
        imgurl:""
    }],
   
  },
  reducers: {
    add(state, action) {
      const findc = state.cart.find((item) => item.id == action.payload.id);
      if (findc) {
        findc.q += 1;
        
        findc.price+=action.payload.price;

        // findc.imgurl=action.payload.imgurl
        // console.log( findc.imgurl);
        
        // console.log(findc.count);
        // findc.count.co=findc.q;
        
        return;
      }
      state.cart.push({
        q: 1,
        id: action.payload.id,
        
        price:action.payload.price,
        imgurl:action.payload.imgurl
      });
    },
    remov(state, action) {
      const findc = state.cart.find((item) => item.id == action.payload.id);
      if (findc) {
        findc.q -= 1;
        findc.price-=action.payload.price;
        
        if (findc.q <= 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        }
      }
    }
  
  },
});

export default cartinfo.reducer;
export const { add, remov } = cartinfo.actions;
