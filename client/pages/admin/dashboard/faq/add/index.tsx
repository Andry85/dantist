import React, {useState} from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../../components/dasboards/DasboardContent/DasboardContent';



export default function FaQAddDashboard() {

  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    console.log(text, 'text');
    console.log(title, 'title');
  }

  return (
    <>
      <Head>
        <title>FaQ Add dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.faq__row}>
                    <label>Title</label>
                    <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className={styles.faq__row}>
                    <label>Text</label>
                    <textarea rows={10} onChange={(e)=> setText(e.target.value)}></textarea>
                </div>
                <button className={styles.faq__submitBtn}>Save</button>
            </form>
        </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
