import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import {reviews} from '../../../../data';
import Link from 'next/link';
import Image from 'next/image';




export default function Slider() {
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
              {reviews.map((item, i) => (
                  <li key={i}>
                      <figure className={styles.slider__img}>
                        <Image src={item.image} width={100} height={100} alt="" />
                      </figure>
                      <div className={styles.slider__desc}>
                        <p>{item.description}</p>
                      </div>
                      <div className={styles.slider__edit}>
                        <Link href={`/admin/dashboard/slider/${i}`}>Edit</Link>
                      </div>
                      <div className={styles.slider__delete}>
                        <button>Delete</button>
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
