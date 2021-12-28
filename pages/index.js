import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import React from 'react'
import Modal from 'react-modal'
import ReactPlayer from 'react-player'

export default function Home() {
  
  const [ modalOpen, setModalOpen ] = React.useState(false);
  const [ videoUrl, setVideoUrl ] = React.useState('');

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <Head>
        <title>Alex Howe</title>
      </Head>
      <div className="flex w-full h-[273px] relative items-center">
          <Image src='/photo/moon.jpg' layout='fill' objectFit='cover' alt='Moon' quality={100}/>
      </div>
      <div className="w-full max-w-[1366px] min-w-[1080px] flex flex-col items-center mb-4">
        
        <h1 className="w-[95%] text-2xl font-semibold mt-6 mb-4">Recent Projects</h1>

        <div className="flex flex-col w-[95%] items-center">
          <h2 className="w-full pl-1 mb-4 font-mono">Super Mario Galaxy - As Good as We Remember?</h2>
          <div 
            className='w-full flex flex-col justify-center items-center h-[360px] relative'
          >
            <Image src='/bg/bg-smg.png' layout='fill' className='object-cover object-center pointer-events-none' alt=''/>
            <div
              className="w-full h-full bg-black/60 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                transition duration-300 py-16 px-40 backdrop-blur flex flex-col z-10"
              onClick={() => {
                setVideoUrl('https://youtu.be/OSq1M7QD2wM');
                setModalOpen(true);
              }}
            >
              <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Aug. 2021.</p>
              <p className="leading-relaxed max-w-[1366px] self-center">
                <span className="font-mono font-bold italic">Super Mario Galaxy - As Good as We Remember? </span> 
                is a long-form video essay reflecting on and analyzing my experience playing the 2007 Nintendo game,
                <span className="italic"> Super Mario Galaxy.</span> It covers everything from level design to graphics, 
                sound and gameplay.
              </p>
              <p className="leading-relaxed mt-2 max-w-[1366px] self-center">
                Intended for release on YouTube, I tried to switch up the &quot;internet video essay 
                formula&quot; by incorporating cinematics captured using&nbsp;
                <Link href='https://noclip.website'><a target='_blank' className="font-semibold hover:underline">noclip.website,</a></Link>
                &nbsp;in addition to more traditional gameplay b-roll.
              </p>
              <p className="leading-loose mt-2 max-w-[1366px] w-full self-center">
                The video&apos;s sountrack is comprised of music from the game.
              </p>
              <p className="text-sm text-neutral-400 font-mono mt-2 w-full max-w-[1366px] self-center">Click to view.</p>
            </div>
          </div>
        </div>
        <div className='flex w-[95%] mt-4'>
          <div className="flex flex-col w-1/2 items-center">
            <h2 className="w-full pl-1 mb-4 font-mono">UKG Job Referral Tool</h2>
            <div 
              className='w-full flex flex-col justify-center items-center h-[300px] relative'
            >
              <Image src='/bg/bg-ukg.PNG' layout='fill' className='object-cover object-top' alt=''/>
              <div
                className="w-full h-full bg-black/90 opacity-0 hover:opacity-100 hover:transition-all 
                  transition duration-300 py-16 px-20 backdrop-blur flex flex-col z-10"
              >
                <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Dec. 2021.</p>
                <p className="leading-relaxed w-full max-w-[600px] self-center">
                  <span className='font-mono font-bold italic'>Job Referral Tool</span> &nbsp;was a semester-long project
                  for CS320 - Software Engineering at UMass Amherst. Students were split into teams of 10, each tasked with
                  creating a prototype for an internal job referral app for the HR company, UKG.
                </p>
                <div className='mt-4 flex w-full max-w-[600px] self-center'>
                  <Link href='https://job-listing-tool-320.herokuapp.com'>
                    <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer">View Heroku deployment.</a>
                  </Link>
                  <Link href='https://github.com/elinottonson/job-listing-tool'>
                    <a target='_blank' className="text-sm text-neutral-400 font-mono ml-5 hover:underline hover:cursor-pointer">View source on GitHub.</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 items-center">
            <h2 className="w-full pl-1 mb-4 font-mono">Odyssey 2D</h2>
            <div 
              className='w-full flex flex-col justify-center items-center h-[300px] relative'
            >
              <Image src='/bg/bg-odyssey2d.jpg' layout='fill' className='object-cover object-bottom' alt=''/>
              <div
                className="w-full h-full bg-black/90 opacity-0 hover:opacity-100 hover:transition-all
                  transition duration-300 py-16 px-20 backdrop-blur z-10"
              >
                <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">2021.</p>
                <p className="leading-relaxed">
                  <span className='font-mono font-bold italic'>Odyssey 2D</span> &nbsp;is a 2D platformer with
                  acceleration-based movement. The player can walk, crouch, jump (variable height), 
                  wall-slide, wall-jump, ledge-grab and air-dive. All of this was implemented using a finite state machine.
                </p>
                <div className='mt-4 flex'>
                  <Link href='https://github.com/pokeblokdude/2d-game'>
                    <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer">View source on GitHub.</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col w-[95%] self-center mt-6'>
          <hr className='w-full border-dotted mb-2'></hr>
          <div className='flex justify-between'>
            <p className=''>Contact</p>
            <div className='flex w-2/5 justify-between'>
              <p className='font-mono font-light text-sm'>email: howie242000@gmail.com</p>
              <p className='font-mono font-light text-sm'>discord: Alex#5039</p>
            </div>
          </div>
        </div>

      </div>

      <Modal
        isOpen={modalOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'hsla(0, 0%, 0%, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: '20'
          },
          content: {
            padding: '0px',
            border: '1px solid hsl(0, 0%, 20%)',
            background: 'hsl(0, 0%, 5%)',
            top: '150px',
            bottom: '150px',
            left: '100px',
            right: '100px'
          }
        }}
      >
        <div className="w-full h-full">
          <ReactPlayer url={videoUrl} width='100%' height='100%' controls={true}/>
        </div>
      </Modal>
      <Footer sticky={true}/>
    </>
  )
}
