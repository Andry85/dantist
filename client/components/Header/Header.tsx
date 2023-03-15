import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

type HeaderProps = {
    menu: {
        id: number;
        title: string;
        link: string
    }[]; 
    contacts: {
       number: string;
       email: string; 
    }
}

const Header = ({ menu, contacts }: HeaderProps) => {
   
    const router = useRouter();

    return (
        <>
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    <Link href="/">
                        <Image src='/images/smile.png' width={132} height={86} alt="logo" />
                    </Link>
                </div>
                <nav className={styles.header__menu}>
                    <ul>
                        {menu.map(item => (
                            <li key={item.id} className={router.asPath == item.link ? styles.active : ""}>
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.header__sidebar}>
                    {contacts.number && <p className={styles.header__phone}>
                        <LocalPhoneIcon/>
                        <span>{contacts.number}</span>
                    </p>}
                    {contacts.email && <p className={styles.header__email}>
                        <EmailIcon/>
                        <span>{contacts.email}</span>
                    </p>}
                </div>
               
            </div>
        </header>
        
    </>
    )
}


export default Header