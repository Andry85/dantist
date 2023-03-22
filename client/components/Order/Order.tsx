import * as React from 'react';
import { Dayjs } from 'dayjs';
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
    const [value, setValue] = React.useState<Dayjs | null>(null);


    return (
        <>
          <div className={styles.order}>
            <h2>Fill out your data</h2>
            <div className={styles.order__inner}>
                <form method='post' action='#'>
                    <div className={styles.order__row}>
                        <div className={styles.order__col}>
                            <input className={styles.order__inputField} type="text" placeholder='Full name' />
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
                            <input className={styles.order__inputField} type="tel" placeholder='Your telephone number' />
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