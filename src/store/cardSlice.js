import { ADD_CARD } from './actions';

const initialState = {
    cards: [{
        title: 'Roza',
        description: 100,

    },
    {
        title: 'Tulpan',
        description: 100,

    },
    {
        title: 'Romashka',
        description: 100,

    },]
};

const cardSlice = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        title: action.payload.title,
                        description: action.payload.description
                    }
                ]
            };
        default:
            return state;
    }
};

export default cardSlice;
