import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
    const { isLoggedIn } = useAuth();
    const dispatch = useDispatch();

    return (
        <HeaderStyled>
            <div>
                <NavLink to="/">
                    Home 
                </NavLink>
    
                {isLoggedIn && (
                <NavLink to="/contacts">
                    Phone Book
                </NavLink>
                )}
            </div>

            <div>
                {isLoggedIn 
                ? <button type="button" onClick={() => dispatch(logOut())}>
                   Logout
                </button> 
                : <>
                    <NavLink to="/register">Register</NavLink>
                    <span>|</span>
                    <NavLink to="/login">Log in</NavLink>
                </>}
            </div>
        </HeaderStyled>
    )
}