import React, {useState, useEffect} from 'react';
import styles from './Preambule.module.scss';
import Link from 'next/link';
import {axiosInstance} from '../../config';



const Preambule = () => {

    const PF = `${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}/images/`;

    const [text, setText] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
   
    useEffect(() => {
        const getIndexPage = async () => {
            const res = await axiosInstance.get("/indexpage/");
            if (res.data.length !== 0) {
                setLink(res.data[0].link);
                setText(res.data[0].text);
                setAvatar(res.data[0].photo);
            }
        };
        getIndexPage(); 
    }, []);


    return (
        <>
            <article className={styles.preambule}>
                <div className={styles.preambule__pic}>
                    <img src={`${PF}/${avatar}`}  alt="" />
                </div>
                <div className={styles.preambule__text}>
                    <p>{text}</p>
                    <Link className={styles.preambule__more}  href={link}>More details...</Link>
                </div>
            </article>
        
        </>
    )
}


export default Preambule;