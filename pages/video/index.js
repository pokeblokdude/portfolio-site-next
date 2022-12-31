import ReactPlayer from "react-player/youtube"
import Modal from 'react-modal'
import React from 'react'
import Head from "next/head"
import Image from "next/image"
import Footer from "../../components/Footer"
import Link from "next/link"
import MediaItem from "../../components/MediaItem"

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

      <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Reel</h1>

      <div className="w-[95%] aspect-video self-center mb-8">
        <ReactPlayer url='https://youtu.be/vifiwWY8VtY' width='100%' height='100%' controls={true}/>
      </div>
{/* ============================================== FILMS ================================================================================= */}
        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Films</h1>

        <div className="flex flex-col items-center">

          <MediaItem 
            title='00. Descent'
            imageSrc='/bg/bg-descent.png'
            imagePos='object-center'
            date='Dec. 2022.'
            description={[
              <p className="leading-loose" key='a'>
                <span className="font-bold italic font-mono">Descent</span> is a short film about self-reflection, introspection, and
                how it can spiral endlessly. It was my final project for COMM 441 - Intermediate Digital Filmmaking at UMass Amherst.
              </p>,
              <p className="leading-loose mt-4" key='b'>
                I directed, shot and edited the film; there wasn&apos;t really a script, just an outline. I also color graded, did the audio, and additionally 
                ended up doing my own music for the first time;
                I think it turned out really well. I&apos;m partiucularly proud of the plucking/bubbling sound. The interiors were shot at Smith College.
              </p>
            ]}
            videoUrl='https://youtu.be/Jkmh4wZ8KXU'
            isVideo={true}
            halfWidth={false}
            setVideoUrl={setVideoUrl}
            setModalOpen={setModalOpen}
            bgDarkness={70}
          />

          <div className="flex w-[95%]">
            <MediaItem 
              title='01. Transmission'
              imageSrc='/bg/bg-transmission.jpeg'
              imagePos='object-center'
              date='Oct. 2022.'
              description={[
                <p className="leading-relaxed" key='a'>
                  <span className="font-bold italic font-mono">Transmission</span> is a short film about the omnipresence of technology.
                  &nbsp;It was a project for the &apos;experimental narrative&apos; module of my experimental film class. 
                </p>,
                <p className="leading-relaxed mt-4" key='b'>
                  I directed, shot and edited the film. I also did the color grading and audio editing.
                </p>
              ]}
              videoUrl='https://youtu.be/Q3yr8nJDPYE'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />

            <MediaItem 
              title='02. Cordelia Lear'
              imageSrc='/bg/bg-cordelia.jpeg'
              imagePos='object-center'
              date='May. 2022.'
              description={[
                <p className="leading-relaxed" key='a'><span className="font-bold italic font-mono">Cordelia Lear</span> is a short film production 
                  of a play written by Smith College professor Len Berkman. The monologue is set inside of William Shakespeare&apos;s  
                  <span className="italic"> King Lear,</span> following the inner journey of the king&apos;s daughter, Cordelia.
                </p>,
                <p className="leading-relaxed mt-2" key='b'>
                  I was co-cinematographer alongside my friend, Harrison Tan. I also edited, color graded, and did sound editing.
                </p>
              ]}
              videoUrl='https://youtu.be/4PQoo0MQVQA'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
          </div>

          <MediaItem 
            title='03. The Machine'
            imageSrc='/bg/bg-the-machine.jpeg'
            imagePos='object-center'
            date='Dec. 2018.'
            description={[
              <p className="leading-loose" key='a'><span className="font-bold italic font-mono">The Machine</span> was my final project for 
                VM120 - Foundations in Media Arts Production at Emerson College. 
                It&apos;s a psychological-horror-themed short film about a young man coming to terms with the future, 
                inspired by some of the darker episodes of 
                <span className="italic"> Doctor Who</span> and <span className="italic">Black Mirror.</span>
              </p>,
              <p className="leading-loose mt-4" key='b'>
                I wrote, directed, shot and edited the film. It was written over Thanksgiving break and shot at 
                my house the next weekend. The music is by my good friend, Caleb Kennedy.
              </p>
            ]}
            videoUrl='https://www.youtube.com/watch?v=l0_MGz5IqvY'
            isVideo={true}
            halfWidth={false}
            setVideoUrl={setVideoUrl}
            setModalOpen={setModalOpen}
          />

          <div className="flex w-[95%]">
            <MediaItem 
              title='04. Global Singularity Project'
              imageSrc='/bg/bg-gsp.jpeg'
              imagePos='object-center'
              date='Apr. 2018.'
              description={[
                <p className="leading-loose" key='a'>
                  <span className="font-mono font-bold italic">G.S.P.</span> 
                  &nbsp;was a short film I did for my high school senior project, inspired primarily by 
                  Denis Villenueve&apos;s <span className="italic">Blade Runner 2049. G.S.P.</span> was my first short film;
                  I wrote, directed, shot and edited it. The music is by Caleb Kennedy.
                </p>
              ]}
              videoUrl='https://www.youtube.com/watch?v=GzvWQ_fnKt0'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
            <MediaItem 
              title='04. A Time-Lapse Journey through 2016'
              imageSrc='/bg/bg-timelapse.jpeg'
              imagePos='object-center'
              date='Jan. 2017.'
              description={[
                <p className="leading-loose" key='a'>
                  <span className="font-mono font-bold italic">A Time-Lapse Journey through 2016 </span>was the 
                  project that got me into film. Using my first DSLR camera, I shot various landscapes around my home
                  in western Massachusetts. The film is set to music from C418&apos;s <span className="italic">Minecraft - Volume Beta.</span>
                </p>
              ]}
              videoUrl='https://www.youtube.com/watch?v=RWq_bcAp9As'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
          </div>
        </div>

