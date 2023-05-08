import Head from 'next/head';
import Container from '../components/Container/Container';
import Preambule from '../components/Preambule/Preambule';
import Order from '../components/Order/Order';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Reviews from '../components/Reviews/Reviews';


export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />
      <Container>
        <Preambule/>
        <Order/>
        <Reviews 
          slides={4}
          />
      </Container>
      <Footer/>
    </>
  );
}
