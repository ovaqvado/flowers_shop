import { createSlice } from "@reduxjs/toolkit";
import flower1 from "../commponents/Cards/flower1.svg";
import flower2 from "../commponents/Cards/flower2.svg";
import flower3 from "../commponents/Cards/flower3.svg";

const cardSlice = createSlice({
  name: "flower",
  initialState: {
    flower: [
      {
        name: "Роза",
        img: `${flower1}`,
        price: 1500,
        id: 0,
      },
      {
        name: "Ромашка",
        img: `${flower2}`,
        price: 1000,
        id: 1,
      },
      {
        name: "Тюльпан",
        img: `${flower3}`,
        price: 800,
        id: 2,
      },
    ],
  },

  reducers: {
    searchFlowers: (state, action) => {
      state.flower = state.flower.filter((item) => {
        return (
          item.price >= action.payload[0] && item.price <= action.payload[1]
        );
      });
    },
  },
});

export const { searchFlowers } = cardSlice.actions;
export default cardSlice.reducer;
