import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import basketSlice from "./basketSlice";
const store = configureStore({
  reducer: {
    cardSlice: cardSlice,
    basketSlice:basketSlice,
  },
});

export default store;
