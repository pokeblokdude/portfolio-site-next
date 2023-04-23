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
      <div className="w-[1160px] flex flex-col mb-20 items-center mobile:w-[360px]">

        <h1 className="text-2xl font-semibold w-full self-center mt-10">Photos</h1>
        <h3 className='w-full mb-4 mt-1 text-sm text-neutral-400'>This page may take a few seconds to load.</h3>

        <h1 className="text-2xl font-semibold w-full self-center mt-4 mb-4">Digital</h1>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[773px] relative mobile:w-full mobile:h-[242px]">
            <Image src='/photo/janna-telescope.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[850px] h-[550px] relative mobile:w-full mobile:h-[230px]">
            <Image src='/photo/janna-projector-feet.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
          <div className="flex w-[300px] h-[550px] relative mobile:w-full mobile:h-[640px]">
            <Image src='/photo/projector.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[355px] h-[533px] relative mobile:w-full mobile:h-[544px]">
            <Image src='/photo/nubs-portrait.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
          <div className="flex w-[795px] h-[533px] relative items-center mobile:w-full mobile:h-[242px]">
            <Image src='/photo/dragonfly.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[796px] h-[550px] relative items-center mobile:w-full mobile:h-[244px]">
            <Image src='/photo/elijah.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
          <div className="flex w-[355px] h-[550px] relative mobile:w-full mobile:h-[542px]">
            <Image src='/photo/harrison-portrait.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[774px] relative mobile:w-full mobile:h-[244px]">
            <Image src='/photo/light-trail.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[790px] relative mobile:w-full mobile:h-[240px]">
            <Image src='/photo/janna-window.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[399px] h-[660px] relative mobile:w-full mobile:h-[596px]">
            <Image src='/photo/caleb-bandmate.jpg' layout='fill' className='object-contain' alt='' loading='eager'/>
          </div>
          <div className="flex w-[750px] h-[660px] relative items-center mobile:w-full mobile:h-[316px]">
            <Image src='/photo/caleb-drums.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[944px] relative mobile:w-full mobile:h-[296px]">
            <Image src='/photo/sign.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[314px] h-[478px] relative mobile:w-full mobile:h-[538px]">
            <Image src='/photo/dogs-1.jpg' layout='fill' className='object-contain' alt='' loading='eager' />
          </div>
          <div className="flex w-[836px] h-[470px] relative items-center mobile:w-full mobile:h-[208px]">
            <Image src='/photo/janna-forest.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[504px] relative mobile:h-[154px]">
            <Image src='/photo/moss.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[560px] relative mobile:h-[174px]">
            <Image src='/photo/light.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[525px] h-[355px] relative mobile:w-full mobile:h-[241px]">
            <Image src='/photo/bag.jpg' layout='fill' className='object-contain' alt='' loading='eager' />
          </div>
          <div className="flex w-[625px] h-[355px] relative items-center mobile:w-full mobile:h-[206px]">
            <Image src='/photo/night-flower.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[510px] relative mobile:h-[154px]">
            <Image src='/photo/bathroom.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[906px] relative mobile:h-[284px]">
            <Image src='/photo/drain.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[866px] h-[386px] relative items-center mobile:w-full mobile:h-[156px]">
            <Image src='/photo/kennedy.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[282px] h-[386px] relative mobile:w-full mobile:h-[480px]">
            <Image src='/photo/vintage.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[566px] relative mobile:h-[176px]">
            <Image src='/photo/snow.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[784px] relative mobile:h-[246px]">
            <Image src='/photo/plane.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[894px] h-[390px] relative items-center mobile:w-full mobile:h-[154px]">
            <Image src='/photo/rocks.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[256px] h-[390px] relative mobile:w-full mobile:h-[546px]">
            <Image src='/photo/rocks-2.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[545px] relative mobile:h-[166px]">
            <Image src='/photo/splash.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[575px] h-[390px] relative items-center mobile:w-full mobile:h-[242px]">
            <Image src='/photo/towel.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[575px] h-[390px] relative mobile:w-full mobile:h-[244px]">
            <Image src='/photo/niagara-2.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[785px] relative mobile:h-[242px]">
            <Image src='/photo/niagara.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:h-[156px]'>
          <div className="flex w-full h-[504px] relative">
            <Image src='/photo/waterfall.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[750px] h-[508px] relative items-center mobile:w-full mobile:h-[245px]">
            <Image src='/photo/stars.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
          <div className="flex w-[400px] h-[498px] relative items-center mobile:w-full mobile:h-[456px]">
            <Image src='/photo/log.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[460px] h-[466px] relative items-center mobile:w-full mobile:h-[362px]">
            <Image src='/photo/eddie-square.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[688px] h-[466px] relative mobile:w-full mobile:h-[240px]">
            <Image src='/photo/light-2.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[594px] relative mobile:h-[188px]">
            <Image src='/photo/eddie-wide.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[780px] relative mobile:h-[240px]">
            <Image src='/photo/westport.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>

        <h1 className="text-2xl font-semibold w-full self-center mt-10 mb-4">Film</h1>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[870px] relative mobile:w-full mobile:h-[270px]">
            <Image src='/photo/film/quarry-hill.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[563px] h-[856px] relative mobile:w-full mobile:h-[544px]">
            <Image src='/photo/film/quarry-brush.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
          <div className="flex w-[587px] h-[856px] relative mobile:w-full mobile:h-[520px]">
            <Image src='/photo/film/quarry-block.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[812px] relative mobile:w-full mobile:h-[254px]">
            <Image src='/photo/film/ruin1.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[575px] h-[450px] relative mobile:w-full mobile:h-[272px]">
            <Image src='/photo/film/forklift.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
          <div className="flex w-[575px] h-[450px] relative mobile:w-full mobile:h-[272px]">
            <Image src='/photo/film/ruin2.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[603px] h-[734px] relative mobile:w-full mobile:h-[442px]">
            <Image src='/photo/film/noho.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
          <div className="flex w-[547px] h-[734px] relative mobile:w-full mobile:h-[482px]">
            <Image src='/photo/film/elijah.jpg' layout='fill' className='object-contain' alt='' priority={true} loading='eager'/>
          </div>
        </div>

        <h1 className="text-2xl font-semibold w-full self-center mt-10">Astro</h1>
        <h2 className='w-full text-neutral-200 mb-6'>
          Images from a remote telescope for my high school astronomy honors class.
        </h2>

        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[868px] relative mobile:h-[270px]">
            <Image src='/photo/astro/Orion Nebula.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center mobile:flex-col'>
          <div className="flex w-[575px] h-[450px] relative items-center mobile:w-full mobile:h-[274px]">
            <Image src='/photo/astro/Sculptor Galaxy.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
          <div className="flex w-[575px] h-[450px] relative mobile:w-full mobile:h-[270px]">
            <Image src='/photo/astro/47 Tucanae.jpg' layout='fill' className='object-contain' loading='eager' alt=''/>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[868px] relative mobile:h-[274px]">
            <Image src='/photo/astro/The Pleiades.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}/>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Photo
