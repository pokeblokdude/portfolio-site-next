import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import React from 'react'
import Modal from 'react-modal'
import ReactPlayer from 'react-player'

import {
  MdArrowBackIosNew,
  MdArrowForwardIos
} from 'react-icons/md'

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
      <div className="w-full max-w-[1366px] flex flex-col items-center mb-4">
        
        <div className='w-[95%] flex justify-between mobile:flex-col mobile:items-center'>

          <div className='w-[48%] h-full items-center flex flex-col mobile:w-[95%]'>
            <h1 className='w-[95%] text-2xl font-semibold mt-6 mb-4'>Bio</h1>
            <div className='w-[90%] flex flex-col justify-center items-center h-[500px] relative ml-2 mobile:h-[700px] mobile:w-[90%] mobile:ml-0'>
              <Image src='/me.jpg' layout='fill' className='object-cover object-top' alt='' priority={true} loading='eager' quality={100}/>
            </div>
            <h2 className="w-[90%] pl-1 mt-2 font-mono text-sm text-neutral-400">Me, playing disc golf</h2>
            <div className='flex flex-col ml-1 w-[90%]'>
              <p className='mt-4 leading-relaxed min:leading-relaxed w-[95%]'>
                Hi there! My name is Alex Howe. I&apos;m a filmmaker and game developer living in western Massachusetts,
                currently attending UMass Amherst for a degree in Computer Science and Film Studies.
              </p>
              <p className='mt-2 leading-relaxed min:leading-relaxed w-[95%]'>
                In my free time, I make videos on YouTube, work on games and film ideas, and play video games.
              </p>
            </div>
          </div>

          <hr className='border-dotted mt-8 w-[95%] desktop:hidden'></hr>

          <div className='w-1/2 flex flex-col mobile:w-[95%]'>

            <h1 className="w-[95%] text-2xl font-semibold mt-6 mb-4">Recent Projects</h1>

            <div className="flex flex-col w-full items-center">
              <h2 className="w-full pl-1 mb-4 font-mono">Passing By (Official Music Video)</h2>
              <div 
                className='w-full flex flex-col justify-center items-center h-[300px] relative'
              >
                <Image src='/bg/bg-gruff.png' layout='fill' className='object-cover object-center' alt='' priority={true} loading='eager' quality={100}/>
                <div
                    className="w-full h-full bg-black/60 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                      transition duration-300 py-16 px-20 backdrop-blur z-10"
                    onClick={() => {
                      setVideoUrl('https://youtu.be/TiyuKP6-zzI');
                      setModalOpen(true);
                    }}
                  >
                  <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Jul. 2022.</p>
                  <p className="leading-loose min:leading-relaxed">
                    <span className='font-mono font-bold italic'>Passing By </span> is a music video I shot for my friend Gruff Davies, 
                    AKA, <span className="italic">Suncaster.</span> I went for kind 
                    of a retro vibe with the 4:3 aspect ratio and heavy film grain and glow.
                  </p>
                  <p className="text-sm text-neutral-400 font-mono mt-4">Click to view.</p>
                </div>
              </div>
            </div>

            <div className='flex w-full mt-4'>
              <div className="flex flex-col w-full items-center">
                <h2 className="w-full pl-1 mb-4 font-mono">Williams & Zimmer</h2>
                <div 
                  className='w-full flex flex-col justify-center items-center h-[300px] relative'
                >
                  <Image src='/bg/bg-wz.png' layout='fill' className='object-cover object-center' alt='' loading='eager' priority={true} quality={100}/>
                  <div
                    className="w-full h-full bg-black/60 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                      transition duration-300 py-16 px-20 backdrop-blur z-10"
                    onClick={() => {
                      setVideoUrl('https://youtu.be/d1epfuMQaio');
                      setModalOpen(true);
                    }}
                  >
                    <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Jun. 2022.</p>
                    <p className="leading-relaxed min:leading-relaxed">
                      <span className="font-mono font-bold italic">Williams & Zimmer </span> 
                      was a project for FILM-ST 360 - Music, Culture and the Moving Image at UMass Amherst.
                      It&apos;s a video essay covering a bit of the history of film music, and compares the music of the two most influential composers, John Williams
                      and Hans Zimmer.
                    </p>
                    <p className="text-sm text-neutral-400 font-mono mt-4">Click to view.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className='flex flex-col w-[95%] self-center mt-10 mb-8'>
          <hr className='w-full border-dotted mb-2'></hr>
          <div className='flex justify-between mobile:flex-col'>
            <p className=''>Contact</p>
            <div className='flex w-2/5 min:w-1/2 justify-between mobile:flex-col mobile:w-full'>
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
            //top: '150px',
            bottom: '150px',
            //left: '100px',
            right: '100px',
            height: 'fit-content',
            maxWidth: '1920px',
            minWidth: '900px',
            left: '40%',
            top: '50%',
            transform: 'translate(-32%, -50%)'
          }
        }}
      >
        <div className="aspect-video">
          <ReactPlayer url={videoUrl} width='100%' height='100%' controls={true}/>
        </div>
      </Modal>
      <Footer/>
    </>
  )
}
