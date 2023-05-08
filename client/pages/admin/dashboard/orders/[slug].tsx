import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import { useRouter } from "next/router";
import {axiosInstance} from '../../../../config';





export default function FaQSlugDashboard() {

    const router = useRouter();
    const path = router.asPath.split('/');
    const pathEL = path[path.length-1];

    const [status, setStatus] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [date, setDate] = useState('');
    const [id, setId] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await axiosInstance.put(`/order/${id}`, {name, phone, date, status});
        window.location.replace('/admin/dashboard/orders');
    }

    useEffect(() => {
        const getOrderPage = async () => {
            const res = await axiosInstance.get(`/order/${pathEL}`);
            setName(res.data.name);
            setPhone(res.data.phone);
            setId(res.data._id);
            setStatus(res.data.status);

            const providedDate = new Date(res.data.date);
            const providedDateDay = String(providedDate.getDate()).padStart(2, '0');
            const providedDateMonth = String(providedDate.getMonth() + 1).padStart(2, '0');
            const providedDateYear = providedDate.getFullYear();
            const fullDate = `${providedDateYear}-${providedDateMonth}-${providedDateDay}`;
            setDate(fullDate);


        };
        getOrderPage(); 
      }, []);

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
