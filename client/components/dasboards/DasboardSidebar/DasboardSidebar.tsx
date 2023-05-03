import React, { useState} from 'react';
import styles from './DasboardSidebar.module.scss';
import Link from 'next/link';
import { useRouter } from "next/router";


const DasboardSidebar = () => {

    const router = useRouter();
   
    return (
        <>
            <aside className={styles.sidebar}>
                <div className={styles.sidebar__block}>
                    <h2>Pages</h2>
                    <ul>
                        <li className={router.asPath == "/admin/dashboard/index" ? styles.active : ""}>
                            <Link href="/admin/dashboard/index">
                                Main
                            </Link>
                        </li>
                        <li className={router.asPath == "/admin/dashboard/about" ? styles.active : ""}>
                            <Link href="/admin/dashboard/about">
                                About Doctor
                            </Link>
                        </li>
                        <li className={router.asPath == "/admin/dashboard/faq" ? styles.active : ""}>
                            <Link href="/admin/dashboard/faq">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.sidebar__block}>
                    <h2>Others</h2>
                    <ul>
                        <li className={router.asPath == "/admin/dashboard/orders" ? styles.active : ""}>
                            <Link href="/admin/dashboard/orders">
                                List of orders
                            </Link>
                        </li>
                        <li className={router.asPath == "/admin/dashboard/slider" ? styles.active : ""}>
                            <Link href="/admin/dashboard/slider">
                                Slider
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}


export default DasboardSidebar;