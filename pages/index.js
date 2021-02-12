import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <> 
    <Head>
      <title>Home</title>
    </Head>
    <div >
      
       <h3 className={styles.title}>List App</h3>
       <p className={styles.text}>Cupidatat nisi laborum ea do. Est officia officia aliquip elit est excepteur irure tempor. Est do sit aliqua enim dolore deserunt mollit aliquip ipsum eu amet ut. Proident non exercitation officia sit magna ea velit.</p>
       
    </div>
   </> 
  )
}
