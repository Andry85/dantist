import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../../components/dasboards/DasboardContent/DasboardContent';



export default function FaQAddDashboard() {
  return (
    <>
      <Head>
        <title>Order Add dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
        <div>
            <form>
                <div className={styles.order__row}>
                    <label>Name</label>
                    <input type="text"/>
                </div>
                <div className={styles.order__row}>
                    <label>Phone</label>
                    <input type="text"/>
                </div>
                <div className={styles.order__row}>
                    <label>Date</label>
                    <input type="date"/>
                </div>
                <button className={styles.order__submitBtn}>Save</button>
            </form>
        </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
