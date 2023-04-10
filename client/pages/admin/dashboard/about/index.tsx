import React, {useState} from 'react';
import Head from 'next/head';
import styles from './Index.module.scss';
import DasboardHeader from '../../../../components/dasboards/DasboardHeader/DasboardHeader';
import DasboardContainer from '../../../../components/dasboards/DasboardContainer/DasboardContainer';
import DasboardSidebar from '../../../../components/dasboards/DasboardSidebar/DasboardSidebar';
import DasboardContent from '../../../../components/dasboards/DasboardContent/DasboardContent';



export default function AboutDashboard() {

  const [file, setFile] = useState<File>(null);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [expirience, setExpirience] = useState<number>(0);
  const [reviews, setReviews] = useState<number>(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleExpirienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setExpirience(Number(e.target.value));
  };

  const handleReviewsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReviews(Number(e.target.value));
  };
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    console.log(file, 'file');
    console.log(text, 'text');
    console.log(title, 'title');
    console.log(expirience, 'expirience');
    console.log(reviews, 'reviews');
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
                <input type="text" onChange={(e)=> setTitle(e.target.value)} />
              </div>
              <div className={styles.index__row}>
                <label>Text</label>
                <textarea onChange={(e)=> setText(e.target.value)} />
              </div>
              <div className={styles.index__row}>
                <label>Image</label>
                <input type="file" onChange={handleFileChange}  />
              </div>
              <div className={styles.index__row}>
                <label>Expirience</label>
                <select onChange={handleExpirienceChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>more 20</option>
                </select>
                <i className={styles.index__expirience}>years</i>
              </div>
              <div className={styles.index__row}>
                <label>Reviews</label>
                <select onChange={handleReviewsChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <button className={styles.index__submitBtn}>Save</button>
            </form>
          </div>
        </DasboardContent>
      </DasboardContainer>
    </>
  );
}
