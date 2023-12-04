import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

const DB_URL = 'https://cart-project-4ee01-default-rtdb.firebaseio.com/cartItems.json';

async function fetchRequest () {
    try {
        const res = await fetch(DB_URL)
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.error(err)
    }
}

async function sendRequest(cart, dispatch) {
    try {
        const options = { method: 'PUT', body: JSON.stringify(cart) };
        const res = await fetch(DB_URL, options);
        await res.json();
        dispatch(cartActions.setChanged(false));
        dispatch(uiActions.showNotification({
            open: true,
            message: "Sent request to DataBase successfully!",
            type: 'success'
        }))
    } catch (error) {
        console.error(error);
    }

};

export const fetchCartData = () => async function (dispatch) {
    dispatch(
        uiActions.showNotification({
            open: true,
            message: "Fetching Data",
            type: "warning"
        })
    );
    try {
        const dat = await fetchRequest();
        dispatch(cartActions.setCart(dat));
        dispatch(cartActions.setChanged(false));
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Fetching Data Successful!",
                type: "success"
            })
        )
    } catch (err) {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Fetching Data Failed!",
                type: "error"
            })
        )
    }

};

export const sendCartData = (cart) => async function (dispatch) {
    dispatch(
        uiActions.showNotification({
            open: true,
            message: "Sending Request",
            type: "warning"
        })
    );
    try {
        await sendRequest(cart, dispatch);
    } catch (err) {
        dispatch(uiActions.showNotification({
            open: true,
            message: "Sending request failed.",
            type: 'error'
        }));
    }
};