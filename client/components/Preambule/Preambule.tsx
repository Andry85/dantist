import styles from './Preambule.module.scss';
import Image from 'next/image';
import Link from 'next/link';



type PreambuleProps = {
    preambule: {
        image: string;
        description: string;
        button: {
         title: string;
         link: string;
        }
    }
  
}

const Preambule = ({preambule} : PreambuleProps) => {
   


    return (
        <>
            <article className={styles.preambule}>
                <div className={styles.preambule__pic}>
                    <Image src={preambule.image} width={1280} height={848} alt="" />
                </div>
                <div className={styles.preambule__text}>
                    <p>{preambule.description}</p>
                    <Link className={styles.preambule__more}  href={preambule.button.link}>{preambule.button.title}</Link>
                </div>
            </article>
        
        </>
    )
}


export default Preambule;