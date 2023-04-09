import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import { useRouter } from "next/router";
import {faq} from '../../../../data';





export default function FaQSlugDashboard() {

    const router = useRouter();
    console.log(router.asPath);
    const path = router.asPath.split('/');
    const pathEL = path[path.length-1];
    console.log(pathEL, 'pathEL');
    console.log(faq[pathEL]);

    return (
        <>
        <Head>
            <title>FaQ dashboard page</title>
        </Head>
        <DasboardHeader/>
        <DasboardContainer>
            <DasboardSidebar/>
            <DasboardContent>
            <div>
                <form>
                    <div className={styles.faq__row}>
                        <label>Title</label>
                        <input type="text" value={faq[pathEL].title}/>
                    </div>
                    <div className={styles.faq__row}>
                        <label>Text</label>
                        <textarea rows={10} value={faq[pathEL].text}></textarea>
                    </div>
                    <button className={styles.faq__submitBtn}>Save</button>
                </form>
            </div>
            </DasboardContent>
        </DasboardContainer>
        </>
    );
}
