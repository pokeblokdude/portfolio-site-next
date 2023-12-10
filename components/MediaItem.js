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
const MediaItem = (
  { 
    title, imageSrc, imagePos, date, description, videoUrl, isVideo, links, bgDarkness = 60, halfWidth, frontPage,
    setVideoUrl, setModalOpen 
  }
) => {
  
  const [ hovering, setHovering ] = React.useState(false);

  let height = '480px';
  let width = '95%';
  let textPaddingX = '10rem';
  let textPaddingY = '5rem';
  if(frontPage) {
    height = '300px';
    width = '100%';
    textPaddingX = '5rem';
    textPaddingY = '4rem';
  }
  else if(halfWidth) {
    height = '360px';
    width = '100%';
    textPaddingX = '5rem';
    textPaddingY = '5rem';
  }

  return (
    <div className={`flex flex-col items-center ${halfWidth ? 'w-1/2' : 'w-full'} mb-8 mobile:w-[95%]`}>
      <h2 
        className={`pl-1 mb-4 font-mono mobile:w-full`}
        style={{
          width: width
        }}
      >
        {title}
      </h2>
      <div 
        className={`flex flex-col justify-center items-center relative mobile:h-[360px] mobile:w-full`}
        style={{
          height: height,
          width: width
        }}
      >
        <Image
          src={imageSrc}
          layout='fill'
          className={`object-cover ${imagePos}`}
          alt=''
          loading='eager'
          priority={true}
          quality={100}
        />
        <div
          className={
            `w-full h-full flex flex-col justify-between opacity-0 ${isVideo ? 'hover:cursor-pointer' : ''} 
            ${hovering ? 'opacity-100' : ''} ${hovering ? 'transition-all' : ''} transition duration-200 
            backdrop-blur z-10 mobile:px-12 mobile:py-10`
          }
          style={{
            paddingTop: textPaddingY,
            paddingBottom: textPaddingY,
            paddingLeft: textPaddingX,
            paddingRight: textPaddingX,
            backgroundColor: `rgba(0, 0, 0, ${bgDarkness/100})` 
          }}
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
                    <a
                      target={link.ext ? '_blank' : ''}
                      className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer mr-8"
                    >
                      {link.text}
                    </a>
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