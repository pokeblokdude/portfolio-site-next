import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Howe</title>
      </Head>

      <Footer sticky={true}/>
    </>
  )
}
