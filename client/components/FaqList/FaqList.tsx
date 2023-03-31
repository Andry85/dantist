import React, { useState } from 'react';
import styles from './FaqList.module.scss';



type FaqListProps = {
    faq: {
        title: string;
        text: string;
    }[];
}

const FaqList = ({faq} : FaqListProps) => {

    const handleTitleClick = () => {
        
    }

    return (
        <>
            <div className={styles.faqWrapper}>
                <h2 className={styles.faqWrapper__title}>FAQ</h2>
                <ul className={styles.faqWrapperList}>
                    {faq.map((item, i) => (
                        <li key={i}>
                            <h3 className={styles.faqWrapperList__title} onClick={handleTitleClick}>
                                {item.title}
                                <i className={styles.arrow}></i>
                            </h3>
                            <div className={styles.faqWrapperList__item}>
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