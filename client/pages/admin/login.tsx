import Head from 'next/head';
import Container from '../../components/Container/Container';
import Login from '../../components/Login/Login';



export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login page</title>
      </Head>
      <Container>
        <Login/>
      </Container>
    </>
  );
}
