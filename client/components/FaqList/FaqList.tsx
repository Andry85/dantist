import React, {useState, useEffect} from 'react';
import styles from './FaqList.module.scss';


const FaqList = ({fags}) => {
    const [faqArray, setFaqArray] = useState(Array(fags.length).fill(0));
    useEffect(() => {
        setFaqArray(Array(fags.length).fill(0));
    }, [fags]);
    
    const toogleAccardion = (index) => {
        const arrCopy = [...faqArray];
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
                    {fags.map((item, i) => (
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