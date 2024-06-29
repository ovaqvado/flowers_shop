import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
  name: "flower",
  initialState: {
    window: false,
    basket: [],
    total: 0,
    cardCount: 0,
  },

  reducers: {
    addFlower(state, action) {
      state.basket.push(action.payload);
      state.total += action.payload.price;
      state.cardCount++; // Увеличиваем счетчик карточек при добавлении
    },
    openWindow(state, action) {
      state.window = true;
    },
    closeWindow(state, action) {
      state.window = false;
    },
  },
});
export const { addFlower, openWindow, closeWindow } = basketSlice.actions;
export default basketSlice.reducer;
