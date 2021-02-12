import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link'

export const getStaticProps=async ()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await res.json();

    return{
        props:{
            ninjas:data
        }
    }
}

const index = ({ninjas}) => {
    return (
        <div>
            <h1>list</h1>
            {ninjas.map((n)=>(
                <Link href={`/ninjas/${n.id}`} key={n.id}>
                    <a className={styles.single}><h3>{n.name}</h3></a>
                </Link>
            ))}
        </div>
    );
};

export default index;