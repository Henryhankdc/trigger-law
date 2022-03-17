import Head from 'next/head'
import Image from 'next/image'
import PrimarySelect from './components/PrimarySelect'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>Abortion Trigger Laws</title>
        <meta name="description" content="Does your state have an abortion trigger law" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet"/>  */}
      </Head>

      <main className={styles.main}>
        <div className='p-5 flex justify-center items-center w-full bg-dark md:h-80 sm:h-60'>
          <h1 className={styles.title}>
            Does My State Have a Trigger Law?
          </h1>
        </div>
      
        <PrimarySelect/>

      </main>



      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
