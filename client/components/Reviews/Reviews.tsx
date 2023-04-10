import React, { useState, useEffect } from 'react';
import styles from './Reviews.module.scss';
import Image from 'next/image';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';



type ReviewsProps = {
    reviews: {
        image: string;
        description: string;
    }[];
    slides: number;
}

const Reviews = ({reviews, slides} : ReviewsProps) => {

    const [position, setPosition] = useState(0);
    const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(false);
    const [isRightArrowDisabled, setIsRigthArrowDisabled] = useState(false);
    const [countSlides, setCountSlides] = useState(0);
    const [sliderOverwlow, setSliderOverwlow] = useState(0);

    useEffect(() => {
        //This code is executed in the browser
        let windowW: number = window.innerWidth;
        setCountSlides(windowW < 768 ? 1 : slides);
        setSliderOverwlow(reviews.length - countSlides);
    }, [])


   
    const handleMove = (type: string): void => {
        setSliderOverwlow(reviews.length - countSlides);

        if (type === 'left') {
            if (position > -sliderOverwlow) {
                setPosition(position - 1);
                setIsRigthArrowDisabled(false);
            }

            if (sliderOverwlow + position === 1) {
                setIsLeftArrowDisabled(true);
            }
            
        }
        if (type === 'right') {
            if (position < 0) {
                setPosition(position + 1);
                setIsLeftArrowDisabled(false);
            }

            if (position === 0) {
                setIsRigthArrowDisabled(true);
            }
        }


    }

    return (
        <>
            <div className={styles.reviews}>
                {sliderOverwlow > 0 ? (
                        <button disabled={isLeftArrowDisabled} className={styles.reviews__prewBtn} onClick={() => handleMove('left')}>
                            <ArrowCircleLeftIcon/>
                        </button>
                    ) : ''
                }
                <div className={styles.reviews__container}>
                    <ul style={{left: `${position * (100/countSlides)}%`}}>
                        {reviews.map((item, index) => (
                            <li key={index} style={{flexBasis: `${100 / countSlides}%`}}>
                                <Image src={item.image} width={100} height={100} alt="" />
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                {sliderOverwlow > 0 ? (
                         <button disabled={isRightArrowDisabled} className={styles.reviews__nextBtn} onClick={() => handleMove('right')}>
                            <ArrowCircleRightIcon/>
                        </button>
                    ) : ''
                }
            </div>
        </>
    )
}


export default Reviews;