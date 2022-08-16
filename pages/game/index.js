import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer'

const Game = () => {
  return (
    <>
      <Head>
        <title>Game | Alex Howe</title>
      </Head>
      <div className="w-full max-w-[1366px] flex flex-col mb-20">
        <h1 className="text-2xl font-semibold w-[95%] self-center mt-10 mb-6">Games</h1>
        
        <div className="flex flex-col w-full items-center">
          <h2 className="w-[95%] pl-1 mb-4 font-mono">00. Cataclysm</h2>
          <div 
            className='w-[95%] flex flex-col justify-center items-center h-[540px] relative'
          >
            <Image src='/bg/bg-cataclysm.jpg' layout='fill' className='object-cover object-center' alt='' priority={true} loading='eager' quality={100}/>
            <div
              className="w-full h-full bg-black/90 opacity-0 hover:opacity-100 hover:transition-all 
                transition duration-300 py-20 px-40 narrow:px-28 backdrop-blur z-10"
            >
              <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Feb. 2022.</p>
              <p className="leading-loose min:leading-relaxed">
                <span className='font-mono font-bold italic'>Cataclysm</span> &nbsp;is a small game
                about a cat causing havoc. It was developed in 3 days by me and four of my friends, and submitted to&nbsp;
                <Link href='https://itch.io/jam/mini-jame-gam-7'>
                  <a target='_blank' className='font-semibold hover:underline hover:cursor-pointer'>Mini Jame Gam #7,</a>
                </Link>
                &nbsp;with the theme, &quot;You Are the Enemy.&quot;
              </p>
              <p className='leading-loose min:leading-relaxed mt-4'>
                The game is 3D, with 2D, paper-like graphics inspired by the <span className='italic'>Paper Mario</span> series. The goal is to
                jump around and knock stuff over, causing the guy to walk over and fix it. If you distract him for long enough, you can light the
                oven on fire to burn down the house. At first we were planning on making it a puzzle game, but eventually we settled on something
                more akin to <span className='italic'>Untitled Goose Game,</span> where the goal is basically just to cause havoc.
              </p>
              <div className='mt-8 flex'>
                <Link href='https://poke-bd.itch.io/cataclysm'>
                  <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer">Play on Itch.io.</a>
                </Link>
                <Link href='https://github.com/pokeblokdude/cat-game'>
                  <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer ml-8">View source on GitHub.</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-semibold w-[95%] self-center mt-10 mb-6">CS:GO Maps</h1>

        <div className="flex w-[95%] self-center">
            <div className="flex flex-col w-1/2">
              <h2 className="w-full pl-1 mb-4 font-mono">00. am_snowpoint</h2>
              <div className='w-full flex justify-center items-center h-[360px] relative'>
                <Image src='/bg/bg-snowpoint.jpg' layout='fill' className='object-cover object-center' alt='' loading='eager' />
                <div
                  className="w-full h-full bg-black/50 opacity-0 hover:opacity-100 hover:transition-all 
                    transition duration-300 py-20 px-20 backdrop-blur z-10"
                >
                  <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Jan. 2020.</p>
                  <p className="leading-loose min:leading-relaxed">
                    <span className="font-mono font-bold italic">am_snowpoint</span> is a 1v1 map meant to be used
                    with splewis&apos; &quot;multi1v1&quot; server plugin. The map is named snowpoint after the city from&nbsp;
                    <span className='italic'>Pokemon Diamond and Pearl</span>, which inspired the wintery research-site theme.
                  </p>
                  <div className='mt-8 flex'>
                    <Link href='https://steamcommunity.com/sharedfiles/filedetails/?id=1980557586'>
                      <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer">View on Steam Workshop.</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <h2 className="w-full pl-1 mb-4 font-mono">01. de_salisbury</h2>
              <div className='w-full flex justify-center items-center h-[360px] relative'>
                <Image src='/bg/bg-salisbury.jpg' layout='fill' className='object-cover object-center' alt=''/>
                <div
                  className="w-full h-full bg-black/70 opacity-0 hover:opacity-100 hover:transition-all 
                    transition duration-300 py-20 px-20 backdrop-blur z-10"
                >
                  <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Mar. 2020.</p>
                  <p className="leading-loose min:leading-relaxed">
                    <span className='font-mono font-bold italic'>de_salisbury</span> is an unfinished map meant
                    for CS:GO&apos;s 2v2 &quot;Wingman&quot; mode, with one central bombsite. It&apos;s named after Salisbury, MA, a town
                    close to where I grew up. It also fits the coastal theme.
                  </p>
                  <div className='mt-8 flex'>
                    <Link href='https://steamcommunity.com/sharedfiles/filedetails/?id=2016705263'>
                      <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer">View on Steam Workshop.</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      <Footer />
    </>
  )
}

export default Game
