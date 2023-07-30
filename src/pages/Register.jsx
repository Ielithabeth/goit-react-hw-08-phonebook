import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <section>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegisterForm/>
    </section>
  );
}

export default Register;