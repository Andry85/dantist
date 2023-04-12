import React, {useState} from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../../components/dasboards/DasboardContent/DasboardContent';



export default function FaQAddDashboard() {

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [date, setDate] = useState(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    console.log(name, 'name');
    console.log(phone, 'phone');
    console.log(date, 'date');
}

  return (
    <>
      <Head>
        <title>Order Add dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.order__row}>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                </div>
                <div className={styles.order__row}>
                    <label>Phone</label>
                    <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} />
                </div>
                <div className={styles.order__row}>
                    <label>Date</label>
                    <input type="date" value={date} onChange={(e)=> setDate(e.target.value)}/>
                </div>
                <button className={styles.order__submitBtn}>Save</button>
            </form>
        </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
