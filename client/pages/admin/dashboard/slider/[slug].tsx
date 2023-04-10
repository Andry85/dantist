import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import { useRouter } from "next/router";
import {reviews} from '../../../../data';





export default function FaQSlugDashboard() {

    const router = useRouter();
    const path = router.asPath.split('/');
    const pathEL = path[path.length-1];

    return (
        <>
        <Head>
            <title>Slider dashboard page</title>
        </Head>
        <DasboardHeader/>
        <DasboardContainer>
            <DasboardSidebar/>
            <DasboardContent>
            <div>
                <form>
                    <div className={styles.slider__row}>
                        <label>Image</label>
                        <input type="file" />
                    </div>
                    <div className={styles.slider__row}>
                        <label>Description</label>
                        <textarea value={reviews[pathEL].description}></textarea>
                    </div>
                    <button className={styles.slider__submitBtn}>Save</button>
                </form>
            </div>
            </DasboardContent>
        </DasboardContainer>
        </>
    );
}
