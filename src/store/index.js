import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
});

export default store;