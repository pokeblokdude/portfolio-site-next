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
        <h1 className="text-2xl font-semibold w-[95%] self-center mt-10 mb-6">Game Prototypes</h1>
        
        <div className="flex flex-col w-full items-center">
          <h2 className="w-[95%] pl-1 mb-4 font-mono">00. &quot;Odyssey 2D&quot;</h2>
          <div 
            className='w-[95%] flex flex-col justify-center items-center h-[540px] relative'
          >
            <Image src='/bg/bg-odyssey2d.jpg' layout='fill' className='object-cover object-bottom' alt='' priority={true} loading='eager' quality={100}/>
            <div
              className="w-full h-full bg-black/90 opacity-0 hover:opacity-100 hover:transition-all 
                transition duration-300 py-20 px-40 narrow:px-28 backdrop-blur z-10"
            >
              <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">2021.</p>
              <p className="leading-loose min:leading-relaxed">
                <span className='font-mono font-bold italic'>Odyssey 2D</span> &nbsp;is a 2D platformer with
                acceleration-based movement. The original idea was to try and remake the base movement mechanics 
                from <span className='italic'> Super Mario Odyssey</span> in a 2D environment, hence the name.
                I also wanted to capture the &quot;weighty&quot; feel of the 3D Mario games, especially 
                <span className='italic'> Super Mario 64.</span>
                &nbsp;The player can walk, crouch, jump (variable height), wall-slide, wall-jump, ledge-grab and air-dive.
                All of this was implemented using a finite state machine for the player script.
              </p>
              <p className='leading-loose min:leading-relaxed mt-4'>
                All of the pixel art and animations are original, created using Aseprite. I&apos;ve toyed around a 
                lot with 2D/3D pixel art styles, similar to&nbsp;
                <Link href='https://www.youtube.com/watch?v=ZsMHY4LDyRE'>
                  <a target='_blank' className='font-semibold hover:underline hover:cursor-pointer'>this prototype by &apos;t3ssel8r&apos;.</a>
                </Link>
                &nbsp;For now I&apos;ve stuck with 2D until I learn more about graphics and shaders.
              </p>
              <p className='leading-loose min:leading-relaxed mt-4'>
                It also remains to be seen whether this ends up being a level-based game like Mario or Celeste, or more of a metroidvania
                type of thing that&apos;s more story-driven, assuming I continue working on it.
              </p>
              <div className='mt-8 flex'>
                <Link href='https://github.com/pokeblokdude/2d-game'>
                  <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer">View source on GitHub.</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center mt-10">
          <h2 className="w-[95%] pl-1 mb-4 font-mono">01. Golf Game</h2>
          <div 
            className='w-[95%] flex flex-col justify-center items-center h-[540px] relative'
          >
            <Image src='/bg/bg-golf.jpg' layout='fill' className='object-cover object-center' alt='' priority={true} loading='eager' quality={100}/>
            <div
              className="w-full h-full bg-black/80 opacity-0 hover:opacity-100 hover:transition-all 
                transition duration-300 py-20 px-40 backdrop-blur z-10"
            >
              <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">2021.</p>
              <p className="leading-loose">
                <span className='font-mono font-bold italic'>Golf Game</span> &nbsp;is a prototype 
                isometric mini-golf game inspired by <span className='italic'>Golf with your Friends.</span>
                &nbsp; My goal for the visual style was to recreate the look of <span className='italic'>Monument Valley</span>;
                it definitely needs some work. The camera can rotate 90 degrees at a time in either direction, and the player can aim using
                a mouse. The terrain is currently built out of &quot;prefab&quot; pieces I made in Blender, which get
                combined into a single mesh. The game uses Unity&apos;s built-in physics system for movement and collision.
              </p>
              <p className='leading-loose mt-4'>
                My ideas for the future of this game, after I finish the base mechanics, are to implement multiplayer,
                as well as a grid-based level editor for making custom levels.
              </p>
              <div className='mt-8 flex'>
                <Link href='https://github.com/pokeblokdude/golf-game'>
                  <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer">View source on GitHub.</a>
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
