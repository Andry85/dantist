import * as React from 'react';
import styles from './Login.module.scss';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {logIn, logOut} from '../../redux/slices/user/userSlice';


const Login = () => {

    const user = useSelector((state: RootState) => state.user.login)
    const dispatch = useDispatch()

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
            if (user) {
                window.location.replace('/admin/dashboard/index');
            }
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
                        <button className={styles.login__submitBtn}>Login</button>
                    </div>
                </form>
           </div>
        </>
    )
}


export default Login;