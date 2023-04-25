import React, {useState} from 'react';
import axios from "axios";
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import {axiosInstance} from '../../../../config';



export default function IndexDashboard() {
  const [photo, setPhoto] = useState<File>(null);
  const [text, setText] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [handleError, setHandleError] = useState(false);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(photo, 'photo');
    console.log(text, 'text');
    console.log(link, 'link');

    if (photo) {
        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("text", text);
        formData.append("link", link);

        try {
            console.log(formData);
            await axiosInstance.post('/indexpage/upload/', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                },
            });
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

  }

  return (
    <>
      <Head>
        <title>Index dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
          <div className={styles.index}>
            <form onSubmit={handleSubmit}>
              <div className={styles.index__row}>
                <label>Image</label>
                <input type="file" name='photo' accept='.png, .jpg, .jpeg' onChange={handleFileChange} />
              </div>
              <div className={styles.index__row}>
                <label>Text</label>
                <textarea  value={text} onChange={(e)=> setText(e.target.value)} />
              </div>
              <div className={styles.index__row}>
                <label>Link</label>
                <input type="text" onChange={(e)=> setLink(e.target.value)} />
              </div>
              <button className={styles.index__submitBtn}>Save</button>
            </form>
          </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
