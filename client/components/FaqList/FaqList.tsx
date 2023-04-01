import React, { useState} from 'react';
import styles from './FaqList.module.scss';



type FaqListProps = {
    faq: {
        title: string;
        text: string;
    }[];
}

const FaqList = ({faq} : FaqListProps) => {

    const [faqArray, setFaqArray] = useState(Array(faq.length).fill(0));
    const arrCopy = [...faqArray];

    const toogleAccardion = (index) => {
        const filterArr = arrCopy.map((el, i) => {
            if (i === index) {
                if (el !== 'active') {
                    el  = 'active';
                } else {
                    el  = 0;
                }
            } else {
                el  = 0;
            }

            return el;
        });
        setFaqArray(filterArr);
    }


    const handleTitleClick = (index: number): void => {
        toogleAccardion(index);
    }

    const handleTitleOnKeyDown = (index: number, event: React.KeyboardEvent<HTMLHeadingElement>): void => {
        if(event.key === 'Enter') { 
            toogleAccardion(index);
        }
    }


    return (
        <>
            <div className={styles.faqWrapper}>
                <h2 className={styles.faqWrapper__title}>FAQ</h2>
                <ul className={styles.faqWrapperList}>
                    {faq.map((item, i) => (
                        <li key={i}>
                            <h3 
                                className={`${styles.faqWrapperList__title} ${faqArray[i] === 'active' ? styles.faqWrapperList__titleActive : ''}`}
                                onClick={() => handleTitleClick(i)} 
                                onKeyDown={(event) => handleTitleOnKeyDown(i, event)}
                                tabIndex={1}
                            >
                                {item.title}
                                <i className={styles.arrow}></i>
                            </h3>
                            <div className={`${styles.faqWrapperList__item} ${faqArray[i] === 'active' ? styles.faqWrapperList__itemActive : ''}`}>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


export default FaqList;