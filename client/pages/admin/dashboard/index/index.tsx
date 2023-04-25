import React, {useState, useEffect} from 'react';
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
  const [avatar, setAvatar] = useState<string>('');
  const [id, setId] = useState<string>('');


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0]);
    }
  };

  const PF = `${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}/images/`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(photo, 'photo');
    console.log(text, 'text');
    console.log(link, 'link');

    // creating page
    if (!avatar && !id) {
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

    } else { // updating page
      const formData = new FormData();
        formData.append("photo", photo);
        formData.append("text", text);
        formData.append("link", link);

        try {
            console.log(formData);
            await axiosInstance.put(`/indexpage/upload/${id}`, formData, {
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

  useEffect(() => {
    const getIndexPage = async () => {
        const res = await axiosInstance.get("/indexpage/");
        console.log(res.data);
        if (res.data.length !== 0) {
          setLink(res.data[0].link);
          setText(res.data[0].text);
          setAvatar(res.data[0].photo);
          setId(res.data[0]._id);
        }
    };
    getIndexPage(); 
  }, []);

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
                <p>{id}</p>
              </div>
              <div className={styles.index__row}>
               {avatar && <img src={`${PF}/${avatar}`} width={100} height={100} alt="" />} 
              </div>
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
                <input type="text" value={link} onChange={(e)=> setLink(e.target.value)} />
              </div>
              <button className={styles.index__submitBtn}>{!avatar && !id ? 'Save' : 'Update'}</button>
            </form>
          </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
