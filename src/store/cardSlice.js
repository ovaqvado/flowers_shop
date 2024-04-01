import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
    name: 'flower',
    initialState: {
        flowers: [
            {
                name: 'Розы',
                price: 150,
                id: 0
            },
            {
                name: 'Тюльпаны',
                price: 100,
                id: 1
            },
            {
                name: 'Ромашки',
                price: 80,
                id: 2
            }
        ]
    },

    reducers: {
        // addFlowers(state, action) {
        //     const newFlowers = {
        //         id: state.flowers.length, 
        //         ...action.payload
        //     };
        //     state.flowers.push(newFlowers);
        //     console.log(state.flowers);
        // }
    }
})

// export const { addFlowers } = cardSlice.actions
export default cardSlice.reducer