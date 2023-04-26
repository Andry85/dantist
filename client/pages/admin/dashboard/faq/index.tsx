import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import Link from 'next/link';
import { ReactNode } from 'react';
import {axiosInstance} from '../../../../config';



export default function FaQDashboard() {

  const [fags, setFags] = useState<[]>([]);

  const handleDelete = async (event, id) => {
    event.preventDefault();


    await axiosInstance.delete(`/faq/${id}`);
    window.location.replace('/admin/dashboard/faq');
  }

  useEffect(() => {
    const getAllFaqs = async () => {
        const res = await axiosInstance.get("/faq/");
        console.log(res.data);
        if (res.data.length !== 0) {
          setFags(res.data);
        }
    };
    getAllFaqs(); 
  }, []);



  return (
    <>
      <Head>
        <title>FaQ dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
          <div className={styles.faq}>
            <ul>
              {fags.map((item, i:number): ReactNode => (
                  <li key={i}>
                      <div className={styles.faq__index}>{i+1}</div>
                      <div className={styles.faq__title}>{item.title}</div>
                      <div className={styles.faq__edit}>
                        <Link href={`/admin/dashboard/faq/${item._id}`}>Edit</Link>
                      </div>
                      <div className={styles.faq__delete}>
                        <button onClick={(e) => handleDelete(e, item._id)}>Delete</button>
                      </div>
                  </li>
              ))}
            </ul>
            <Link className={styles.faq__add} href="/admin/dashboard/faq/add">Add new</Link>
          </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
