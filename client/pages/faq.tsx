import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import FaqList from '../components/FaqList/FaqList';
import {faq} from '../data';


export default function FaqPage() {
  return (
    <>
      <Head>
        <title>Faq page</title>
      </Head>
      <Header />
      <Container>
        <FaqList faq={faq} />
      </Container>
      <Footer/>
    </>
  );
}
