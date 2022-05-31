import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adam Bowman</title>
        <meta name="description" content="Adam Bowman - Web Dev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Adam Bowman
        </h1>
        <p className="text-sm font-mono">developer</p>
        <Link href="/resume">
          <a className="mt-6">
        <h3 className={styles.code}>
          GET /resume
        </h3>
          </a>
        </Link>
      </main>

    </div>
  )
}
