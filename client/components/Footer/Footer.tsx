import styles from './Footer.module.scss';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';



const Footer = () => {
   

    return (
        <>
            <footer className={styles.footer}>
                <p>© 2023 Smile Dentist clinic. All rights reserved.</p>
                <ul className={styles.footer__social}>
                    <li>    
                        <Link href="#">
                            <TwitterIcon/>
                        </Link>
                    </li>
                    <li>    
                        <Link href="#">
                            <YouTubeIcon/>
                        </Link>
                    </li>
                    <li>    
                        <Link href="#">
                            <FacebookIcon/>
                        </Link>
                    </li>
                </ul>
            </footer>
        
        </>
    )
}


export default Footer