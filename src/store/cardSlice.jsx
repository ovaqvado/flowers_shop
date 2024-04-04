import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [
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
    // addProduct(state, action) {
    //     const newProduct = {
    //         id: state.cards.length, // Генерация уникального id
    //         ...action.payload
    //     };
    //     state.card.push(newProduct);
    //     console.log(state.card);
    // }
  },
});

// export const { addProduct } = cardSlice.actions
export default cardSlice.reducer;
