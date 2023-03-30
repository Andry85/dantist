import Head from 'next/head';
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
      <Container>
        <Profile profile={profile} />
        <Order/>
      </Container>
    </>
  );
}
