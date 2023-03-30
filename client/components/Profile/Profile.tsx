import styles from './Profile.module.scss';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';



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
   


    return (
        <>
            <article className={styles.profile}>
                <div className={styles.profile__sidebar}>
                    <div className={styles.profile__description}>
                        <h2>{profile.name}</h2>
                        <p>{profile.description}</p>
                    </div>
                    <div className={styles.profile__experience}>
                        <h3>Expirience:</h3>
                        <strong>{profile.experience}</strong>
                        <span>years</span>
                    </div>
                    <div className={styles.profile__reviews}>
                        <h3>Reviews:</h3>
                        <ul className={styles.profile__skils}>
                        {Array(profile.skils).fill(null).map((item, index)=> (
                                <li key={index}>
                                    <StarIcon/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.profile__pic}>
                    <Image src={profile.image} width={1280} height={848} alt="" />
                </div>
            </article>
        
        </>
    )
}


export default Profile;