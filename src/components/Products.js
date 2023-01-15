import Product from './Product';
import { items } from './products/items';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { authActions } from '../store/auth-slice';
import Cart from './Cart';
import '../styles/Products.css';

const Products = () => {
    const cartItems = useSelector( state => state.cart.itemsList );
    const showCart = useSelector( state => state.cart.showCart );
    const quantity = useSelector( state => state.cart.totalQuantity );
    const totalPrice = cartItems?.reduce((total, elem) => total + (elem.price * elem.quantity), 0);
    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartActions.setShowCart());
    }
    const logOut = () => {
        dispatch(authActions.logout());
    }

    return <div id="products">
        <header id="header">
            <h1 className="title">Redux Shopping Cart</h1>
            <ul>
                <li><button id="cart-items" onClick={toggleCart}>Cart: {quantity !== 1? quantity + ' items': '1 item'}</button></li>
                <li><button id="log-out" onClick={logOut}>Logout</button></li>
            </ul>
        </header>
        <div className="product-grid">
            {items.map(
                item => <Product key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={require(`../images/${item.imageUrl}`)} />
            )}
        </div>
        <div className="checkout">
            {showCart && <Cart />}
            <h3 className="total">Total: <span>${ totalPrice }</span></h3>
            <button className="btn" id="checkout-btn">Place Order</button>
        </div>
    </div>
}

export default Products;