import ReactPlayer from "react-player/youtube"
import Modal from 'react-modal'
import React from 'react'
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import MediaItem from "../../components/MediaItem"
import YoutubeVideo from "../../components/YoutubeVideo"

const {google} = require('googleapis');
const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YT_KEY
});

export const getStaticProps = async () => {
  
  const res = await youtube.search.list({
    part: 'snippet',
    channelId: 'UCgq8JFvB45kRq_uq6az60PQ',
    order: 'date',
    type: 'video',
    maxResults: '4'
  })
  const data = res.data;

  //console.log(data.items);
  
  const videos = [];
  data.items.map(v => {
    videos.push(v);
  })

  return {
    props: {
      recentUploads: videos
    },
    revalidate: 60
  };
}

const Video = ({ recentUploads }) => {

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
      <div className="w-full max-w-[1366px] flex flex-col">

        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Reel</h1>

        <div className="w-[95%] aspect-video self-center mb-8">
          <ReactPlayer url='https://youtu.be/vifiwWY8VtY' width='100%' height='100%' controls={true}/>
        </div>
{/* ============================================== FILMS ========================================================== */}
        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Films</h1>

        <div className="flex flex-col items-center">

          <MediaItem 
            title='00. Descent'
            imageSrc='/bg/bg-descent.png'
            imagePos='object-center'
            date='Dec. 2022.'
            description={[
              <p className="leading-loose" key='a'>
                <span className="font-bold italic font-mono">Descent</span> is a short film about self-reflection,
                introspection, and how it can spiral endlessly. It was my final project for COMM 441 - Intermediate
                Digital Filmmaking at UMass Amherst.
              </p>,
              <p className="leading-loose mt-4 mobile:hidden" key='b'>
                I directed, shot and edited the film; there wasn&apos;t really a script, just an outline. I also color
                graded, did the audio, and additionally ended up doing my own music for the first time; I think it
                turned out really well. I&apos;m partiucularly proud of the plucking/bubbling sound. The interiors were
                shot at Smith College.
              </p>
            ]}
            videoUrl='https://youtu.be/Jkmh4wZ8KXU'
            isVideo={true}
            halfWidth={false}
            setVideoUrl={setVideoUrl}
            setModalOpen={setModalOpen}
            bgDarkness={70}
          />

          <div className="flex w-[95%] mobile:flex-col mobile:w-full mobile:items-center">
            <MediaItem 
              title='01. Transmission'
              imageSrc='/bg/bg-transmission.jpeg'
              imagePos='object-center'
              date='Oct. 2022.'
              description={[
                <p className="leading-relaxed" key='a'>
                  <span className="font-bold italic font-mono">Transmission</span> is a short film about the
                  omnipresence of technology. It was a project for the &apos;experimental narrative&apos; module of my
                  experimental film class. 
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
                <p className="leading-relaxed" key='a'>
                  <span className="font-bold italic font-mono">Cordelia Lear</span> is a short film production 
                  of a play written by Smith College professor Len Berkman. The monologue is set inside of William
                  Shakespeare&apos;s <span className="italic"> King Lear,</span> following the inner journey of the
                  king&apos;s daughter, Cordelia.
                </p>,
                <p className="leading-relaxed mt-2" key='b'>
                  I was co-cinematographer alongside my friend, Harrison Tan. I also edited, color graded, and did
                  sound editing.
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
              <p className="leading-loose mobile:leading-relaxed" key='a'>
                <span className="font-bold italic font-mono">The Machine</span> was my final project for VM120 -&nbsp;
                Foundations in Media Arts Production at Emerson College. It&apos;s a psychological-horror-themed short
                film about a young man coming to terms with the future<span className="desktop:hidden">.</span> 
                <span className="mobile:hidden">, inspired by some of the darker episodes of 
                <span className="italic"> Doctor Who</span> and <span className="italic">Black Mirror.</span></span>
              </p>,
              <p className="leading-loose mt-4 mobile:leading-relaxed mobile:hidden" key='b'>
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

          <div className="flex w-[95%] mobile:flex-col mobile:w-full mobile:items-center">
            <MediaItem 
              title='04. Global Singularity Project'
              imageSrc='/bg/bg-gsp.jpeg'
              imagePos='object-center'
              date='Apr. 2018.'
              description={[
                <p className="leading-loose" key='a'>
                  <span className="font-mono font-bold italic">G.S.P.</span> 
                  &nbsp;was a short film I did for my high school senior project, inspired primarily by 
                  Denis Villenueve&apos;s <span className="italic">Blade Runner 2049. G.S.P.</span> was my first short
                  film; I wrote, directed, shot and edited it. The music is by Caleb Kennedy.
                </p>
              ]}
              videoUrl='https://www.youtube.com/watch?v=GzvWQ_fnKt0'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
            <MediaItem 
              title='05. A Time-Lapse Journey through 2016'
              imageSrc='/bg/bg-timelapse.jpeg'
              imagePos='object-center'
              date='Jan. 2017.'
              description={[
                <p className="leading-loose" key='a'>
                  <span className="font-mono font-bold italic">A Time-Lapse Journey through 2016 </span>was the 
                  project that got me into film. Using my first DSLR camera, I shot various landscapes around my home
                  in western Massachusetts. The film is set to music from C418&apos;s&nbsp;
                  <span className="italic">Minecraft - Volume Beta.</span>
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

{/* ============================================== VIDEOS ====================================================== */}
        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Videos</h1>

        <div className="flex flex-col items-center">

          <MediaItem 
            title='00. Passing By (Official Music Video)'
            imageSrc='/bg/bg-gruff.png'
            imagePos='object-center'
            date='Jul. 2022.'
            description={[
              <p className="leading-loose mobile:leading-relaxed" key='a'>
                <span className="font-mono font-bold italic">Passing By </span> 
                is a music video I shot for my friend Gruff Davies, who wrote and performed the song under his
                artist name, <span className="italic">Suncaster.</span> <span className="mobile:hidden">Most footage
                in the video was shot at various locations around our home in western Massachusetts, with a few stock
                clips for the greenscreen section.</span>
              </p>,
              <p className="leading-loose mobile:leading-relaxed mt-2 mobile:mt-1" key='b'>
                <span className="mobile:hidden">I directed, shot, edited, and color graded the video.</span> I was
                going for kind of a retro vibe with the 4:3 aspect ratio and heavy film grain and glow.&nbsp;
                <span className="mobile:hidden">Personally I think it looks really good.</span>
              </p>
            ]}
            videoUrl='https://youtu.be/TiyuKP6-zzI'
            isVideo={true}
            halfWidth={false}
            setVideoUrl={setVideoUrl}
            setModalOpen={setModalOpen}
          />

          <MediaItem 
            title='01. CS:GO - Zeitgeist'
            imageSrc='/bg/bg-csgo.png'
            imagePos='object-center'
            date='Aug. 2018'
            description={[
              <p className="leading-loose" key='a'>
                <span className="font-mono font-bold italic">CS:GO - Zeitgeist </span>
                is a frag movie I made using moments from me and my friends&apos; gameplay in Valve&apos;s tactical
                shooter, <span className="italic"> Counter-Strike: Global Offensive. </span>
                <span className="mobile:hidden">Footage was captured using the game&apos;s built-in &quot;demo&quot;
                replay system, as well as a third party tool called Half-Life Advanced Effects for keyframing camera
                moves. I rebuilt stylized UI elements using Adobe After Effects.</span>
              </p>,
              <p className="leading-loose mt-4 mobile:hidden" key='b'>
                The music used is &quot;Zeitgeist&quot; by <span className="italic">Savant,</span> hence the title of
                the video.
              </p>
            ]}
            videoUrl='https://youtu.be/wuCA8XTfaSg'
            isVideo={true}
            halfWidth={false}
            setVideoUrl={setVideoUrl}
            setModalOpen={setModalOpen}
          />

          <div className="flex w-[95%] mobile:flex-col mobile:w-full mobile:items-center">
            <MediaItem 
              title='02. Fear.'
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
              title='03. Senior Class Trip to Puerto Rico'
              imageSrc='/bg/bg-pr.jpg'
              imagePos='object-center'
              date='Jun. 2018'
              description={[
                <p className="leading-loose" key='a'>
                  <span className="font-mono font-bold italic">Senior Class Trip to Puerto Rico</span> is a vlog-style
                  documentation of my high school class&apos;s senior trip. We went to Puerto Rico in the wake of
                  Hurricane Maria to help a local organiztion in building sustainable shelter/school buildings and
                  gardens out of recycled materials and bamboo.
                </p>
              ]}
              videoUrl='https://www.youtube.com/watch?v=b9i07oCLcPc'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
          </div>
            
          <div className="flex w-[95%] mobile:flex-col mobile:w-full mobile:items-center">
            <MediaItem 
              title='04. Adventure at Amethyst Brook'
              imageSrc='/bg/bg-amethyst.png'
              imagePos='object-center'
              date='Feb. 2020'
              description={[
                <p className="leading-loose" key='a'>
                  My girlfriend and I took her dog, Nugget, for a walk at Amethyst Brook, a nature reserve in Amherst,
                  MA. The video is set to music from&nbsp;
                  <span className="italic">The Legend of Zelda: Breath of the Wild.</span>
                </p>
              ]}
              videoUrl='https://www.youtube.com/watch?v=VqklE9kNjbQ'
              isVideo={true}
              halfWidth={true}
              setVideoUrl={setVideoUrl}
              setModalOpen={setModalOpen}
            />
            <MediaItem 
              title='05. Montage'
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
        <p className="w-[95%] self-center mt-[-32px] ml-2">
          I have a YouTube channel,&nbsp;
          <Link href='https://www.youtube.com/@poke_'>
            <a
              target='_blank'
              className='font-mono font-semibold hover:underline hover:cursor-pointer hover:text-neutral-300'
            >
              Poke
            </a>
          </Link>
          , where I post video essays, mostly covering video games and film.
        </p>
        <h2 className="text-lg w-[95%] self-center mt-6">Recent Uploads</h2>
        <div className="flex w-[95%] self-center flex-wrap justify-center">
          {
            recentUploads.map(
              vid => <YoutubeVideo 
                        title={vid.snippet.title}
                        thumbUrl={vid.snippet.thumbnails.high.url}
                        url={`https://www.youtube.com/watch?v=${vid.id.videoId}`}
                        date={vid.snippet.publishedAt}
                        key={vid.etag}
                        setVideoUrl={setVideoUrl}
                        setModalOpen={setModalOpen}
                      />
            )
          }
        </div>
        <p className="w-[95%] self-center mt-4">
          Check out the rest of my videos&nbsp;
          <Link href="https://www.youtube.com/@poke_/videos">
            <a
              target='_blank'
              className="font-mono font-semibold underline hover:cursor-pointer hover:text-neutral-300"
            >
                here
            </a>
          </Link>
          .
        </p>
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
    </>
  )
}
export default Video
