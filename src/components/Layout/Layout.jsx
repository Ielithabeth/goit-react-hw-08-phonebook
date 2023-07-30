import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container, Div } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header/>

      <main>
          <Div><h1>Your phonebook</h1></Div>
    
        <section>
          <Suspense fallback={null}>
            <Outlet/>
          </Suspense>
        </section>
      </main>
    </Container>
  );
};
