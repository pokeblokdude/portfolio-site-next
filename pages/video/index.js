import ReactPlayer from "react-player/youtube"
import Modal from 'react-modal'
import React from 'react'
import Head from "next/head"
import Footer from "../../components/Footer"
import Link from "next/link"

const Video = () => {

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
        <title>Videos | Alex Howe</title>
      </Head>
      <div className="w-full max-w-[1366px] min-w-[1080px] flex flex-col mb-20">

        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Videos</h1>

        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full items-center">
            <h2 className="w-[95%] pl-1 mb-4 font-mono">00. Super Mario Galaxy - As Good as We Remember?</h2>
            <div 
              className='w-[95%] flex flex-col justify-center items-center bg-smg bg-cover bg-center h-[480px]'
            >
              <div
                className="w-full h-full bg-black/60 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-40 backdrop-blur"
                onClick={() => {
                  setVideoUrl('https://youtu.be/OSq1M7QD2wM');
                  setModalOpen(true);
                }}
              >
                <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Aug. 2021.</p>
                <p className="leading-loose">
                  <span className="font-mono font-bold italic">Super Mario Galaxy - As Good as We Remember? </span> 
                  is a long-form video essay reflecting on and analyzing my experience playing the 2007 Nintendo game,
                  <span className="italic"> Super Mario Galaxy.</span> It covers everything from level design to graphics, 
                  sound and gameplay.
                </p>
                <p className="leading-loose mt-4">
                  Intended for release on YouTube, I tried to switch up the &quot;internet video essay 
                  formula&quot; by incorporating cinematics captured using &nbsp;
                  <Link href='https://noclip.website'><a target='_blank' className="font-semibold hover:underline">noclip.website,</a></Link>
                  &nbsp;in addition to more traditional gameplay b-roll.
                </p>
                <p className="leading-loose mt-4">
                  The video&apos;s sountrack is comprised of music from the game.
                </p>
                <p className="text-sm text-neutral-400 font-mono mt-8">Click to view.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center mt-8">
            <h2 className="w-[95%] pl-1 mb-4 font-mono">01. CS:GO - Zeitgeist</h2>
            <div 
              className='w-[95%] flex flex-col justify-center items-center bg-csgo bg-cover bg-center h-[480px]'
            >
              <div
                className="w-full h-full bg-black/70 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-40 backdrop-blur"
                onClick={() => {
                  setVideoUrl('https://youtu.be/wuCA8XTfaSg');
                  setModalOpen(true);
                }}
              >
                <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Aug. 2018.</p>
                <p className="leading-loose">
                  <span className="font-mono font-bold italic">CS:GO - Zeitgeist </span>
                  is a frag movie I made using moments from me and my friends&apos; gameplay in Valve&apos;s tactical shooter,
                  <span className="italic"> Counter-Strike: Global Offensive. </span>
                  Footage was captured using the game&apos;s built-in &quot;demo&quot; replay system, as well as a third party tool
                  called Half-Life Advanced Effects for keyframing camera moves. I rebuilt stylized UI elements using Adobe After Effects.
                </p>
                <p className="leading-loose mt-4">
                  The music used is &quot;Zeitgeist&quot; by <span className="italic">Savant,</span> hence the title of the video.
                </p>
                <p className="text-sm text-neutral-400 font-mono mt-8">Click to view.</p>
              </div>
              
            </div>
          </div>
          <div className="flex flex-col w-full items-center mt-8">
            <h2 className="w-[95%] pl-1 mb-4 font-mono">02. Senior Class Trip to Puerto Rico</h2>
            <div 
              className='w-[95%] flex flex-col justify-center items-center bg-pr bg-cover bg-center h-[480px]'
            >
              <div
                className="w-full h-full bg-black/70 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-40 backdrop-blur"
                onClick={() => {
                  setVideoUrl('https://www.youtube.com/watch?v=b9i07oCLcPc');
                  setModalOpen(true);
                }}
              >
                <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Jun. 2018.</p>
                <p className="leading-loose">
                  <span className="font-mono font-bold italic">Senior Class Trip to Puerto Rico</span> is a vlog-style documentation
                  of my high school class&apos;s senior trip. We went to Puerto Rico in the wake of Hurricane Maria to help a local organiztion
                  in building sustainable shelter/school buildings and gardens out of recycled materials and bamboo.
                  
                </p>
                <p className="leading-loose mt-4">
                  I was filming throughout the trip, and edited all the footage down,
                  with the help of my good friend Harrison Tan, into this video. We used music that we listened to
                  during the trip, with tracks from <span className="italic">Blue Swede, Raspberries, Redbone, The Jackson 5, Limes </span>
                  and <span className="italic">Snarky Puppy.</span>
                </p>
                <p className="text-sm text-neutral-400 font-mono mt-8">Click to view.</p>
              </div>
              
            </div>
          </div>
          <div className="flex w-[95%] mt-8">
            <div className="flex flex-col w-1/2">
              <h2 className="w-full pl-1 mb-4 font-mono">03. Fear.</h2>
              <div className='w-full flex justify-center items-center bg-fear bg-cover bg-center h-[360px]'>
                <div
                  className="w-full h-full bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                    transition duration-300 py-20 px-20 backdrop-blur"
                  onClick={() => {
                    setVideoUrl('https://www.youtube.com/watch?v=gqf0c0gtD24');
                    setModalOpen(true);
                  }}
                >
                  <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Nov. 2021.</p>
                  <p className="leading-loose">
                    <span className="font-mono font-bold italic">Fear.</span> was a project for ART 374 - 
                    Intro Computer Animation at UMass Amherst. 
                    Using Autodesk Maya, the assignment was to pick one of four moods, and express it using
                    only lighting and composition.
                  </p>
                  <p className="text-sm text-neutral-400 font-mono mt-6">Click to view.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <h2 className="w-full pl-1 mb-4 font-mono">04. July 4th - Trip to Westport</h2>
              <div className='w-full flex justify-center items-center bg-westport bg-cover bg-center h-[360px]'>
                <div
                  className="w-full h-full bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                    transition duration-300 py-20 px-20 backdrop-blur"
                  onClick={() => {
                    setVideoUrl('https://www.youtube.com/watch?v=WfKDOfYlOGY');
                    setModalOpen(true);
                  }}
                >
                  <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Jul. 2021.</p>
                  <p className="leading-loose">
                    My girlfriend, my brother, his girlfriend and I took a trip to Westport, MA to visit 
                    family for the 4th of July. On the way home, we stopped at the beach during golden hour.
                    The video is set to music by <span className="italic">Kiefer.</span>
                  </p>
                  <p className="text-sm text-neutral-400 font-mono mt-6">Click to view.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[95%] mt-8">
            <div className="flex flex-col w-1/2">
              <h2 className="w-full pl-1 mb-4 font-mono">05. Adventure at Amethyst Brook</h2>
              <div className='w-full flex justify-center items-center bg-amethyst bg-cover bg-center h-[360px]'>
                <div
                  className="w-full h-full bg-black/60 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                    transition duration-300 py-20 px-20 backdrop-blur"
                  onClick={() => {
                    setVideoUrl('https://www.youtube.com/watch?v=VqklE9kNjbQ');
                    setModalOpen(true);
                  }}
                >
                  <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Feb. 2020.</p>
                  <p className="leading-loose">
                    My girlfriend and I took her dog, Nugget, for a walk at Amethyst Brook, a nature reserve in Amherst, MA.
                    The video is set to music from <span className="italic">The Legend of Zelda: Breath of the Wild.</span>
                  </p>
                  <p className="text-sm text-neutral-400 font-mono mt-8">Click to view.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <h2 className="w-full pl-1 mb-4 font-mono">06. Montage</h2>
              <div className='w-full flex justify-center items-center bg-montage bg-cover bg-center h-[360px]'>
                <div
                  className="w-full h-full bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                    transition duration-300 py-20 px-20 backdrop-blur"
                  onClick={() => {
                    setVideoUrl('https://www.youtube.com/watch?v=i-uUcVpfQXA');
                    setModalOpen(true);
                  }}
                >
                  <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Oct. 2018.</p>
                  <p className="leading-loose">
                    <span className="font-mono font-bold italic">Montage</span> was a project for VM120 - 
                    Foundations in Media Production at Emerson College. The assignment was to create a montage
                    using the various editing techniques we learned in class, using both original and stock footage.
                  </p>
                  <p className="text-sm text-neutral-400 font-mono mt-6">Click to view.</p>
                </div>
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
export default Video
