import { useAuth } from '../hooks/useAuth';
import { Div } from './Home.styled';

const Home = () => {
    const { isLoggedIn } = useAuth();

    return (
            <Div>
                {isLoggedIn 
                ? <p>welcome</p>
                : <p>please register or login to continue</p>
                }
            </Div>
    )
}

export default Home;