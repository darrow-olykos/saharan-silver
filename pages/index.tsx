import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Grid } from '../components/layout'
import { CityListContainer } from '../components/features/city-list-container'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ant Race</title>
        <meta name="description" content="an ant race calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CityListContainer />
      </main>
    </div>
  )
}
