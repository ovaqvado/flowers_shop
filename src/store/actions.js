export const ADD_CARD = 'ADD_CARD';

export const addCard = (title, description) => ({
    type: ADD_CARD,
    payload: {
        title,
        description
    }
});