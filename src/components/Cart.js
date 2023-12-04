import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import '../styles/Cart.css';

const Cart = () => {
    const cartItems = useSelector( state => state.cart.itemsList );

    return <div className="cart-container">
        <div className="cart">
            <h2>Your Cart { cartItems?.length < 1 && 'is empty' }</h2>
            <ul>
                {cartItems?.map(
                    (elem, i) => <li key={elem.id}><CartItem id={elem.id} name={elem.name} price={elem.price} quantity={elem.quantity} /></li>
                )}
            </ul>
        </div>
    </div>
}

export default Cart;