import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <label>
        <input type="email" name="email" placeholder='Email'/>
      </label>

      <label>
        <input type="password" name="password" placeholder='Password'/>
      </label>

      <button type="submit">log in</button>
    </form>
  );
};
