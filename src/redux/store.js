import { configureStore } from "@reduxjs/toolkit";
import bazaarSlice from "./bazaarSlice";

const store = configureStore({
  reducer: {
    bazaar: bazaarSlice,
  },
});
export default store;
