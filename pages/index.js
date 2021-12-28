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
      <div className="flex w-full h-[256px] relative items-center">
          <Image src='/photo/moon.jpg' layout='fill' objectFit='cover' alt='Moon' quality={100}/>
      </div>
      <div className="w-full max-w-[1366px] min-w-[1080px] flex flex-col items-center mb-10">
        
        <h1 className="text-2xl font-semibold mt-8 mb-4">Recent Projects</h1>

        <div className="flex flex-col w-[95%] items-center">
          <h2 className="w-full pl-1 mb-4 font-mono">Super Mario Galaxy - As Good as We Remember?</h2>
          <div 
            className='w-full flex flex-col justify-center items-center bg-smg bg-cover bg-center h-[360px]'
          >
            <div
              className="w-full h-full bg-black/60 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                transition duration-300 py-20 px-40 backdrop-blur flex flex-col"
              onClick={() => {
                setVideoUrl('https://youtu.be/OSq1M7QD2wM');
                setModalOpen(true);
              }}
            >
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
              className='w-full flex flex-col justify-center items-center bg-ukg bg-cover bg-top h-[300px]'
            >
              <div
                className="w-full h-full bg-black/90 opacity-0 hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-20 backdrop-blur flex flex-col"
              >
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
          <div className="flex w-1/2 h-[300px] relative items-center">
            <Image src='/photo/moon.jpg' layout='fill' objectFit='cover' alt='Moon'/>
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
            backdropFilter: 'blur(4px)'
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
      <Footer sticky={false}/>
    </>
  )
}
