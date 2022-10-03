import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import '../styles/Login.css';

const Login = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    };

    return <div id="login">
        <form className="form" onSubmit={ handleSubmit }>
            <h1 className="form-title">Log In</h1>
            <label htmlFor="id" className="label">id</label>
            <input type="text" className="form-input" id="id" placeholder="Email Address" />
            <label htmlFor="pword" className="label">password</label>
            <input type="password" className="form-input" id="pword" placeholder="Password" />
            <input type="submit" value="Login" className="form-input" id="login-btn" />
        </form>
    </div>
}

export default Login;