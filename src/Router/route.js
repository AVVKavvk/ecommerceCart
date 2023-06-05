import { createSlice } from "@reduxjs/toolkit";

const route = createSlice({
  name: "route",
  initialState: {
    cart: [{
        price:0,
        q:0,
        url:""
    }],
   
  },
  reducers: {
        additem(state,action){
            if(action.payload==='')
            {
                return ;
            }
          state.cart.push({

              url:action.payload.imgurl,
              
              
            }
          )
        }
    },
    removitem(state, action) {
      
    }
  
  },
);

export default route.reducer;
export const { additem, removitem } = route.actions;
