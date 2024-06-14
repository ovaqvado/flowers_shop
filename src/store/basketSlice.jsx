import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
  name: "flower",
  initialState:{
    basket:[]
  },
  reducers:{
    addFlower(state,action){
        state.basket.push(action.payload)
    }
  }
})
export const { addFlower } = basketSlice.actions;
export default basketSlice.reducer;