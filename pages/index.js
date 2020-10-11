import Head from 'next/head'
import LinkedInAuth from '../components/LinkedInAuth'
import styles from '../styles/Home.module.css'

 const Index = () => {
   return (
    <div className={styles.container}>
    

      <main className={styles.main}>
       
        <LinkedInAuth/>

       
      </main>
    </div>
)
   }
export default Index

