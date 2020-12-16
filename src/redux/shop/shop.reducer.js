import SHOP_DATA from './shop.data';

const INITIAL_STTATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STTATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;

