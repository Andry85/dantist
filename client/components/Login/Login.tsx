import React, { useState} from 'react';
import axios from "axios"
import styles from './Login.module.scss';
import Link from 'next/link';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {logIn} from '../../redux/slices/user/userSlice';
import { useRouter } from 'next/router';


const Login = () => {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.user.login);
    const dispatch = useDispatch();
    const [handleError, setHandleError] = useState(false);
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        // Handle validations
        axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}/user/login`, {username, password })
        .then(response => {
            if (response) {
                    dispatch(logIn());
                    console.log('user', user);
                    router.push('/admin/dashboard/index');
                    setHandleError(false);
                }
            }
        )
        .catch(error => {
            setHandleError(true);
        })
    }

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    }
    
   
    return (
        <>
           <div className={styles.login}>
                <Link href="/" className={styles.login__back}>
                        Back to index page
                </Link>
                <form onSubmit={handleSubmit}>
                    <div className={styles.login__row}>
                        <input 
                            className={styles.login__inputField} 
                            type="text" 
                            placeholder='Login' 
                            onChange={handleLogin}
                            value={username}
                        />
                    </div>
                    <div className={styles.login__row}>
                        <input 
                            className={styles.login__inputField} 
                            type="password" 
                            placeholder='Password' 
                            onChange={handlePassword}
                            value={password}
                        />
                    </div>
                    <div className={styles.login__row}>
                        <button data-testid="submitBtn" className={styles.login__submitBtn}>Login</button>
                    </div>
                    {handleError && <p className={styles.login__error}>Username or password is not corrected</p>}
                </form>
           </div>
        </>
    )
}

export default Login;