import React, {useState, useEffect} from 'react';
import styles from './Profile.module.scss';
import StarIcon from '@mui/icons-material/Star';
import {axiosInstance} from '../../config';


type ProfileProps = {
    profile: {
        name: string;
        image: string;
        description: string;
        experience: number,
        skils: number
    }
  
}

const Profile = ({profile} : ProfileProps) => {

    const PF = `${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}/images/`;

    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [expirience, setExpirience] = useState<string>('');
    const [reviews, setReviews] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');

    useEffect(() => {
        const getAboutPage = async () => {
            const res = await axiosInstance.get("/aboutpage/");
            console.log(res.data);
            if (res.data.length !== 0) {
              setTitle(res.data[0].title);
              setText(res.data[0].text);
              setAvatar(res.data[0].photo);
              setExpirience(res.data[0].expirience);
              setReviews(res.data[0].reviews);
            }
        };
        getAboutPage(); 
      }, []);
   


    return (
        <>
            <article className={styles.profile}>
                <div className={styles.profile__sidebar}>
                    <div className={styles.profile__description}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                    <div className={styles.profile__experience}>
                        <h3>Expirience:</h3>
                        <strong>{expirience}</strong>
                        <span>years</span>
                    </div>
                    <div className={styles.profile__reviews}>
                        <h3>Reviews:</h3>
                        <ul data-testid="skills" className={styles.profile__skils}>
                        {Array(Number(reviews)).fill(null).map((item, index)=> (
                                <li key={index}>
                                    <StarIcon/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.profile__pic}>
                    <img src={`${PF}/${avatar}`}  alt="" />
                </div>
            </article>
        
        </>
    )
}


export default Profile;