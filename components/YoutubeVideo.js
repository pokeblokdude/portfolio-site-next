import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const YoutubeVideo = ({ title, thumbUrl, url, date, setVideoUrl, setModalOpen }) => {

  const [ hovering, setHovering ] = React.useState(false);

  const d = new Date(date);
  const dateString = d.toDateString('en-US');

  let titleString = title.replace(/&amp;/g, '&');
  titleString = title.replace(/&#39;/g, '\'');

  return (
    <div 
      className='flex flex-col w-1/2 my-3 mobile:w-full hover:cursor-pointer'
      onClick={
        () => {
          setVideoUrl(url);
          setModalOpen(true);
        } 
      }
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className='flex w-full aspect-video relative'>
        <Image src={thumbUrl} alt='' layout='fill' className='object-cover' loading='eager'/>
        <div
          className={
            `w-full h-full flex justify-center items-center opacity-0 
            ${hovering ? 'opacity-100' : ''} ${hovering ? 'transition-all' : ''} transition duration-200 
            backdrop-blur z-10 mobile:px-12 mobile:py-10`
          }
          style={{
            paddingTop: '5rem',
            paddingBottom: '5rem',
            paddingLeft: '5rem',
            paddingRight: '5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.65)' 
          }}
        >
          <p className="text-neutral-400 font-mono mb-2 max-w-[1366px] self-center">Click to view.</p>
        </div>
      </div>
      <h2 className={`font-mono mt-2 ml-1 truncate w-[97%] ${hovering ? 'text-neutral-300' : ''}`}>{titleString}</h2>
      <p className={`ml-1 text-sm ${hovering ? 'text-neutral-500' : 'text-neutral-400'}`}>{dateString}</p>
    </div>
  )
}

export default YoutubeVideo;