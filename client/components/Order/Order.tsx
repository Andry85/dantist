import * as React from 'react';
import { Dayjs } from 'dayjs';
import styles from './Order.module.scss';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';





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
                                <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.order__row}>
                        <div className={styles.order__col}>
                            <input className={styles.order__inputField} type="tel" placeholder='Your telephone number' />
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