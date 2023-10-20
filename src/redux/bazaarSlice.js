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
  },
});

export const { addToCart } = bazaarSlice.actions;
export default bazaarSlice.reducer;
