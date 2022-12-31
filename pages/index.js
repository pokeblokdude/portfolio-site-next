import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import React from 'react'
import Modal from 'react-modal'
import ReactPlayer from 'react-player'
import MediaItem from '../components/MediaItem'

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
            <h2 className="w-[90%] pl-1 mt-2 font-mono text-sm text-neutral-400">Me, playing disc golf :)</h2>
            <div className='flex flex-col ml-1 w-[90%]'>
              <p className='mt-4 leading-relaxed min:leading-relaxed w-[95%]'>
                Hi there! My name is Alex Howe. I&apos;m a filmmaker and hobbyist game developer living in western Massachusetts.
                I recently graduated from UMass Amherst with a degree in Computer Science and Film Studies.
              </p>
              <p className='mt-2 leading-relaxed min:leading-relaxed w-[95%]'>
                In my free time, I make videos on YouTube, work on games and film ideas, and play video games.
              </p>
            </div>
          </div>

          <hr className='border-dotted mt-8 w-[95%] desktop:hidden'></hr>

          <div className='w-1/2 flex flex-col mobile:w-[95%]'>

            <h1 className="w-[95%] text-2xl font-semibold mt-6 mb-4">Recent Projects</h1>

            <MediaItem 
              title='Descent'
              imageSrc='/bg/bg-descent.png'
              imagePos='object-center'
              date='Dec. 2022.'
              description={[
                <p className="leading-relaxed" key='a'>
                  <span className="font-bold italic font-mono">Descent</span> is a short film about self-reflection, introspection, and
                  how it can spiral endlessly. It was my final project for COMM 441 - Intermediate Digital Filmmaking at UMass Amherst.
                  I ended up doing my own music for the first time; I think it turned out really well.
                </p>
              ]}
              videoUrl='https://youtu.be/Jkmh4wZ8KXU'
              isVideo={true}
              halfWidth={false}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
              bgDarkness={70}
              frontPage={true}
            />

            <MediaItem 
              title='Breakout! for Arduino'
              imageSrc='/bg/bg-breakout.jpg'
              imagePos='object-center'
              date='Dec. 2022.'
              description={[
                <p className="leading-relaxed" key='a'>
                  <span className='font-mono font-bold italic'>Breakout!</span> &nbsp;was my semester-long project
                  for CS335 - Inside the Box at UMass Amherst. My original plan was to make a simple 3D renderer, but
                  the LCD I had was too slow. Thus, I decided to make a <span className='italic'>Breakout</span> clone
                  instead.
                </p>
              ]}
              isVideo={false}
              halfWidth={false}
              links={[
                { text: 'View source on GitHub.', url: 'https://github.com/pokeblokdude/cs335-breakout-project' }
              ]}
              bgDarkness={70}
              frontPage={true}
            />

          </div>
        </div>
        
        <div className='flex flex-col w-[95%] self-center mt-2 mb-8'>
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
