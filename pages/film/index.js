import ReactPlayer from "react-player/youtube"
import Modal from 'react-modal'
import React from 'react'
import Head from 'next/head'
import Image from "next/image"
import { MdFullscreen } from 'react-icons/md'
import Footer from "../../components/Footer"

const Film = () => {
  const [ modalOpen, setModalOpen ] = React.useState(false);
  const [ videoUrl, setVideoUrl ] = React.useState('');

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  Modal.setAppElement(':root');

  return (
    <>
      <Head>
        <title>Films | Alex Howe</title>
      </Head>
      <div className="w-full max-w-[1366px] min-w-[1080px] flex flex-col mb-20">

        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Films</h1>

        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full items-center">
            <h2 className="w-[95%] pl-1 mb-4 font-mono">00. The Machine</h2>
            <div 
              className='w-[95%] flex flex-col justify-center items-center h-[480px] relative'
            >
              <Image src='/bg/bg-the-machine.jpeg' layout='fill' className='object-cover object-center' alt='' loading='eager' priority={true} quality={100}/>
              <div
                className="w-full h-full flex flex-col bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-40 backdrop-blur z-10"
                onClick={() => {
                  setVideoUrl('https://www.youtube.com/watch?v=l0_MGz5IqvY');
                  setModalOpen(true);
                }}
              >
                <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Dec. 2018.</p>
                <p className="leading-loose"><span className="font-bold italic font-mono">The Machine</span> was my final project for 
                  VM120 - Foundations in Media Arts Production at Emerson College. 
                  It&apos;s a psychological-horror-themed short film about a young man coming to terms with the future, 
                  inspired by some of the darker episodes of 
                  <span className="italic"> Doctor Who</span> and <span className="italic">Black Mirror.</span>
                </p>
                <p className="leading-loose mt-8">
                  I wrote, directed, shot and edited the film. It was written over Thanksgiving break and shot at 
                  my house the next weekend. The music is by my good friend, Caleb Kennedy.
                </p>
                
                <p className="text-sm text-neutral-400 font-mono mt-10">Click to view.</p>
              </div>
              
            </div>
          </div>
          <div className="flex w-[95%] mt-8">
            <div className="w-1/2 flex flex-col">
              <h2 className="w-full pl-1 mb-4 font-mono">01. Global Singularity Project</h2>
              <div className='full flex justify-center items-center h-[360px] relative'>
                <Image src='/bg/bg-gsp.jpeg' layout='fill' className='object-cover object-center' alt='' loading='eager' priority={true} quality={100}/>
                <div
                  className="w-full h-full bg-black/60 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                    transition duration-300 py-20 px-20 narrow:py-16 backdrop-blur z-10"
                  onClick={() => {
                    setVideoUrl('https://www.youtube.com/watch?v=GzvWQ_fnKt0');
                    setModalOpen(true);
                  }}  
                >
                  <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Apr. 2018.</p>
                  <p className="leading-loose">
                    <span className="font-mono font-bold italic">G.S.P.</span> 
                    &nbsp;was a short film I did for my high school senior project, inspired primarily by 
                    Denis Villenueve&apos;s <span className="italic">Blade Runner 2049. G.S.P.</span> was my first short film;
                    I wrote, directed, shot and edited it. The music is by Caleb Kennedy.
                  </p>
                  <p className="text-sm text-neutral-400 font-mono mt-6">Click to view.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <h2 className="w-full pl-1 mb-4 font-mono">02. A Time-Lapse Journey through 2016</h2>
              <div className='w-full flex justify-center items-center h-[360px] relative'>
                <Image src='/bg/bg-timelapse.jpeg' layout='fill' className='object-cover object-center' alt='' loading='eager' priority={true} quality={100}/>
                <div
                  className="w-full h-full bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                    transition duration-300 py-20 px-20 narrow:py-16 backdrop-blur z-10"
                  onClick={() => {
                    setVideoUrl('https://www.youtube.com/watch?v=RWq_bcAp9As');
                    setModalOpen(true);
                  }}
                >
                  <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Jan. 2017.</p>
                  <p className="leading-loose">
                    <span className="font-mono font-bold italic">A Time-Lapse Journey through 2016 </span>was the 
                    project that got me into film. Using my first DSLR camera, I shot various landscapes around my home
                    in western Massachusetts. The film is set to music from C418&apos;s <span className="italic">Minecraft - Volume Beta.</span>
                  </p>
                  <p className="text-sm text-neutral-400 font-mono mt-6">Click to view.</p>
                </div>
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

      </div>
      <Footer sticky={true}/>
    </>
  )
}

export default Film
