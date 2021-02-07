import Axios from 'axios'


import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleClick=()=>{
    console.log('hello')
    Axios.get('/api/greetings').then(res=>{
      console.log('RES',res)
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h1>hello</h1>
   <button onClick={handleClick}>test</button>
    </div>
  )
}
