import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
return (
    <div className='bg-white'>
    <Head>
      <title>Abortion Trigger Laws - About</title>
      <meta name="description" content="About the Does My State Have a Trigger Law Website." />
      <link rel="icon" href="/favicon.ico" />
      {/* <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet"/>  */}
    </Head>
    <header className='p-3 bg-dark'>
        <ul className='flex justify-start text-white font-bold'>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </header>
    <main className={styles.main}>
      <div className='p-5 flex justify-center items-center w-full bg-dark md:h-80 sm:h-60'>
        <h1 className={styles.title}>
          About
        </h1>
      </div>
    <div className='w-4/5 px-8 py-8'>
        <p className='text-xl mb-8 pb-4'>The purpose of this website is to provide a simple tool for people to figure out if the state they live in has any existing legislation that will take effect when the Supreme Court of the United State of American overturns, as it is expcted to, in May/June of 2022.</p>
        <h2 className={styles.subTitle}>Abortion on Demand, <br/>Without Apology</h2>
    </div>


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