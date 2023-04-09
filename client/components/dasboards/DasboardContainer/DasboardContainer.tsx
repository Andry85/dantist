import styles from './DasboardContainer.module.scss';

type ContainerProps = {
    children?: React.ReactNode; 
}

const DasboardContainer = ({children}: ContainerProps) => {


    return (
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}


export default DasboardContainer