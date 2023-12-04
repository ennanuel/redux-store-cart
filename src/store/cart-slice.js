import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        changed: false
    },
    reducers: {
        setCart(state, action) {
            state.itemsList = action.payload.itemsList;
            state.totalQuantity = action.payload.totalQuantity;
            state.changed = action.payload.changed;
        },
        setChanged(state, action) {
            state.changed = action.payload
        },
        addToCart(state, action) {
            const newItem = action.payload;
            const itemsList = state.itemsList || [];
            const existingItem = itemsList.find(elem => elem.id === newItem.id);
            state.changed = true;
            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                const newCartItem = {
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                }
                state.itemsList = [...itemsList, newCartItem];
                state.totalQuantity += 1;
            }
        },
        removeFromCart(state, action) {
            const itemsList = state.itemsList || [];
            const itemFound = itemsList.find( item => item.id === action.payload );
            state.itemsList = itemsList.filter(elem => elem.id !== itemFound.id);
            state.totalQuantity -= 1;
            state.changed = true;
        },
        increaseQuantity(state, action) {
            const itemsList = state.itemsList || []
            const itemIndex = itemsList.find( item => item.id === action.payload);
            if (!itemIndex >= 0) return;
            itemsList[itemIndex].quantity += 1;
            state.itemsList = itemsList;
        },
        decreaseQuantity(state, action) {
            const itemsList = state.itemsList || []
            const itemIndex = itemsList.find( item => item.id === action.payload);
            if (!itemIndex >= 0) return;
            itemsList[itemIndex].quantity -= 1;
            state.itemsList = itemsList;
        },
        setShowCart(state) { state.showCart = !state.showCart }
    }
})

export default cartSlice;

export const cartActions = cartSlice.actions;