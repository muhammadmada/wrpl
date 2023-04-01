import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '@/styles/Layout.module.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PharmaEase</title>
      </Head>
      <h1 className={montserrat.className}>
        Services
      </h1>
    </>
  )
}
