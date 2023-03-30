import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Toko Obat Tok Abah</title>
      </Head>
      <h1 className={inter.className}>
        Hello World
      </h1>
    </>
  )
}
