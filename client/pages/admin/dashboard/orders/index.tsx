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




export default function Orders() {

  const [orders, setOrders] = useState<[]>([]);


  const handleDelete = async (event, id) => {
    event.preventDefault();


    await axiosInstance.delete(`/order/${id}`);
    window.location.replace('/admin/dashboard/orders');
  }


  useEffect(() => {
    const getAllOrders = async () => {
        const res = await axiosInstance.get("/order/");
        if (res.data.length !== 0) {
          setOrders(res.data);
        }
    };
    getAllOrders(); 
  }, []);

  const renderStatus = (status) => {
    switch (status) {
      case 'open':
        return <div style={{color: "#F7C04A"}}>{status}</div>;
        break;
      case 'closed':
        return <div style={{color: "#D21312"}}>{status}</div>;
        break;
      case 'pending':
        return <div style={{color: "#FA9884"}}>{status}</div>;
        break;
      case 'accepted':
        return <div style={{color: "#539165"}}>{status}</div>;
        break;
      default:
        return false
    }
  }

  type itemProps = {
    status: string;
    name: string;
    phone: string;
    date: string;
    _id: string;
  }

  return (
    <>
      <Head>
        <title>Orders dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
          <div className={styles.orders}>
            <ul>
              {orders.map((item: itemProps, i:number): ReactNode => (
                  <li key={i}>
                      <div className={styles.orders__status}>
                        {renderStatus(item.status)}
                      </div>
                      <div className={styles.orders__name}>{item.name}</div>
                      <div className={styles.orders__phone}>{item.phone}</div>
                      <div className={styles.orders__date}>
                          {String(new Date(item.date).getDate()).padStart(2, '0')}/
                          {String(new Date(item.date).getMonth() + 1).padStart(2, '0')}/
                          {new Date(item.date).getFullYear()}
                      </div>
                      <div className={styles.orders__edit}>
                        <Link href={`/admin/dashboard/orders/${item._id}`}>Edit</Link>
                      </div>
                      <div className={styles.orders__delete}>
                        <button onClick={(e) => handleDelete(e, item._id)}>Delete</button>
                      </div>
                  </li>
              ))}
            </ul>
            <Link className={styles.orders__add} href="/admin/dashboard/orders/add">Add new</Link>
          </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
