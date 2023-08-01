import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer'
import MediaItem from '../../components/MediaItem'
import YoutubeVideo from '../../components/YoutubeVideo'
import Modal from 'react-modal';
import ReactPlayer from 'react-player/youtube'

const {google} = require('googleapis');
const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YT_KEY
});

export const getStaticProps = async () => {
  
  const res = await youtube.search.list({
    part: 'snippet',
    channelId: 'UCQByWFfXIWnpKjUA45ziW8A',
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

const Game = ({ recentUploads }) => {

  const [ modalOpen, setModalOpen ] = React.useState(false);
  const [ videoUrl, setVideoUrl ] = React.useState('');

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <Head>
        <title>Game | Alex Howe</title>
      </Head>
      <div className="w-full max-w-[1366px] flex flex-col items-center mb-20">
        <h1 className="text-2xl font-semibold w-[95%] self-center mt-10 mb-6">Games</h1>
        
        <MediaItem 
          title='00. Cataclysm'
          imageSrc='/bg/bg-cataclysm.jpg'
          imagePos='object-center'
          date='Feb. 2022.'
          description={[
            <p className="leading-loose min:leading-relaxed" key='a'>
              <span className='font-mono font-bold italic'>Cataclysm</span> &nbsp;is a small game
              about a cat causing havoc. It was developed in 3 days by me and four of my friends, and submitted to&nbsp;
              <Link href='https://itch.io/jam/mini-jame-gam-7'>
                <a target='_blank' className='font-semibold hover:underline hover:cursor-pointer'>Mini Jame Gam #7,</a>
              </Link>
              &nbsp;with the theme, &quot;You Are the Enemy.&quot;
            </p>,
            <p className='leading-loose min:leading-relaxed mt-4 mobile:hidden' key='b'>
              The game is 3D, with 2D, paper-like graphics inspired by the <span className='italic'>Paper Mario</span> series. The goal is to
              jump around and knock stuff over, causing the guy to walk over and fix it. If you distract him for long enough, you can light the
              oven on fire to burn down the house. At first we were planning on making it a puzzle game, but eventually we settled on something
              more akin to <span className='italic'>Untitled Goose Game,</span> where the goal is basically just to cause havoc.
            </p>
          ]}
          isVideo={false}
          halfWidth={false}
          links={[
            { text: 'Play on Itch.io.', url: 'https://poke-bd.itch.io/cataclysm' },
            { text: 'View source on GitHub.', url: 'https://github.com/pokeblokdude/cat-game' }
          ]}
          bgDarkness={70}
        />

        <h1 className="text-2xl font-semibold w-[95%] self-center mt-10 mb-6">CS:GO Maps</h1>

        <div className="flex w-[95%] mobile:flex-col mobile:w-full mobile:items-center">
          <MediaItem 
            title='00. am_snowpoint'
            imageSrc='/bg/bg-snowpoint.jpg'
            imagePos='object-center'
            date='Jan. 2020.'
            description={[
              <p className="leading-loose min:leading-relaxed" key='a'>
                <span className="font-mono font-bold italic">am_snowpoint</span> is a 1v1 map meant to be used
                with splewis&apos; &quot;multi1v1&quot; server plugin. The map is named snowpoint after the city from&nbsp;
                <span className='italic'>Pokemon Diamond and Pearl</span>, which inspired the wintery research-site theme.
              </p>
            ]}
            isVideo={false}
            halfWidth={true}
            links={[
              { text: 'View on Steam Workshop.', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1980557586' }
            ]}
          />
          <MediaItem 
            title='01. de_salisbury'
            imageSrc='/bg/bg-salisbury.jpg'
            imagePos='object-center'
            date='Jan. 2020.'
            description={[
              <p className="leading-loose min:leading-relaxed" key='a'>
                  <span className='font-mono font-bold italic'>de_salisbury</span> is an unfinished map meant
                  for CS:GO&apos;s 2v2 &quot;Wingman&quot; mode, with one central bombsite. It&apos;s named after Salisbury, MA, a town
                  close to where I grew up. It also fits the coastal theme.
                </p>
            ]}
            isVideo={false}
            halfWidth={true}
            links={[
              { text: 'View on Steam Workshop.', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2016705263' }
            ]}
            bgDarkness={70}
          />
        </div>

        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Game Dev Videos</h1>
        <p className="w-[95%] self-center mt-[-32px] ml-2">
          My YouTube channel,&nbsp;
          <Link href='https://www.youtube.com/@poke_gamedev'>
            <a target='_blank' className='font-mono font-semibold hover:underline hover:cursor-pointer'>Poke Dev</a>
          </Link>
          , is where I post videos about game dev stuff.
        </p>
        <h2 className="text-lg w-[95%] self-center mt-4 mb-1 ml-1">Recent Uploads</h2>
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
          <Link href="https://www.youtube.com/@poke_gamedev/videos">
            <a target='_blank' className="font-mono font-semibold underline hover:cursor-pointer">here</a>
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

      <Footer />
    </>
  )
}

export default Game
