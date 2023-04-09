import React, { useState} from 'react';
import styles from './DasboardHeader.module.scss';
import Link from 'next/link';



const DasboardHeader = () => {
   

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__logo}>
                    <Link href="/">
                        Admin Panel
                    </Link>
                </div>
                <ul className={styles.header__user}>
                    <li>
                        <Link href="/">
                            User
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Log Out
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    )
}


export default DasboardHeader