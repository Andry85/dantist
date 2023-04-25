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
  const [file, setFile] = useState<File>(null);
  const [text, setText] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [handleError, setHandleError] = useState(false);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(file, 'file');
    console.log(text, 'text');
    console.log(link, 'link');

    if (file) {
      const formData = new FormData();
      formData.append("myfile", file);

      try {
          console.log(formData);
          await axiosInstance.post('upload', formData, {
              headers: {
              'Content-Type': 'multipart/form-data'
              },
          });
      } catch (err) {
          if (err.response.status === 500) {
              console.log(err);
          } else {
              console.log(err.response.data.msg);
          }
      }

  }

    axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}/indexpage/`, {file: file.name, text, link})
    .then(response => {
        if (response) {
                console.log('response', response);
                setHandleError(false);
            }
        }
    )
    .catch(error => {
        setHandleError(true);
    })

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
