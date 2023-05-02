import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import Link from 'next/link';
import {axiosInstance} from '../../../../config';



export default function Slider() {

  const PF = `${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}/images/`;

  const [slides, setSlides] = useState<[]>([]);

  const handleDelete = async (id, image) => {


    setSlides(prevState => {
      // Object.assign would also work
      return prevState.filter(item => item.id !== id);
    });

    console.log(slides, 'slides');

    await axiosInstance.delete(`/slider/${id}`);
    await axiosInstance.delete(`/slider/deleteImg/${image}`);

    
  }

  const getAllSlides = async () => {
      const res = await axiosInstance.get("/slider/");
      console.log(res.data);
      setSlides(res.data);
  };

  useEffect(() => {
    getAllSlides(); 
    console.log(slides, 'slides');
  }, [slides]);

  return (
    <>
      <Head>
        <title>Orders dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
          <div className={styles.slider}>
            <ul>
              {slides.map((item, i) => (
                  <li key={i}>
                      <figure className={styles.slider__img}>
                        {item.photo && <img src={`${PF}/${item.photo}`} width={100} height={100} alt="" />} 
                      </figure>
                      <div className={styles.slider__desc}>
                        <p>{item.description}</p>
                      </div>
                      <div className={styles.slider__edit}>
                        <Link href={`/admin/dashboard/slider/${item._id}`}>Edit</Link>
                      </div>
                      <div className={styles.slider__delete}>
                        <button onClick={(e) => handleDelete(item._id, item.photo)}>Delete</button>
                      </div>
                  </li>
              ))}
            </ul>
            <Link className={styles.slider__add} href="/admin/dashboard/slider/add">Add new</Link>
          </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
