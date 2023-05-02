import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';
import {axiosInstance} from '../../../../config';



export default function AboutDashboard() {

  const [photo, setPhoto] = useState<File>(null);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [expirience, setExpirience] = useState<string>('');
  const [reviews, setReviews] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [handleError, setHandleError] = useState(false);

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
    console.log(title, 'title');
    console.log(expirience, 'expirience');
    console.log(reviews, 'reviews');

    // creating page
    if (!avatar && !id) {
        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("text", text);
        formData.append("title", title);
        formData.append("expirience", expirience);
        formData.append("reviews", reviews);

        try {
            console.log(formData);
            await axiosInstance.post('/aboutpage/upload/', formData, {
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
      formData.append("title", title);
      formData.append("expirience", expirience);
      formData.append("reviews", reviews);
      formData.append("avatar", avatar);

        try {
            console.log(formData);
            await axiosInstance.put(`/aboutpage/upload/${id}`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                },
            });
            setHandleError(false);
            window.location.replace('/admin/dashboard/about');
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
    const getAboutPage = async () => {
        const res = await axiosInstance.get("/aboutpage/");
        console.log(res.data);
        if (res.data.length !== 0) {
          setTitle(res.data[0].title);
          setText(res.data[0].text);
          setAvatar(res.data[0].photo);
          setId(res.data[0]._id);
          setExpirience(res.data[0].expirience);
          setReviews(res.data[0].reviews);
        }
    };
    getAboutPage(); 
  }, []);

  const handleDelete = async (event, avatar) => {
    setAvatar('');
    await axiosInstance.delete(`/aboutpage/deleteImg/${avatar}`);
  }


  return (
    <>
      <Head>
        <title>About dashboard page</title>
      </Head>
      <DasboardHeader/>
      <DasboardContainer>
        <DasboardSidebar/>
        <DasboardContent>
          <div className={styles.index}>
            <form onSubmit={handleSubmit}>
              <div className={styles.index__row}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
              </div>
              <div className={styles.index__row}>
                <label>Text</label>
                <textarea rows={7} value={text} onChange={(e)=> setText(e.target.value)} />
              </div>
              <div className={styles.index__row}>
               {avatar && <img src={`${PF}/${avatar}`} width={100} height={100} alt="" />} 
               {avatar ? <button className={styles.index__deleteImag} onClick={(e) => handleDelete(e, avatar)}>Delete</button> : ''}
              </div>
              <div className={styles.index__row}>
                <label>Image</label>
                <input type="file" onChange={handleFileChange}  />
              </div>
              <div className={styles.index__row}>
                <label>Expirience</label>
                <select value={expirience} onChange={(e)=> setExpirience(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <i className={styles.index__expirience}>years</i>
              </div>
              <div className={styles.index__row}>
                <label>Reviews</label>
                <select value={reviews} onChange={(e)=> setReviews(e.target.value)}>
                <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <button className={styles.index__submitBtn}>{!avatar && !id ? 'Save' : 'Update'}</button>
            </form>
          </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
