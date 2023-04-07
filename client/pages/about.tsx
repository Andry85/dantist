import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import Order from '../components/Order/Order';
import Profile from '../components/Profile/Profile';
import {profile} from '../data';


export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <Header />
      <Container>
        <Profile profile={profile} />
        <Order/>
      </Container>
      <Footer/>
    </>
  );
}
