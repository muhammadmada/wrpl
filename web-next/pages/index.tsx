import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import mainStyles from '@/styles/Layout.module.css'
import homeStyles from '@/styles/Home.module.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PharmaEase</title>
      </Head>
      <div className={mainStyles.container}>
        <div className={homeStyles.title}>
        <h1>
            Welcome to PharmaEase!
        </h1>
        <div>
          <h2>
            Search bar here
          </h2>
        </div>
        </div>
      </div>
    </>
  )
}
