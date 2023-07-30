import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from 'components/Header/Header';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header/>

      <Suspense fallback={null}>
        <main><Outlet/></main>
      </Suspense>

      <Toaster position="top-right" reverseOrder={false}/>
    </Container>
  );
};
