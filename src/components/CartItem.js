import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const CartItem = ({id, name, price, quantity}) => {
    const total = price * quantity;
    const spanStyle = { fontWeight: 'bold' };
    let elemStyle = {};
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(cartActions.increaseQuantity(id));
    };
    const decrement = () => {
        if(quantity > 1) {
            dispatch(cartActions.decreaseQuantity(id))
        }
    };
    const deleteProduct = () => {
        setTimeout(dispatch(cartActions.removeFromCart(id)), 300);
    }

    return <div className="list" style={elemStyle}>
        <h2>{name}</h2>
        <p>Price: <span style={spanStyle}>${price}</span></p>
        <p>Total: <span style={spanStyle}>${total}</span></p>
        <p className="line"></p>
        <div className="buttons">
            <button id="increment" onClick={increment}>+</button>
            <p>{quantity}</p>
            <button id="decrement" onClick={decrement}>-</button>
        </div>
        <button id="delete" onClick={deleteProduct}></button>
    </div>
}

export default CartItem;