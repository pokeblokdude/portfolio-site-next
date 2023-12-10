import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const _404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Alex Howe</title>
      </Head>
      <div className='flex flex-col h-[80vh] items-center justify-center'>
        <h1 className='text-4xl'>Woops... There&apos;s nothing here.</h1>
        <Link href='/'><a className='underline'>Go to homepage.</a></Link>
      </div>
    </>
  )
}

export default _404
