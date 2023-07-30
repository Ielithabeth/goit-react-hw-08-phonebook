import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
    const { isLoggedIn } = useAuth();
    const dispatch = useDispatch();

    return (
        <header>
            <NavLink to="/">
                Home
            </NavLink>

            {isLoggedIn && (
            <NavLink to="/contacts">
                PhoneBook
            </NavLink>
            )}

            <div>
                {isLoggedIn 
                ? <button type="button" onClick={() => dispatch(logOut())}>
                   Logout
                </button> 
                : <>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">Log in</NavLink>
                </>}
            </div>
        </header>
    )
}