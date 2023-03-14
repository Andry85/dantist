import Head from 'next/head';
import Header from '../components/Header/Header';



export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <Header logo='/images/smile.png'/>
    </>
  );
}
