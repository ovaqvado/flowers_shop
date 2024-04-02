import { createStore } from 'redux';
import cardSlice from './cardSlice';

const store = createStore(cardSlice);

export default store;
