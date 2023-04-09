import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import {faq} from '../../../../data';
import Link from 'next/link';




export default function FaQDashboard() {
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
              {faq.map((item, i) => (
                  <li key={i}>
                      <div className={styles.faq__index}>{i+1}</div>
                      <div className={styles.faq__title}>{item.title}</div>
                      <div className={styles.faq__edit}>
                        <Link href={`/admin/dashboard/faq/${i}`}>Edit</Link>
                      </div>
                      <div className={styles.faq__delete}>
                        <button>Delete</button>
                      </div>
                  </li>
              ))}
            </ul>
          </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
