import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';




export default function IndexDashboard() {
  return (
    <>
      <Head>
        <title>Index dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
          <div className={styles.index}>
            <form>
              <div className={styles.index__row}>
                <label>Image</label>
                <input type="file" />
              </div>
              <div className={styles.index__row}>
                <label>Text</label>
                <textarea />
              </div>
              <div className={styles.index__row}>
                <label>Link</label>
                <input type="text" />
              </div>
              <button className={styles.index__submitBtn}>Save</button>
            </form>
          </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
