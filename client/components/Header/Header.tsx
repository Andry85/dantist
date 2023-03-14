import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";

type HeaderProps = {
    menu: {
        id: number;
        title: string;
        link: string
    }[]; 
}

const Header = ({ menu }: HeaderProps) => {
   
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
               
            </div>
        </header>
        
    </>
    )
}


export default Header