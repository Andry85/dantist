import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../../components/dasboards/DasboardContent/DasboardContent';
import {axiosInstance} from '../../../../../config';



export default function SliderAddDashboard() {

  const [photo, setPhoto] = useState<File>(null);
  const [description, setDescription] = useState<string>('');
  const [handleError, setHandleError] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setPhoto(e.target.files[0]);
      }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("description", description);

      try {
          await axiosInstance.post('/slider/upload/', formData, {
              headers: {
              'Content-Type': 'multipart/form-data'
              },
          });
          window.location.replace('/admin/dashboard/slider');
          setHandleError(false);
      } catch (err) {
          if (err.response.status === 500) {
              console.log(err);
              setHandleError(true);
          } else {
              console.log(err.response.data.msg);
          }
      }
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
