import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
  name: "flower",
  initialState: {
    flower: [
      {
        name: "Роза",
        img: "https://imgs.su/upload/188/2129640775.png",
        price: 1500,
        id: 0,
      },
      {
        name: "Ромашка",
        img: "https://mykaleidoscope.ru/uploads/posts/2023-09/1696005696_mykaleidoscope-ru-p-buketi-iz-romashek-pinterest-62.jpg",
        price: 1000,
        id: 1,
      },
      {
        name: "Тюльпан",
        img: "https://binomen.ru/photo/uploads/posts/2024-02/1707219652_binomen-ru-p-buket-tyulpanov-vkontakte-83.jpg",
        price: 800,
        id: 2,
      },
    ],
  },

  reducers: {
    searchFlowers: (state, action) => {
      state.flower = state.flower.filter((item) => {
        return item.price >= action.payload[0] && item.price <= action.payload[1];
      });
    },
  },
  
});

// export const { addProduct } = cardSlice.actions
export const { searchFlowers } = cardSlice.actions;
export default cardSlice.reducer;
