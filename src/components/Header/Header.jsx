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
                    Phone book
                </NavLink>
                )}
            </div>

            <div>
                {isLoggedIn 
                ? <NavLink onClick={() => dispatch(logOut())}>
                   Logout
                </NavLink> 
                : <>
                    <NavLink to="/register">Register</NavLink>
                    <span>|</span>
                    <NavLink to="/login">Log in</NavLink>
                </>}
            </div>
        </HeaderStyled>
    )
}