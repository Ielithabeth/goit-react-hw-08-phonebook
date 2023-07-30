import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <section>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <LoginForm/>
    </section>
  );
}

export default Login;