import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productData: [],
  userInfo: null,
};
const bazaarSlice = createSlice({
  name: "bazaar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let item = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.productData = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    // =========================== User Data added/removed start =========================
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state, action) => {
      state.userInfo = null;
    },
    // =========================== User Data added/removed end =========================
  },
});

export const {
  addToCart,
  deleteItem,
  decrementQuantity,
  incrementQuantity,
  resetCart,
  addUser,
  removeUser,
} = bazaarSlice.actions;
export default bazaarSlice.reducer;
