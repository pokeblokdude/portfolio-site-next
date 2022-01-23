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
      <div className="w-[1160px] flex flex-col mb-20 items-center mobile:w-[400px]">

        <h1 className="text-2xl font-semibold w-full self-center mt-10">Photos</h1>
        <h2 className='w-full text-neutral-200'>See full-quality versions on&nbsp;
          <Link href='https://www.flickr.com/photos/164680178@N08/albums/72177720295539332'>
            <a target='_blank' className='font-semibold hover:underline hover:cursor-pointer'>Flickr</a>
          </Link>
        </h2>
        <h3 className='w-full mb-4 mt-2 text-sm text-neutral-400'>This page may take a few seconds to load.</h3>

        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[773px] relative mobile:w-full mobile:h-[267px]">
            <Image src='/photo/janna-telescope.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[850px] h-[550px] relative mobile:w-full mobile:h-[264px]">
            <Image src='/photo/janna-projector-feet.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
          <div className="flex w-[300px] h-[550px] relative mobile:w-full mobile:h-[710px]">
            <Image src='/photo/projector.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[355px] h-[533px] relative mobile:w-full mobile:h-[610px]">
            <Image src='/photo/nubs-portrait.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
          <div className="flex w-[795px] h-[533px] relative items-center mobile:w-full mobile:h-[267px]">
            <Image src='/photo/dragonfly.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[796px] h-[550px] relative items-center mobile:w-full mobile:h-[278px]">
            <Image src='/photo/elijah.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
          <div className="flex w-[355px] h-[550px] relative mobile:w-full mobile:h-[600px]">
            <Image src='/photo/harrison-portrait.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[774px] relative mobile:w-full mobile:h-[278px]">
            <Image src='/photo/light-trail.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[790px] relative mobile:w-full mobile:h-[266px]">
            <Image src='/photo/janna-window.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[399px] h-[660px] relative mobile:w-full mobile:h-[668px]">
            <Image src='/photo/caleb-bandmate.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
          <div className="flex w-[750px] h-[660px] relative items-center mobile:w-full mobile:h-[350px]">
            <Image src='/photo/caleb-drums.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[835px] h-[570px] relative items-center mobile:w-full mobile:h-[278px]">
            <Image src='/photo/moon.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
          <div className="flex w-[314px] h-[570px] relative mobile:w-full mobile:h-[710px]">
            <Image src='/photo/stones.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[936px] relative mobile:w-full mobile:h-[333px]">
            <Image src='/photo/sign.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[314px] h-[484px] relative mobile:w-full mobile:h-[600px]">
            <Image src='/photo/dogs-1.jpg' layout='fill' className='object-contain' alt='' loading='eager' />
          </div>
          <div className="flex w-[835px] h-[470px] relative items-center mobile:w-full mobile:h-[238px]">
            <Image src='/photo/janna-forest.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[502px] relative mobile:h-[172px]">
            <Image src='/photo/moss.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[560px] relative mobile:h-[198px]">
            <Image src='/photo/light.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[525px] h-[355px] relative mobile:w-full mobile:h-[267px]">
            <Image src='/photo/bag.jpg' layout='fill' className='object-contain' alt='' loading='eager' />
          </div>
          <div className="flex w-[625px] h-[355px] relative items-center mobile:w-full mobile:h-[235px]">
            <Image src='/photo/night-flower.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[510px] relative mobile:h-[172px]">
            <Image src='/photo/bathroom.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[906px] relative mobile:h-[320px]">
            <Image src='/photo/drain.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[866px] h-[386px] relative items-center mobile:w-full mobile:h-[172px]">
            <Image src='/photo/kennedy.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[282px] h-[386px] relative mobile:w-full mobile:h-[540px]">
            <Image src='/photo/vintage.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[566px] relative mobile:h-[194px]">
            <Image src='/photo/snow.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[339px] h-[520px] relative mobile:w-full mobile:h-[614px]">
            <Image src='/photo/pr-street.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[810px] h-[520px] relative items-center mobile:w-full mobile:h-[250px]">
            <Image src='/photo/pr.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[784px] relative mobile:h-[278px]">
            <Image src='/photo/plane.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[894px] h-[390px] relative items-center mobile:w-full mobile:h-[170px]">
            <Image src='/photo/rocks.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[256px] h-[390px] relative mobile:w-full mobile:h-[612px]">
            <Image src='/photo/rocks-2.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[545px] relative mobile:h-[183px]">
            <Image src='/photo/splash.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[780px] relative mobile:h-[278px]">
            <Image src='/photo/towel.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[575px] h-[398px] relative items-center mobile:w-full mobile:h-[267px]">
            <Image src='/photo/janna-cliff.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[575px] h-[398px] relative mobile:w-full mobile:h-[278px]">
            <Image src='/photo/niagara-2.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[780px] relative mobile:h-[267px]">
            <Image src='/photo/niagara.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:h-[182px]'>
          <div className="flex w-full h-[510px] relative">
            <Image src='/photo/waterfall.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[750px] h-[510px] relative items-center mobile:w-full mobile:h-[269px]">
            <Image src='/photo/stars.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
          <div className="flex w-[400px] h-[510px] relative">
            <Image src='/photo/log.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[460px] h-[466px] relative items-center mobile:w-full mobile:h-[400px]">
            <Image src='/photo/eddie-square.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[688px] h-[466px] relative mobile:w-full mobile:h-[277px]">
            <Image src='/photo/light-2.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[594px] relative mobile:h-[202px]">
            <Image src='/photo/eddie-wide.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[786px] relative mobile:h-[277px]">
            <Image src='/photo/janna.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[780px] relative mobile:h-[269px]">
            <Image src='/photo/westport.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>

        <h1 className="text-2xl font-semibold w-full self-center mt-10">Astro</h1>
        <h2 className='w-full text-neutral-200 mb-6'>
          Images from a remote telescope for my high school astronomy honors class.
        </h2>

        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[868px] relative mobile:h-[300px]">
            <Image src='/photo/astro/Orion Nebula.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[575px] h-[450px] relative items-center mobile:w-full mobile:h-[310px]">
            <Image src='/photo/astro/Sculptor Galaxy.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[575px] h-[450px] relative mobile:w-full mobile:h-[300px]">
            <Image src='/photo/astro/47 Tucanae.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[868px] relative mobile:h-[310px]">
            <Image src='/photo/astro/The Pleiades.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Photo
