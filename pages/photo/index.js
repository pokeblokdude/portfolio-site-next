import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../../components/Footer'

const Photo = () => {
  return (
    <>
      <Head>
        <title>Photo | Alex Howe</title>
      </Head>
      <div className="w-[1160px] flex flex-col mb-20 items-center">

        <h1 className="text-2xl font-semibold w-full self-center mt-10">Photos</h1>
        <h2 className='w-full mb-10 text-neutral-200'>See full-quality versions on&nbsp;
          <Link href=''>
            <a target='_blank' className='font-semibold hover:underline hover:cursor-pointer'>Flickr</a>
          </Link>
        </h2>

        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[773px] relative">
            <Image src='/photo/janna-telescope.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[850px] h-[550px] relative">
            <Image src='/photo/janna-projector-feet.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
          <div className="flex w-[300px] h-[550px] relative">
            <Image src='/photo/projector.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[355px] h-[533px] relative">
            <Image src='/photo/nubs-portrait.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
          <div className="flex w-[795px] h-[533px] relative items-center">
            <Image src='/photo/dragonfly.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[796px] h-[550px] relative items-center">
            <Image src='/photo/elijah.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
          <div className="flex w-[355px] h-[550px] relative">
            <Image src='/photo/harrison-portrait.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[774px] relative">
            <Image src='/photo/light-trail.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[790px] relative">
            <Image src='/photo/janna-window.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[399px] h-[660px] relative">
            <Image src='/photo/caleb-bandmate.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
          <div className="flex w-[750px] h-[660px] relative items-center">
            <Image src='/photo/caleb-drums.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[835px] h-[570px] relative items-center">
            <Image src='/photo/moon.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
          <div className="flex w-[314px] h-[570px] relative">
            <Image src='/photo/stones.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[936px] relative">
            <Image src='/photo/sign.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[314px] h-[484px] relative">
            <Image src='/photo/dogs-1.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
          <div className="flex w-[835px] h-[470px] relative items-center">
            <Image src='/photo/janna-forest.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[502px] relative">
            <Image src='/photo/moss.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[560px] relative">
            <Image src='/photo/light.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[525px] h-[355px] relative">
            <Image src='/photo/bag.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
          <div className="flex w-[625px] h-[355px] relative items-center">
            <Image src='/photo/night-flower.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[510px] relative">
            <Image src='/photo/bathroom.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[906px] relative">
            <Image src='/photo/drain.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[866px] h-[386px] relative items-center">
            <Image src='/photo/kennedy.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
          <div className="flex w-[282px] h-[386px] relative">
            <Image src='/photo/vintage.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[566px] relative">
            <Image src='/photo/snow.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[339px] h-[520px] relative">
            <Image src='/photo/pr-street.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
          <div className="flex w-[810px] h-[520px] relative items-center">
            <Image src='/photo/pr.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[784px] relative">
            <Image src='/photo/plane.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[894px] h-[390px] relative items-center">
            <Image src='/photo/rocks.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
          <div className="flex w-[256px] h-[390px] relative">
            <Image src='/photo/rocks-2.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[545px] relative">
            <Image src='/photo/splash.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[780px] relative">
            <Image src='/photo/towel.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[575px] h-[398px] relative items-center">
            <Image src='/photo/janna-cliff.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
          <div className="flex w-[575px] h-[398px] relative">
            <Image src='/photo/niagara-2.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[780px] relative">
            <Image src='/photo/niagara.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[510px] relative">
            <Image src='/photo/waterfall.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[750px] h-[510px] relative items-center">
            <Image src='/photo/stars.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
          <div className="flex w-[400px] h-[510px] relative">
            <Image src='/photo/log.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-[460px] h-[466px] relative items-center">
            <Image src='/photo/eddie-square.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
          <div className="flex w-[688px] h-[466px] relative">
            <Image src='/photo/light-2.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[594px] relative">
            <Image src='/photo/eddie-wide.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[786px] relative">
            <Image src='/photo/janna.jpg' layout='fill' className='object-contain' alt=''/>
          </div>
        </div>
      </div>
      <Footer sticky={false}/>
    </>
  )
}

export default Photo
