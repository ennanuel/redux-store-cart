import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sendCartData, fetchCartData } from './store/cart-actions';
import Products from './components/Products';
import Notification from './components/Notification';


function App() {
  const isLoggedIn = useSelector( state => state.auth.isLoggedIn );
  const notification = useSelector( state => state.ui.notification );
  const dispatch = useDispatch();
  const cart = useSelector( state => state.cart );
  
  useEffect( () => {

    if(!cart.changed) return;
    dispatch(sendCartData(cart))
    dispatch(fetchCartData())

  }, [cart, dispatch])

  return <div className="App">
    { notification && <Notification type={notification.type} message={notification.message} /> }
    { !isLoggedIn && <Login /> }
    { isLoggedIn && <Products /> }
  </div>
}

export default App;
