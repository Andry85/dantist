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
        <title>FaQ Add dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
        <div>
            <form>
                <div className={styles.faq__row}>
                    <label>Title</label>
                    <input type="text"/>
                </div>
                <div className={styles.faq__row}>
                    <label>Text</label>
                    <textarea rows={10}></textarea>
                </div>
                <button className={styles.faq__submitBtn}>Save</button>
            </form>
        </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
