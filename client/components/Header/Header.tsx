import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
    logo: string;

}

const Header = ({ logo }: HeaderProps) => (
    <>
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    <Link href="/">
                        <Image src={logo} width={132} height={86} alt="logo" />
                    </Link>
                </div>
                <nav className={styles.header__menu}>
                    
                </nav>
               
            </div>
        </header>
        
    </>
)


export default Header