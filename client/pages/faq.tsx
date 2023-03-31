import Head from 'next/head';
import Container from '../components/Container/Container';
import FaqList from '../components/FaqList/FaqList';
import {faq} from '../data';


export default function FaqPage() {
  return (
    <>
      <Head>
        <title>Faq page</title>
      </Head>
      <Container>
        <FaqList faq={faq} />
      </Container>
    </>
  );
}
