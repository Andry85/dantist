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
    const [id, setId] = useState<string>('');
    const [handleError, setHandleError] = useState(false);
    const [avatar, setAvatar] = useState<string>('');

    const [photo, setPhoto] = useState<File>(null);
    const [description, setDescription] = useState<string>('');

    const PF = `${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}/images/`;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(photo, 'photo');
        console.log(description, 'description');

        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("description", description);

        try {
            console.log(formData);
            await axiosInstance.put(`/slider/upload/${id}`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                },
            });
            setHandleError(false);
            window.location.replace('/admin/dashboard/slider');
        } catch (err) {
            if (err.response.status === 500) {
                console.log(err);
                setHandleError(true);
            } else {
                console.log(err.response.data.msg);
            }
        }
    }
    

    useEffect(() => {
        const getSlide = async () => {
            const res = await axiosInstance.get(`/slider/${pathEL}`);
            console.log(res.data);
            setPhoto(res.data.photo);
            setDescription(res.data.description);
            setAvatar(res.data.photo);
            setId(res.data._id);
        };
        getSlide(); 
      }, []);


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
                        {avatar && <img src={`${PF}/${avatar}`} width={100} height={100} alt="" />} 
                    </div>
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
