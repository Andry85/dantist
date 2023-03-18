import Head from 'next/head';
import Container from '../components/Container/Container';
import Preambule from '../components/Preambule/Preambule';
import {preambule} from '../data';


export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <Container>
        <Preambule preambule={preambule}/>
      </Container>
    </>
  );
}
