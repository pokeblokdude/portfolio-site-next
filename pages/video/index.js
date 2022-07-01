import ReactPlayer from "react-player/youtube"
import Modal from 'react-modal'
import React from 'react'
import Head from "next/head"
import Image from "next/image"
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
        <title>Film & Video | Alex Howe</title>
      </Head>
      <div className="w-full max-w-[1366px] flex flex-col mb-20">

      <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Films</h1>

      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full items-center">
          <h2 className="w-[95%] pl-1 mb-4 font-mono">00. Cordelia Lear</h2>
          <div 
            className='w-[95%] flex flex-col justify-center items-center h-[480px] relative'
          >
            <Image src='/bg/bg-cordelia.jpeg' layout='fill' className='object-cover object-center' alt='' loading='eager' priority={true} quality={100}/>
            <div
              className="w-full h-full flex flex-col bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                transition duration-300 py-20 px-40 backdrop-blur z-10"
              onClick={() => {
                setVideoUrl('https://youtu.be/4PQoo0MQVQA');
                setModalOpen(true);
              }}
            >
              <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">May. 2022.</p>
              <p className="leading-loose"><span className="font-bold italic font-mono">Cordelia Lear</span> is a short film production 
                of a play written by Smith College professor Len Berkman. It was directed by actor and Smith grad student, James Barry.
                The play is essentially one long monologue, set inside of William Shakespeare&apos;s  
                <span className="italic"> King Lear,</span> following the musings and inner journey of Cordelia Lear, the daughter of the
                aforementioned King.
              </p>
              <p className="leading-loose mt-6">
                I was the cinematographer, lighting and shooting the film alongside my friend, Harrison Tan. I also edited, color graded, and did sound editing & mixing.
                The music is by my friend, Caleb Kennedy, and the flipbook animation was made by my girlfriend, Janna Gilleman.
              </p>
              
              <p className="text-sm text-neutral-400 font-mono mt-10">Click to view.</p>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col w-full items-center mt-8">
          <h2 className="w-[95%] pl-1 mb-4 font-mono">01. The Machine</h2>
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
              <p className="leading-loose mt-6">
                I wrote, directed, shot and edited the film. It was written over Thanksgiving break and shot at 
                my house the next weekend. The music is by my good friend, Caleb Kennedy.
              </p>
              
              <p className="text-sm text-neutral-400 font-mono mt-10">Click to view.</p>
            </div>
            
          </div>
        </div>
        <div className="flex w-[95%] mt-8">
          <div className="w-1/2 flex flex-col">
            <h2 className="w-full pl-1 mb-4 font-mono">02. Global Singularity Project</h2>
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
            <h2 className="w-full pl-1 mb-4 font-mono">03. A Time-Lapse Journey through 2016</h2>
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
                <p className="text-sm text-neutral-400 font-mono mt-4">Click to view.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Videos</h1>

      <div className="flex flex-col items-center">

        <div className="flex flex-col w-full items-center">
          <h2 className="w-[95%] pl-1 mb-4 font-mono">00. Super Mario Galaxy 2 - Nintendo&apos;s Line in the Sand</h2>
          <div 
            className='w-[95%] flex flex-col justify-center items-center h-[480px] relative'
          >
            <Image src='/bg/bg-smg2.png' layout='fill' className='object-cover object-center' alt='' loading='eager' priority={true} quality={100}/>
            <div
              className="w-full h-full bg-black/60 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                transition duration-300 py-20 px-40 backdrop-blur z-10"
              onClick={() => {
                setVideoUrl('https://youtu.be/6hVOmstk7qs');
                setModalOpen(true);
              }}
            >
              <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Jan. 2022.</p>
              <p className="leading-loose min:leading-relaxed">
                <span className="font-mono font-bold italic">Super Mario Galaxy 2 - Nintendo&apos;s Line in the Sand </span> 
                is a follow-up to my previous video, <span className="italic">Super Mario Galaxy - As Good as We Remember?</span>
                &nbsp;This time I cover the game&apos;s sequel, <span className="italic"> Super Mario Galaxy 2,</span> and how it
                compares to the 2007 original, in terms of graphics, gameplay, music, etc. 
              </p>
              <p className="leading-loose min:leading-relaxed mt-4">
                I tried to keep this video tighter and more focused than the first, not going quite as in-depth on every
                minute detail, but rather grouping together more &quot;big-picture&quot; ideas to give more of an overview
                of my thoughts throughout the whole video, rather than just at the end.
              </p>
              <p className="leading-loose mt-4">
                I again used <Link href='https://noclip.website'><a target='_blank' className="font-semibold hover:underline">noclip.website</a></Link>
                &nbsp;to capture cinematics, and the video&apos;s sountrack is again comprised of music from the game.
              </p>
              <p className="text-sm text-neutral-400 font-mono mt-6">Click to view.</p>
            </div>
          </div>
        </div>

        <div className="flex w-[95%] mt-8">
          <div className="flex flex-col w-1/2">
            <h2 className="w-full pl-1 mb-4 font-mono">01. Williams & Zimmer - A Story of Film Music</h2>
            <div className='w-full flex justify-center items-center h-[360px] relative'>
              <Image src='/bg/bg-wz.png' layout='fill' className='object-cover object-center' alt='' quality={100} loading='eager'/>
              <div
                className="w-full h-full bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-20 backdrop-blur z-10"
                onClick={() => {
                  setVideoUrl('https://youtu.be/d1epfuMQaio');
                  setModalOpen(true);
                }}
              >
                <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Jul. 2022.</p>
                <p className="leading-relaxed min:leading-normal">
                  <span className="font-mono font-bold italic">Williams & Zimmer - A Story of Film Music</span> was a project for FILM-ST - 
                  Music, Culture and the Moving Image at UMass Amherst. 
                  It&apos;s a video essay covering a bit of the history of film music, and compares the music of the two most influential composers, John Williams
                  and Hans Zimmer.
                </p>
                <p className="text-sm text-neutral-400 font-mono mt-6">Click to view.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <h2 className="w-full pl-1 mb-4 font-mono">02. Super Mario Galaxy - As Good as We Remember?</h2>
            <div className='w-full flex justify-center items-center h-[360px] relative'>
              <Image src='/bg/bg-smg.png' layout='fill' className='object-cover object-right' alt='' quality={100} loading='eager'/>
              <div
                className="w-full h-full bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-20 backdrop-blur z-10"
                onClick={() => {
                  setVideoUrl('https://youtu.be/OSq1M7QD2wM');
                  setModalOpen(true);
                }}
              >
                <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Aug. 2021.</p>
                <p className="leading-relaxed min:leading-normal">
                  <span className="font-mono font-bold italic">Super Mario Galaxy - As Good as We Remember? </span> 
                  is a long-form video essay reflecting on the 2007 Nintendo game,
                  <span className="italic"> Super Mario Galaxy.</span> It covers everything from level design to graphics, 
                  sound and gameplay.
                </p>
                <p className="leading-loose mt-1">
                  The video&apos;s sountrack is comprised of music from the game.
                </p>
                <p className="text-sm text-neutral-400 font-mono mt-4">Click to view.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-center mt-8">
          <h2 className="w-[95%] pl-1 mb-4 font-mono">03. CS:GO - Zeitgeist</h2>
          <div 
            className='w-[95%] flex flex-col justify-center items-center h-[480px] relative'
          >
            <Image src='/bg/bg-csgo.png' layout='fill' className='object-cover object-center' alt='' loading='eager' priority={true} quality={100}/>
            <div
              className="w-full h-full bg-black/70 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                transition duration-300 py-20 px-40 backdrop-blur z-10"
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

        <div className="flex w-[95%] mt-8">
          <div className="flex flex-col w-1/2">
            <h2 className="w-full pl-1 mb-4 font-mono">04. Fear.</h2>
            <div className='w-full flex justify-center items-center h-[360px] relative'>
              <Image src='/bg/bg-fear.png' layout='fill' className='object-cover object-center' alt='' quality={100} loading='eager'/>
              <div
                className="w-full h-full bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-20 backdrop-blur z-10"
                onClick={() => {
                  setVideoUrl('https://www.youtube.com/watch?v=gqf0c0gtD24');
                  setModalOpen(true);
                }}
              >
                <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Nov. 2021.</p>
                <p className="leading-loose min:leading-relaxed">
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
            <h2 className="w-full pl-1 mb-4 font-mono">05. July 4th - Trip to Westport</h2>
            <div className='w-full flex justify-center items-center h-[360px] relative'>
              <Image src='/bg/bg-westport.png' layout='fill' className='object-cover object-center' alt='' quality={100} loading='eager'/>
              <div
                className="w-full h-full bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-20 backdrop-blur z-10"
                onClick={() => {
                  setVideoUrl('https://www.youtube.com/watch?v=WfKDOfYlOGY');
                  setModalOpen(true);
                }}
              >
                <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">Jul. 2021.</p>
                <p className="leading-loose min:leading-relaxed">
                  My girlfriend, my brother, his girlfriend and I took a trip to Westport, MA to visit 
                  family for the 4th of July. On the way home, we stopped at the beach during golden hour.
                  The video is set to music by <span className="italic">Kiefer.</span>
                </p>
                <p className="text-sm text-neutral-400 font-mono mt-6">Click to view.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-center mt-8">
          <h2 className="w-[95%] pl-1 mb-4 font-mono">06. Senior Class Trip to Puerto Rico</h2>
          <div 
            className='w-[95%] flex flex-col justify-center items-center h-[480px] relative'
          >
            <Image src='/bg/bg-pr.jpg' layout='fill' className='object-cover object-center' alt='' quality={100} loading='eager'/>
            <div
              className="w-full h-full bg-black/70 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                transition duration-300 py-20 px-40 backdrop-blur z-10"
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
            <h2 className="w-full pl-1 mb-4 font-mono">07. Adventure at Amethyst Brook</h2>
            <div className='w-full flex justify-center items-center h-[360px] relative'>
              <Image src='/bg/bg-amethyst.png' layout='fill' className='object-cover object-center' alt='' quality={100} loading='eager'/>
              <div
                className="w-full h-full bg-black/60 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-20 backdrop-blur z-10"
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
            <h2 className="w-full pl-1 mb-4 font-mono">08. Montage</h2>
            <div className='w-full flex justify-center items-center h-[360px] relative'>
              <Image src='/bg/bg-montage.png' layout='fill' className='object-cover object-left' alt='' quality={100} loading='eager'/>
              <div
                className="w-full h-full bg-black/50 opacity-0 hover:cursor-pointer hover:opacity-100 hover:transition-all 
                  transition duration-300 py-20 px-20 narrow:py-16 backdrop-blur z-10"
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
      <Footer />
    </>
  )
}
export default Video
