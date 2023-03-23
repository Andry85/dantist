import Head from 'next/head';
import Container from '../components/Container/Container';
import Preambule from '../components/Preambule/Preambule';
import Order from '../components/Order/Order';
import {preambule, reviews} from '../data';
import Reviews from '../components/Reviews/Reviews';


export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <Container>
        <Preambule preambule={preambule}/>
        <Order/>
        <Reviews 
          reviews={reviews}
          slides={4}
          />
      </Container>
    </>
  );
}
