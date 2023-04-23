import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const YoutubeVideo = ({ title, thumbUrl, url, date }) => {

  const d = new Date(date);
  const dateString = d.toDateString('en-US');

  let titleString = title.replace(/&amp;/g, '&');
  titleString = title.replace(/&#39;/g, '\'');

  return (
    <div className='flex flex-col w-[576px] my-3 mx-6'>
      <a href={url} target='_blank' rel='noreferrer noopener' className='flex  w-full h-[324px] relative'>
        <Image src={thumbUrl} alt='' layout='fill' className='object-cover' loading='eager'/>
      </a>
      <a href={url} target='_blank' rel='noreferrer noopener'><h2 className='font-mono mt-2 ml-1 truncate'>{titleString}</h2></a>
      <p className='ml-1 text-sm text-neutral-400'>{dateString}</p>
    </div>
  )
}

export default YoutubeVideo;