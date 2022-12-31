import Image from "next/image";
import Link from "next/link";
import React from "react";
/**
 * 
 * @param {string} title 
 * @param {string} imageSrc 
 * @param {string} imagePos object-center, object-right, etc
 * @param {string} date Mon. Year. 
 * @param {string[]} description item description
 * @param {string} videoUrl video url
 * @param {boolean} isVideo whether or not this is a video
 * @param {{text: string, url: string}[]} links
 * @param {Integer} bgDarkness how dark the bg is (0-100)
 * @param {boolean} halfWidth whether this is full-width or half-width
 * @param {boolean} frontPage whether this item is on the front page
 * @param {function} setVideoUrl sets the video url for the player
 * @param {function} setModalOpen opens the video player
 * @returns 
 */
const MediaItem = ({ title, imageSrc, imagePos, date, description, videoUrl, isVideo, links, bgDarkness = 60, halfWidth, frontPage, setVideoUrl, setModalOpen }) => {
  
  const [ hovering, setHovering ] = React.useState(false);

  let height = 480;
  let width = 'w-[95%]';
  let textPaddingX = 'px-40';
  let textPaddingY = 'py-20';
  if(frontPage) {
    height = 300;
    width = 'w-full';
    textPaddingX = 'px-20';
    textPaddingY = 'py-16';
  }
  else if(halfWidth) {
    height = 360;
    width = 'w-full';
    textPaddingX = 'px-20';
    textPaddingY = 'py-20';
  }

  return (
    <div className={`flex flex-col items-center ${halfWidth ? 'w-1/2' : 'w-full'} mb-8`}>
      <h2 className={`${width} pl-1 mb-4 font-mono`}>{title}</h2>
      <div 
        className={`${width} flex flex-col justify-center items-center h-[${height}px] relative`}
      >
        <Image src={imageSrc} layout='fill' className={`object-cover ${imagePos}`} alt='' loading='eager' priority={true} quality={100}/>
        <div
          className={
            `w-full h-full flex flex-col justify-between bg-black/${bgDarkness} opacity-0 ${isVideo ? 'hover:cursor-pointer' : ''} 
            ${hovering ? 'opacity-100' : ''} ${hovering ? 'transition-all' : ''} transition duration-200 
            ${textPaddingY} ${textPaddingX} backdrop-blur z-10 mobile:px-14 mobile:py-10`
          }
          onClick={
            isVideo ? () => {
              setVideoUrl(videoUrl);
              setModalOpen(true);
            } 
            : () => {}
          }
          onTouchStart={() => setHovering(true)}
          onTouchEnd={() => setHovering(false)}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div>
            <p className="text-sm text-neutral-400 font-mono mb-2 w-full max-w-[1366px] self-center">{date}</p>
            {description.map(descLine => descLine)}
          </div>
          
          {isVideo ? 
            <p className="text-sm text-neutral-400 font-mono mt-6">Click to view.</p>
            : <div className="flex mt-8">
              {
                links.map(link => 
                  <Link href={link.url} key={link.text}>
                    <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer mr-8">{link.text}</a>
                  </Link>
                )
              }
              </div>
          }
        </div>
      </div>
    </div>
  );
}

export default MediaItem