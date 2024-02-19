import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import PhotoAlbum from 'react-photo-album'
import CollageImage from '../../components/CollageImage'

const photos = [
  { src: '/photo/janna-telescope.jpg', width: 1920, height: 1281 },
  { src: '/photo/janna-projector-feet.jpg', width: 1920, height: 1208 },
  { src: '/photo/projector.jpg', width: 1000, height: 1778 },
  { src: '/photo/light-trail.jpg', width: 1920, height: 1281 },
  { src: '/photo/harrison-portrait.jpg', width: 1000, height: 1499 },
]

const Photo = () => {

  return (
    <>
      <Head>
        <title>Photo | Alex Howe</title>
      </Head>
      <div className="w-[1160px] flex flex-col items-center min:w-[360px]">

        <h1 className="text-2xl font-semibold w-full self-center mt-10">
          Photos
        </h1>
        <h3 className='w-full mb-4 mt-1 text-sm text-neutral-400'>This page may take a few seconds to load.</h3>

        {/* <PhotoAlbum
          layout='rows'
          photos={photos}
          targetRowHeight={500}
          renderPhoto={CollageImage}
          defaultContainerWidth={1000}
          sizes={{ size: 'calc(100vw - 240px)' }}
        /> */}

        
        <h1 className="text-2xl w-full self-center mt-4 mb-4 font-mono" id='digital'>Digital</h1>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[773px] relative min:w-full min:h-[242px]">
            <Image
              src='/photo/janna-telescope.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[852px] h-[548px] relative min:w-full min:h-[233px]">
            <Image
              src='/photo/janna-projector-feet.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager'
            />
          </div>
          <div className="flex w-[302px] h-[548px] relative min:w-full min:h-[642px]">
            <Image
              src='/photo/projector.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager'
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[798px] h-[535px] relative items-center min:w-full min:h-[246px]">
            <Image
              src='/photo/light-trail.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
          <div className="flex w-[355px] h-[535px] relative min:w-full min:h-[543px]">
            <Image
              src='/photo/harrison-portrait.jpg'
              layout='fill' className='object-contain' alt='' loading='eager'
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[355px] h-[545px] relative min:w-full min:h-[545px]">
            <Image
              src='/photo/nubs-portrait.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager'
            />
          </div>
          <div className="flex w-[798px] h-[545px] relative items-center min:w-full min:h-[243px]">
            <Image
              src='/photo/dragonfly.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[934px] relative min:w-full min:h-[297px]">
            <Image
              src='/photo/sign.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[400px] h-[668px] relative min:w-full min:h-[593px]">
            <Image
              src='/photo/caleb-bandmate.jpg'
              layout='fill' className='object-contain' alt='' loading='eager'
            />
          </div>
          <div className="flex w-[753px] h-[668px] relative items-center min:w-full min:h-[322px]">
            <Image
              src='/photo/caleb-drums.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[675px] h-[320px] relative min:w-full min:h-[172px]">
            <Image
              src='/photo/light.jpg'
              layout='fill' className='object-contain' alt='' loading='eager'
            />
          </div>
          <div className="flex w-[478px] h-[320px] relative items-center min:w-full min:h-[246px]">
            <Image
              src='/photo/bag.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[785px] relative min:h-[243px]">
            <Image
              src='/photo/westport.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[416px] h-[420px] relative min:w-full min:h-[366px]">
            <Image
              src='/photo/cph-sun.jpg'
              layout='fill' className='object-contain' alt='' loading='eager'
            />
          </div>
          <div className="flex w-[738px] h-[420px] relative items-center min:w-full min:h-[204px]">
            <Image
              src='/photo/night-flower.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[504px] relative min:h-[160px]">
            <Image
              src='/photo/bathroom.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[870px] h-[380px] relative items-center min:w-full min:h-[156px]">
            <Image
              src='/photo/grill.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
          <div className="flex w-[282px] h-[380px] relative min:w-full min:h-[484px]">
            <Image
              src='/photo/vintage.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[565px] relative min:h-[174px]">
            <Image
              src='/photo/snow.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:h-[248px]'>
          <div className="flex w-full h-[784px] relative">
            <Image
              src='/photo/niagara.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[577px] h-[580px] relative items-center min:w-full min:h-[360px]">
            <Image
              src='/photo/janna-discgolf.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
          <div className="flex w-[577px] h-[580px] relative min:w-full min:h-[368px]">
            <Image
              src='/photo/janna-woods.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[506px] relative min:h-[154px]">
            <Image
              src='/photo/moss.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[461px] h-[698px] relative items-center min:w-full min:h-[548px]">
            <Image
              src='/photo/iceland-moss.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
          <div className="flex w-[692px] h-[698px] relative min:w-full min:h-[360px]">
            <Image
              src='/photo/iceland-pipe.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[1167px] relative min:h-[368px]">
            <Image
              src='/photo/iceland-moss-bw.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[812px] h-[520px] relative items-center min:w-full min:h-[227px]">
            <Image
              src='/photo/rocks.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
          <div className="flex w-[342px] h-[520px] relative min:w-full min:h-[547px]">
            <Image
              src='/photo/rocks-2.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[780px] relative min:h-[240px]">
            <Image
              src='/photo/iceland-mtn-1.jpg' 
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[384px] h-[586px] relative items-center min:w-full min:h-[548px]">
            <Image
              src='/photo/iceland-pillar.jpg' 
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
          <div className="flex w-[768px] h-[586px] relative min:w-full min:h-[270px]">
            <Image
              src='/photo/iceland-mtn-2.jpg' 
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[874px] relative min:h-[278px]">
            <Image
              src='/photo/iceland-shack.jpg' 
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[768px] h-[588px] relative items-center min:w-full min:h-[270px]">
            <Image
              src='/photo/norway-mountain.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
          <div className="flex w-[384px] h-[588px] relative items-center min:w-full min:h-[548px]">
            <Image
              src='/photo/iceland-mtn-house.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[342px] h-[460px] relative items-center min:w-full min:h-[480px]">
            <Image
              src='/photo/iceland-coast.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
          <div className="flex w-[810px] h-[460px] relative items-center min:w-full min:h-[210px]">
            <Image
              src='/photo/iceland-glacier.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:h-[154px]'>
          <div className="flex w-full h-[508px] relative">
            <Image
              src='/photo/iceland-mtns-wide.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[784px] h-[496px] relative items-center min:w-full min:h-[232px]">
            <Image
              src='/photo/faroe-waterfall-wide.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
          <div className="flex w-[368px] h-[496px] relative items-center min:w-full min:h-[482px]">
            <Image
              src='/photo/faroe-road.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:h-[160px]'>
          <div className="flex w-full h-[504px] relative">
            <Image
              src='/photo/waterfall.jpg' 
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[552px] h-[806px] relative min:w-full min:h-[524px]">
            <Image
              src='/photo/iceland-wf-under.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
          <div className="flex w-[600px] h-[806px] relative items-center min:w-full min:h-[486px]">
            <Image
              src='/photo/iceland-wf-mountain.jpg' 
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[281px] h-[382px] relative items-center min:w-full min:h-[484px]">
            <Image
              src='/photo/iceland-cliff.jpg' 
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
          <div className="flex w-[873px] h-[382px] relative min:w-full min:h-[158px]">
            <Image
              src='/photo/iceland-cliff-top.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[656px] relative min:h-[206px]">
            <Image
              src='/photo/iceland-wf-close.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[576px] h-[776px] relative items-center min:w-full min:h-[483px]">
            <Image
              src='/photo/cph-janna.jpg' 
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
          <div className="flex w-[576px] h-[776px] relative items-center min:w-full min:h-[486px]">
            <Image
              src='/photo/cph-hedge.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[876px] relative min:h-[272px]">
            <Image
              src='/photo/cph-train.jpg' layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[738px] h-[560px] relative items-center min:w-full min:h-[276px]">
            <Image
              src='/photo/iceland-cat.jpg' 
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
          <div className="flex w-[415px] h-[560px] relative items-center min:w-full min:h-[482px]">
            <Image
              src='/photo/iceland-lighthouse.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[1166px] relative min:h-[366px]">
            <Image
              src='/photo/norway-building.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>

        <h1 className="text-2xl font-mono w-full self-center mt-10 mb-4" id='film'>Film</h1>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[870px] relative min:w-full min:h-[270px]">
            <Image
              src='/photo/film/quarry-hill.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[564px] h-[856px] relative min:w-full min:h-[544px]">
            <Image
              src='/photo/film/quarry-brush.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager'
            />
          </div>
          <div className="flex w-[588px] h-[856px] relative min:w-full min:h-[520px]">
            <Image
              src='/photo/film/quarry-block.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager'
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[812px] relative min:w-full min:h-[254px]">
            <Image
              src='/photo/film/ruin1.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[575px] h-[450px] relative min:w-full min:h-[272px]">
            <Image
              src='/photo/film/forklift.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager'
            />
          </div>
          <div className="flex w-[575px] h-[450px] relative min:w-full min:h-[272px]">
            <Image
              src='/photo/film/ruin2.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager'
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[603px] h-[734px] relative min:w-full min:h-[442px]">
            <Image
              src='/photo/film/noho.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager'
            />
          </div>
          <div className="flex w-[547px] h-[734px] relative min:w-full min:h-[482px]">
            <Image
              src='/photo/film/elijah.jpg'
              layout='fill' className='object-contain' alt='' priority={true} loading='eager'
            />
          </div>
        </div>

        <h1 className="text-2xl font-mono w-full self-center mt-10" id='astro'>Astro</h1>
        <h2 className='w-full text-neutral-400 mb-6'>
          Images from a remote telescope for my high school astronomy honors class.
        </h2>

        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[868px] relative min:h-[270px]">
            <Image
              src='/photo/astro/Orion Nebula.jpg' 
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center min:flex-col'>
          <div className="flex w-[575px] h-[450px] relative items-center min:w-full min:h-[274px]">
            <Image
              src='/photo/astro/Sculptor Galaxy.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
          <div className="flex w-[575px] h-[450px] relative min:w-full min:h-[270px]">
            <Image
              src='/photo/astro/47 Tucanae.jpg'
              layout='fill' className='object-contain' loading='eager' alt=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div className="flex w-full h-[868px] relative min:h-[274px]">
            <Image
              src='/photo/astro/The Pleiades.jpg'
              layout='fill' className='object-contain' alt='' loading='eager' quality={100}
            />
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Photo
