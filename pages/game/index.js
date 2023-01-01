import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer'
import MediaItem from '../../components/MediaItem'

const Game = () => {
  return (
    <>
      <Head>
        <title>Game | Alex Howe</title>
      </Head>
      <div className="w-full max-w-[1366px] flex flex-col items-center mb-20">
        <h1 className="text-2xl font-semibold w-[95%] self-center mt-10 mb-6">Games</h1>
        
        <MediaItem 
          title='00. Cataclysm'
          imageSrc='/bg/bg-cataclysm.jpg'
          imagePos='object-center'
          date='Feb. 2022.'
          description={[
            <p className="leading-loose min:leading-relaxed" key='a'>
              <span className='font-mono font-bold italic'>Cataclysm</span> &nbsp;is a small game
              about a cat causing havoc. It was developed in 3 days by me and four of my friends, and submitted to&nbsp;
              <Link href='https://itch.io/jam/mini-jame-gam-7'>
                <a target='_blank' className='font-semibold hover:underline hover:cursor-pointer'>Mini Jame Gam #7,</a>
              </Link>
              &nbsp;with the theme, &quot;You Are the Enemy.&quot;
            </p>,
            <p className='leading-loose min:leading-relaxed mt-4 mobile:hidden' key='b'>
              The game is 3D, with 2D, paper-like graphics inspired by the <span className='italic'>Paper Mario</span> series. The goal is to
              jump around and knock stuff over, causing the guy to walk over and fix it. If you distract him for long enough, you can light the
              oven on fire to burn down the house. At first we were planning on making it a puzzle game, but eventually we settled on something
              more akin to <span className='italic'>Untitled Goose Game,</span> where the goal is basically just to cause havoc.
            </p>
          ]}
          isVideo={false}
          halfWidth={false}
          links={[
            { text: 'Play on Itch.io.', url: 'https://poke-bd.itch.io/cataclysm' },
            { text: 'View source on GitHub.', url: 'https://github.com/pokeblokdude/cat-game' }
          ]}
          bgDarkness={70}
        />

        <h1 className="text-2xl font-semibold w-[95%] self-center mt-10 mb-6">CS:GO Maps</h1>

        <div className="flex w-[95%] mobile:flex-col mobile:w-full mobile:items-center">
          <MediaItem 
            title='00. am_snowpoint'
            imageSrc='/bg/bg-snowpoint.jpg'
            imagePos='object-center'
            date='Jan. 2020.'
            description={[
              <p className="leading-loose min:leading-relaxed" key='a'>
                <span className="font-mono font-bold italic">am_snowpoint</span> is a 1v1 map meant to be used
                with splewis&apos; &quot;multi1v1&quot; server plugin. The map is named snowpoint after the city from&nbsp;
                <span className='italic'>Pokemon Diamond and Pearl</span>, which inspired the wintery research-site theme.
              </p>
            ]}
            isVideo={false}
            halfWidth={true}
            links={[
              { text: 'View on Steam Workshop.', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1980557586' }
            ]}
          />
          <MediaItem 
            title='01. de_salisbury'
            imageSrc='/bg/bg-salisbury.jpg'
            imagePos='object-center'
            date='Jan. 2020.'
            description={[
              <p className="leading-loose min:leading-relaxed" key='a'>
                  <span className='font-mono font-bold italic'>de_salisbury</span> is an unfinished map meant
                  for CS:GO&apos;s 2v2 &quot;Wingman&quot; mode, with one central bombsite. It&apos;s named after Salisbury, MA, a town
                  close to where I grew up. It also fits the coastal theme.
                </p>
            ]}
            isVideo={false}
            halfWidth={true}
            links={[
              { text: 'View on Steam Workshop.', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2016705263' }
            ]}
            bgDarkness={70}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Game
