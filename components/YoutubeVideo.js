import React from 'react'
import Image from 'next/image'

const YoutubeVideo = ({ title, thumbUrl, url, date }) => {

  const d = new Date(date);
  const dateString = d.toDateString('en-US');

  const titleString = title.replace(/&amp;/g, '&');

  return (
    <div className='flex flex-col w-[576px] my-2 mx-2'>
      <a href={url} target='_blank' rel='noreferrer noopener' className='flex  w-full h-[324px] relative'>
        <Image src={thumbUrl} alt='' layout='fill' className='object-cover' loading='eager'/>
      </a>
      <h2 className='font-mono mt-2 ml-1 truncate'>{titleString}</h2>
      <p className='ml-1 text-sm text-neutral-400'>{dateString}</p>
    </div>
  )
}

export default YoutubeVideo;