import React, { useState} from 'react';
import styles from './DasboardHeader.module.scss';
import Link from 'next/link';
import type { RootState } from '../../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {logOut} from '../../../redux/slices/user/userSlice';
import { useRouter } from 'next/router';



const DasboardHeader = () => {
    const router = useRouter();

    const user = useSelector((state: RootState) => state.user.login);
    const dispatch = useDispatch();

    const handleLogOut = (): void => {
        dispatch(logOut());
        router.push('/');
    }
   

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__logo}>
                    <Link href="/admin/dashboard/index">
                        Admin Panel
                    </Link>
                </div>
                <ul className={styles.header__user}>
                    <li>
                        <span>{user && 'Admin'}</span>
                    </li>
                    <li>
                        <span className={styles.header__logout} onClick={handleLogOut} role='button' tabIndex={0}>
                            Log Out
                        </span>
                    </li>
                </ul>
            </header>
        </>
    )
}


export default DasboardHeader