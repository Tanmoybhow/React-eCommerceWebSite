import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: "fetchProducts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartList.find(
        (item) => item._id === action.payload._id,
      );
      if (existingItem) {
        if (existingItem.quantity < 5  || action.payload.isfromSingleProduct ) {
          state.cartList = state.cartList.map((item) => {
            if (item._id === action.payload._id) {
              return { ...item, quantity: action.payload.isfromSingleProduct?action.payload.quantity<5?Number(action.payload.quantity):5:Number(item.quantity) + 1 };
            } else {
              return item;
            }
          });
          toast.warning(`${action.payload.title} has been already added`);
        } else {
          toast.error(`You can't add more then 5`);
        }
      } else {
        if(action.payload.isfromSingleProduct){
           if(action.payload.quantity>5){
            toast.error("You cant store more than 5 products");
            return;
           }else{
            state.cartList.push(action.payload);
           }
        }else{
          state.cartList.push(action.payload);
        }
        toast.success(`${action.payload.title} has been successfully added`);
      }
    },
    increaseQuantity: (state, action) => {
      if (action.payload.quantity === 5) return;
      state.cartList = state.cartList.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      if (action.payload.quantity <= 1) {
        state.cartList = state.cartList.filter(
          (item) => item._id !== action.payload._id,
        );
      } else {
        state.cartList = state.cartList.map((item) => {
          if (item._id === action.payload._id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    },
    deleteCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item._id !== action.payload._id,
      );
      toast.error("Successfully deleted item!!!");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
