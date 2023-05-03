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

    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [id, setId] = useState<string>('');

    const router = useRouter();
    const path = router.asPath.split('/');
    const pathEL = path[path.length-1];

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await axiosInstance.put(`/faq/${id}`, {title, text});
        window.location.replace('/admin/dashboard/faq');

    }

    useEffect(() => {
        const getFaqPage = async () => {
            const res = await axiosInstance.get(`/faq/${pathEL}`);
            setTitle(res.data.title);
            setText(res.data.text);
            setId(res.data._id);
        };
        getFaqPage(); 
      }, []);

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
                <form onSubmit={handleSubmit}>
                    <div className={styles.faq__row}>
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                    </div>
                    <div className={styles.faq__row}>
                        <label>Text</label>
                        <textarea rows={10} value={text} onChange={(e)=> setText(e.target.value)}></textarea>
                    </div>
                    <button className={styles.faq__submitBtn}>Update</button>
                </form>
            </div>
            </DasboardContent>
        </DasboardContainer>
        </>
    );
}
