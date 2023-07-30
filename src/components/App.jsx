import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from '../hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';

import { Layout } from './Layout/Layout';
import { PrivateRoute } from '../routes/PrivateRoute';
import { RestrictedRoute } from '../routes/RestrictedRoute';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const PhoneBook = lazy(() => import('../pages/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshed } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshed ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="register"
          element={<RestrictedRoute redirectTo="/contacts" component={<Register/>}/>}
        />
        <Route path="login" 
          element={<RestrictedRoute redirectTo="/contacts" component={<Login/>}/>}
        />
        <Route path="contacts" 
          element={<PrivateRoute redirectTo="/login" component={<PhoneBook/>}/>}
        />
      </Route>
    </Routes>
  );
};