{/* ============================================== VIDEOS ================================================================================= */}
        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Videos</h1>

        <div className="flex flex-col items-center">

          <MediaItem 
            title='00. Passing By (Official Music Video)'
            imageSrc='/bg/bg-gruff.png'
            imagePos='object-center'
            date='Jul. 2022.'
            description={[
              <p className="leading-loose min:leading-relaxed" key='a'>
                <span className="font-mono font-bold italic">Passing By </span> 
                is a music video I shot for my friend Gruff Davies, who wrote and performed the song under his
                artist name, <span className="italic">Suncaster.</span> Most footage in the video was shot at various locations 
                around our home in western Massachusetts, with a few stock clips for the greenscreen section.
              </p>,
              <p className="leading-loose min:leading-relaxed mt-4" key='b'>
                I directed, shot, edited, and color graded the video. I was going for kind of a retro vibe with the 
                4:3 aspect ratio and heavy film grain and glow. Personally I think it looks really good.
              </p>
            ]}
            videoUrl='https://youtu.be/TiyuKP6-zzI'
            isVideo={true}
            halfWidth={false}
            setVideoUrl={setVideoUrl}
            setModalOpen={setModalOpen}
          />

          <MediaItem 
            title='01. Super Mario Galaxy 2 - Nintendo&apos;s Line in the Sand'
            imageSrc='/bg/bg-smg2.png'
            imagePos='object-center'
            date='Jul. 2022.'
            description={[
              <p className="leading-loose min:leading-relaxed" key='a'>
                <span className="font-mono font-bold italic">Super Mario Galaxy 2 - Nintendo&apos;s Line in the Sand </span> 
                is a follow-up to my previous video, <span className="italic">Super Mario Galaxy - As Good as We Remember?</span>
                &nbsp;This time I cover the game&apos;s sequel, <span className="italic"> Super Mario Galaxy 2,</span> and how it
                compares to the 2007 original, in terms of graphics, gameplay, music, etc. 
              </p>,
              <p className="leading-loose min:leading-relaxed mt-4" key='b'>
                I tried to keep this video tighter and more focused than the first, not going quite as in-depth on every
                minute detail, but rather grouping together more &quot;big-picture&quot; ideas to give more of an overview
                of my thoughts throughout the whole video, rather than just at the end.
              </p>,
              <p className="leading-loose mt-4" key='c'>
                I again used <Link href='https://noclip.website'><a target='_blank' className="font-semibold hover:underline">noclip.website</a></Link>
                &nbsp;to capture cinematics, and the video&apos;s sountrack is again comprised of music from the game.
              </p>
            ]}
            videoUrl='https://youtu.be/6hVOmstk7qs'
            isVideo={true}
            halfWidth={false}
            setVideoUrl={setVideoUrl}
            setModalOpen={setModalOpen}
          />

          <div className="flex w-[95%]">
            <MediaItem 
              title='02. Williams & Zimmer - The Story of Modern Film Music'
              imageSrc='/bg/bg-wz.png'
              imagePos='object-center'
              date='Jun. 2022'
              description={[
                <p className="leading-relaxed min:leading-normal" key='a'>
                  <span className="font-mono font-bold italic">Williams & Zimmer - A Story of Film Music</span> was a project for FILM-ST 360 - 
                  Music, Culture and the Moving Image at UMass Amherst. 
                  It&apos;s a video essay covering a bit of the history of film music, and compares the music of the two most influential composers, John Williams
                  and Hans Zimmer.
                </p>
              ]}
              videoUrl='https://youtu.be/d1epfuMQaio'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
            <MediaItem 
              title='03. Super Mario Galaxy - As Good as We Remember?'
              imageSrc='/bg/bg-smg.png'
              imagePos='object-right'
              date='Aug. 2021'
              description={[
                <p className="leading-relaxed min:leading-normal" key='a'>
                  <span className="font-mono font-bold italic">Super Mario Galaxy - As Good as We Remember? </span> 
                  is a long-form video essay reflecting on the 2007 Nintendo game,
                  <span className="italic"> Super Mario Galaxy.</span> It covers everything from level design to graphics, 
                  sound and gameplay.
                </p>,
                <p className="leading-loose mt-1" key='b'>
                  The video&apos;s sountrack is comprised of music from the game.
                </p>
              ]}
              videoUrl='https://youtu.be/OSq1M7QD2wM'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
          </div>

          <MediaItem 
            title='04. CS:GO - Zeitgeist'
            imageSrc='/bg/bg-csgo.png'
            imagePos='object-center'
            date='Aug. 2018'
            description={[
              <p className="leading-loose" key='a'>
                <span className="font-mono font-bold italic">CS:GO - Zeitgeist </span>
                is a frag movie I made using moments from me and my friends&apos; gameplay in Valve&apos;s tactical shooter,
                <span className="italic"> Counter-Strike: Global Offensive. </span>
                Footage was captured using the game&apos;s built-in &quot;demo&quot; replay system, as well as a third party tool
                called Half-Life Advanced Effects for keyframing camera moves. I rebuilt stylized UI elements using Adobe After Effects.
              </p>,
              <p className="leading-loose mt-4" key='b'>
                The music used is &quot;Zeitgeist&quot; by <span className="italic">Savant,</span> hence the title of the video.
              </p>
            ]}
            videoUrl='https://youtu.be/wuCA8XTfaSg'
            isVideo={true}
            halfWidth={false}
            setVideoUrl={setVideoUrl}
            setModalOpen={setModalOpen}
          />

          <div className="flex w-[95%]">
            <MediaItem 
              title='05. Fear.'
              imageSrc='/bg/bg-fear.png'
              imagePos='object-center'
              date='Nov. 2021'
              description={[
                <p className="leading-loose min:leading-relaxed" key='a'>
                  <span className="font-mono font-bold italic">Fear.</span> was a project for ART 374 - 
                  Intro Computer Animation at UMass Amherst. 
                  Using Autodesk Maya, the assignment was to pick one of four moods, and express it using
                  only lighting and composition.
                </p>
              ]}
              videoUrl='https://www.youtube.com/watch?v=gqf0c0gtD24'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
            <MediaItem 
              title='06. Senior Class Trip to Puerto Rico'
              imageSrc='/bg/bg-pr.jpg'
              imagePos='object-center'
              date='Jun. 2018'
              description={[
                <p className="leading-loose" key='a'>
                  <span className="font-mono font-bold italic">Senior Class Trip to Puerto Rico</span> is a vlog-style documentation
                  of my high school class&apos;s senior trip. We went to Puerto Rico in the wake of Hurricane Maria to help a local organiztion
                  in building sustainable shelter/school buildings and gardens out of recycled materials and bamboo.
                </p>
              ]}
              videoUrl='https://www.youtube.com/watch?v=b9i07oCLcPc'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
          </div>
            
          <div className="flex w-[95%]">
            <MediaItem 
              title='07. Adventure at Amethyst Brook'
              imageSrc='/bg/bg-amethyst.png'
              imagePos='object-center'
              date='Feb. 2020'
              description={[
                <p className="leading-loose" key='a'>
                  My girlfriend and I took her dog, Nugget, for a walk at Amethyst Brook, a nature reserve in Amherst, MA.
                  The video is set to music from <span className="italic">The Legend of Zelda: Breath of the Wild.</span>
                </p>
              ]}
              videoUrl='https://www.youtube.com/watch?v=VqklE9kNjbQ'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
            <MediaItem 
              title='08. Montage'
              imageSrc='/bg/bg-montage.png'
              imagePos='object-left'
              date='Oct. 2018'
              description={[
                <p className="leading-loose" key='a'>
                  <span className="font-mono font-bold italic">Montage</span> was a project for VM120 - 
                  Foundations in Media Production at Emerson College. The assignment was to create a montage
                  using the various editing techniques we learned in class, using both original and stock footage.
                </p>
              ]}
              videoUrl='https://www.youtube.com/watch?v=i-uUcVpfQXA'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
          </div>
        </div>

        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">YouTube</h1>
        <p className="w-[95%] self-center mt-[-32px] ml-1">
          I have a YouTube channel,&nbsp;
          <Link href='https://www.youtube.com/@poke_'>
            <a target='_blank' className='font-mono font-semibold hover:underline hover:cursor-pointer'>Poke</a>
          </Link>
          , where I post video essays, mostly covering video games and film.
        </p>
        <p className="w-[95%] self-center mt-6 ml-1">This section is under construction :)</p>
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
