import Head from 'next/head'
import Image from 'next/image'
import styles from  '../styles/Home.module.css'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'


export default function Home() {
  return (
    <div className={styles.container}>
      <header>
       <title>Welcome To netflix Clone</title>
      </header>

      <div className={styles.body}>
      <div className={styles.signUpBg}>
        <div className={styles.signUpContainer}>
      <Header/>
          Home
        </div>
        </div>
        </div>
    
    
    <Footer/>
    </div>

  )
}
