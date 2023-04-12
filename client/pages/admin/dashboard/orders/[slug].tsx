import React, {useState} from 'react';
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

    const [status, setStatus] = useState<string>('');
    const [name, setName] = useState<string>(orders[pathEL].name || '');
    const [phone, setPhone] = useState<string>(orders[pathEL].phone || '');
    const [date, setDate] = useState(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        console.log(status, 'status');
        console.log(name, 'name');
        console.log(phone, 'phone');
        console.log(date, 'date');
    }

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
                <form onSubmit={handleSubmit}>
                    <div className={styles.orders__row}>
                        <label>Status</label>
                        <select onChange={(e)=> setStatus(e.target.value)}>
                            <option value="open">Open</option>
                            <option value="closed">Closed</option>
                            <option value="pending">pending</option>
                            <option value="accepted">accepted</option>
                        </select>
                    </div>
                    <div className={styles.orders__row}>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                    </div>
                    <div className={styles.orders__row}>
                        <label>Phone</label>
                        <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} />
                    </div>
                    <div className={styles.orders__row}>
                        <label>Date</label>
                        <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
                    </div>
                    <button className={styles.orders__submitBtn}>Save</button>
                </form>
            </div>
            </DasboardContent>
        </DasboardContainer>
        </>
    );
}
