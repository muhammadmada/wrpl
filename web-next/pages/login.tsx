import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '@/styles/Layout.module.css'
import Login from '@/components/Login'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PharmaEase</title>
      </Head>
      <div>
        <div>
          <div>
            <Login />
          </div>
        </div>
      </div>
    </>
  )
}
