import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import {orders} from '../../../../data';
import Link from 'next/link';




export default function Orders() {
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
              {orders.map((item, i) => (
                  <li key={i}>
                      <div className={styles.orders__status}>Open</div>
                      <div className={styles.ordres__name}>{item.name}</div>
                      <div className={styles.orders__phone}>{item.phone}</div>
                      <div className={styles.orders__date}>{item.date}</div>
                      <div className={styles.orders__edit}>
                        <Link href={`/admin/dashboard/orders/${i}`}>Edit</Link>
                      </div>
                      <div className={styles.orders__delete}>
                        <button>Delete</button>
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
