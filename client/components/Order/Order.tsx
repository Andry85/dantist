import * as React from 'react';
import styles from './Order.module.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SmartphoneIcon from '@mui/icons-material/Smartphone';


const theme = createTheme({
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
    
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const date = new Date(value);
        console.log(name);
        console.log(phone);
        console.log(date);
        
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
                            />
                        </div>
                        <div className={styles.order__col}>
                            <div className={styles.order__date}>
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
                            />
                            <div className={styles.order__phone}>
                                <SmartphoneIcon />
                            </div>
                        </div>
                        <div className={styles.order__col}>
                            <button className={styles.order__submitBtn}>Send</button>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        </>
    )
}


export default Order;