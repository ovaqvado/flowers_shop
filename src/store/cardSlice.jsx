import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
  name: "flower",
  initialState: {
    flower: [
      {
        name: "Роза",
        price: 150,
        id: 0,
      },
      {
        name: "Ромашка",
        price: 100,
        id: 1,
      },
      {
        name: "Тюльпан",
        price: 80,
        id: 2,
      },
      {
        name: "Тюльпан",
        price: 80,
        id: 2,
      },
    ],
  },

  reducers: {
    // searchFlowers: (state, action) => {
    //   state.flower = state.flower.filter((item) => {
    //     return item.name.includes(action.payload);
    //   });
    // },
  },
});

// export const { addProduct } = cardSlice.actions
// export const { searchFlowers } = cardSlice.actions;
export default cardSlice.reducer;
