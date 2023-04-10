import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import { useRouter } from "next/router";
import {orders} from '../../../../data';





export default function FaQSlugDashboard() {

    const router = useRouter();
    const path = router.asPath.split('/');
    const pathEL = path[path.length-1];

    return (
        <>
        <Head>
            <title>Order dashboard page</title>
        </Head>
        <DasboardHeader/>
        <DasboardContainer>
            <DasboardSidebar/>
            <DasboardContent>
            <div>
                <form>
                    <div className={styles.orders__row}>
                        <label>Status</label>
                        <select>
                            <option value="open">Open</option>
                            <option value="closed">Closed</option>
                            <option value="pending">pending</option>
                            <option value="accepted">accepted</option>
                        </select>
                    </div>
                    <div className={styles.orders__row}>
                        <label>Name</label>
                        <input type="text" value={orders[pathEL].name}/>
                    </div>
                    <div className={styles.orders__row}>
                        <label>Phone</label>
                        <input type="text" value={orders[pathEL].phone}/>
                    </div>
                    <div className={styles.orders__row}>
                        <label>Date</label>
                        <input type="date" />
                    </div>
                    <button className={styles.orders__submitBtn}>Save</button>
                </form>
            </div>
            </DasboardContent>
        </DasboardContainer>
        </>
    );
}
