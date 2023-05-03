import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import FaqList from '../components/FaqList/FaqList';
import {axiosInstance} from '../config';


export default function FaqPage() {

  const [fags, setFags] = useState<[]>([]);

  useEffect(() => {
    const getAllFaqs = async () => {
          const res = await axiosInstance.get("/faq/");
          if (res.data.length !== 0) {
              setFags(res.data);
          }
      };
      getAllFaqs(); 
  }, []);


  return (
    <>
      <Head>
        <title>Faq page</title>
      </Head>
      <Header />
      <Container>
        <FaqList fags={fags} />
      </Container>
      <Footer/>
    </>
  );
}
