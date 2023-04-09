import React, { useState} from 'react';
import styles from './DasboardContent.module.scss';


type DasboardContentProps = {
    children?: React.ReactNode; 
}

const DasboardContent = ({children}: DasboardContentProps) => {


    return (
        <>
            <div className={styles.content}>
                {children}
            </div>
        </>
    )
}


export default DasboardContent