import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const YoutubeVideo = ({ title, thumbUrl, url, date, setVideoUrl, setModalOpen }) => {

  const d = new Date(date);
  const dateString = d.toDateString('en-US');

  let titleString = title.replace(/&amp;/g, '&');
  titleString = title.replace(/&#39;/g, '\'');

  return (
    <div 
      className='flex flex-col w-1/2 my-3 mobile:w-full hover:cursor-pointer'
      onClick={() => {
        setVideoUrl(url);
        setModalOpen(true);
      }}
    >
      <div href={url} target='_blank' rel='noreferrer noopener' className='flex  w-full aspect-video relative'>
        <Image src={thumbUrl} alt='' layout='fill' className='object-cover' loading='eager'/>
      </div>
      <h2 className='font-mono mt-2 ml-1 truncate w-[97%]'>{titleString}</h2>
      <p className='ml-1 text-sm text-neutral-400'>{dateString}</p>
    </div>
  )
}

export default YoutubeVideo;