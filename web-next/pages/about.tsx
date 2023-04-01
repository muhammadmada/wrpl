import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '@/styles/Layout.module.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Toko Obat Tok Abah</title>
      </Head>
      <h1 className={montserrat.className}>
        About
      </h1>
    </>
  )
}