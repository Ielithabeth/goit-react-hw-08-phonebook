import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      register({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <label>
        <input type="text" name="name" placeholder='Username'/>
      </label>

      <label>
        <input type="email" name="email" placeholder='Email'/>
      </label>

      <label>
        <input type="password" name="password" placeholder='Password'/>
      </label>
      
      <button type="submit">register</button>
    </form>
  );
};
