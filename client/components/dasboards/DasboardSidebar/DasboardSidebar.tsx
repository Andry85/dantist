import React, { useState} from 'react';
import styles from './DasboardSidebar.module.scss';
import Link from 'next/link';



const DasboardSidebar = () => {
   
    return (
        <>
            <aside className={styles.sidebar}>
                <div className={styles.sidebar__block}>
                    <h2>Pages</h2>
                    <ul>
                        <li>
                            <Link href="/admin/dashboard/index">
                                Main
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                About Doctor
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.sidebar__block}>
                    <h2>Others</h2>
                    <ul>
                        <li>
                            <Link href="/">
                                List of orders
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
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