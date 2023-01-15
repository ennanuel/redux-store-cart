import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Fetching Data",
                type: "warning"
            })
        )

        const fetchRequest = async () => {
            const res = await fetch('https://cart-project-4ee01-default-rtdb.firebaseio.com');
            const data = await res.json;
            return data;
        }

        try {
            const dat = await fetchRequest();

            dispatch(
                cartActions.setCart(dat)
            )

            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "Fetching Data Successful!",
                    type: "success"
                })
            )
        } catch(err) {
            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "Fetching Data Failed!",
                    type: "error"
                })
            )
        }

    }
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Sending Request",
                type: "warning"
            })
        )

        const sendRequest = async () => {

            const res = await fetch('https://cart-project-4ee01-default-rtdb.firebaseio.com/cartItems.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });
            
            await res.json();

            dispatch(uiActions.showNotification({
                open: true,
                message: "Sent request to DataBase successfully!",
                type: 'success'
            }))

        };

        try{
            await sendRequest();
        } catch(err) {
            dispatch(uiActions.showNotification({
                open: true,
                message: "Sending request failed.",
                type: 'error'
            }));
        }

    }
}