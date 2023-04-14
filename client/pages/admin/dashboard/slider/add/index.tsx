import React, {useState} from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../../components/dasboards/DasboardContent/DasboardContent';



export default function SliderAddDashboard() {

  const [file, setFile] = useState<File>(null);
  const [description, setDescription] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
      setFile(e.target.files[0]);
      }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
      event.preventDefault();
      console.log(file, 'file');
      console.log(description, 'description');
  }

  return (
    <>
      <Head>
        <title>Slider Add dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.slider__row}>
                    <label>Image</label>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <div className={styles.slider__row}>
                    <label>Description</label>
                    <textarea rows={10} value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                </div>
                <button className={styles.slider__submitBtn}>Save</button>
            </form>
        </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
