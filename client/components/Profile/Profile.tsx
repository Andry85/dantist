import styles from './Profile.module.scss';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';



type ProfileProps = {
    profile: {
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
                <div className={styles.profile__pic}>
                    <Image src={profile.image} width={1280} height={848} alt="" />
                </div>
                <div className={styles.profile__sidebar}>
                    <div className={styles.profile__description}>
                        <p>{profile.description}</p>
                    </div>
                    <div className={styles.profile__experience}>
                        <p>{profile.experience}</p>
                    </div>
                    <ul className={styles.profile__skils}>
                       {Array(profile.skils).fill(null).map((item, index)=> (
                            <li key={index}>
                                <StarIcon/>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        
        </>
    )
}


export default Profile;