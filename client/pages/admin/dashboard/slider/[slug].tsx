import React, {useState} from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import { useRouter } from "next/router";






export default function FaQSlugDashboard() {

    const router = useRouter();
    const path = router.asPath.split('/');
    const pathEL = path[path.length-1];

    const [file, setFile] = useState<File>(null);
    const [description, setDescription] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        console.log(file, 'file');
        console.log(description, 'description');
    }

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
                <form onSubmit={handleSubmit}>
                    <div className={styles.slider__row}>
                        <label>Image</label>
                        <input type="file" onChange={handleFileChange} />
                    </div>
                    <div className={styles.slider__row}>
                        <label>Description</label>
                        <textarea value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                    </div>
                    <button className={styles.slider__submitBtn}>Save</button>
                </form>
            </div>
            </DasboardContent>
        </DasboardContainer>
        </>
    );
}
