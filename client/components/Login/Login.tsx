import * as React from 'react';
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

    const [login, setLogin] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        console.log(login);
        console.log(password);
        console.log('user', user);


            if (login === 'andrii' && password === '1111') {
                dispatch(logIn());
                console.log('user', user);
                router.push('/admin/dashboard/index');
                
            }


    }

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLogin(e.target.value);
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
                            value={login}
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
                </form>
           </div>
        </>
    )
}


export default Login;