import React, {useState} from 'react';
import styles from './Order.module.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import {axiosInstance} from '../../config';

const theme = createTheme({
    typography: {
        htmlFontSize: 8,
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    // Some CSS
                    fontSize: '1.6rem',
                    color: '#333',
                    backgroundColor: '#fff',
                },
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    // Some CSS
                    fontSize: '2.6rem',
                    color: '#333',
                },
            }
        }
    }
  });



const Order = () => {
    const [value, setValue] = React.useState<string | null>(null);
    const [name, setName] = React.useState<string>('');
    const [phone, setPhone] = React.useState<string>('');
    const [status, setStatus] = useState('open');
    const [handleError, setHandleError] = useState(false);
    const [isSucess, setIsucess] = useState(false);
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const date = new Date(value);
        console.log(name);
        console.log(phone);
        console.log(date);

        //await axiosInstance.post('/order', {name, phone, date, status});

        axiosInstance.post('/order', {
            name, phone, date, status
          })
          .then(function (response) {
            console.log(response);
            if(response.status === 200) {
                setHandleError(false);
                setIsucess(true);

                setTimeout(() => {
                    setIsucess(false);
                }, 5000);
            }
          })
          .catch(function (error) {
            console.log(error);
            setHandleError(true);
            setIsucess(false);
          });
        
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPhone(e.target.value);
    }


    return (
        <>
          <div className={styles.order}>
            <h2>Fill out your data</h2>
            <div className={styles.order__inner}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.order__row}>
                        <div className={styles.order__col}>
                            <input 
                                className={styles.order__inputField} 
                                type="text" 
                                placeholder='Full name' 
                                onChange={handleName}
                                value={name}
                            />
                        </div>
                        <div className={styles.order__col}>
                            <div  data-testid="dateField" className={styles.order__date}>
                                <ThemeProvider theme={theme}>
                                    <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                    <div className={styles.order__row}>
                        <div className={styles.order__col}>
                            <input 
                                className={styles.order__inputField} 
                                type="tel" 
                                placeholder='Your telephone number' 
                                onChange={handlePhone}
                                value={phone}
                            />
                            <div className={styles.order__phone}>
                                <SmartphoneIcon />
                            </div>
                        </div>
                        <div className={styles.order__col}>
                            <button disabled={!name || !phone} data-testid="submitBtn" className={styles.order__submitBtn}>Send</button>
                            {handleError && <p className={styles.order__error}>Someting is wrong</p>}
                            {isSucess && <p className={styles.order__sucess}>Request is sent. We will contact with you later.</p>}        
                        </div>
                    </div>
                </form>
            </div>
          </div>
        </>
    )
}


export default Order;