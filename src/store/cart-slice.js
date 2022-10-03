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
        },
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemsList.find(elem => elem.id === newItem.id);
            state.changed = true;

            if(existingItem) {
                existingItem.quantity++;

            } else {
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
                state.totalQuantity++
            }
        },
        removeFromCart(state, action) {
            const itemFound = state.itemsList.find( item => item.id === action.payload );
            const oldItems = state.itemsList;

            state.itemsList = oldItems.filter(elem => elem.id !== itemFound.id);
            state.totalQuantity --;
            state.changed = true;
        },
        increaseQuantity(state, action) {
            const itemFound = state.itemsList.find( item => item.id === action.payload);
            
            itemFound.quantity++;
        },
        decreaseQuantity(state, action) {
            const itemFound = state.itemsList.find( item => item.id === action.payload);
            
            itemFound.quantity--;
        },
        setShowCart(state) { state.showCart = !state.showCart }
    }
})

export default cartSlice;

export const cartActions = cartSlice.actions;