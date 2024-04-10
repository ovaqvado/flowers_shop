import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";

const store = configureStore({
  reducer: {
    cardSlice: cardSlice,
  },
});

export default store;
