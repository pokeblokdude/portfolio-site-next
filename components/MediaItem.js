import Image from "next/image";
import Link from "next/link";
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
 * @param {function} setVideoUrl sets the video url for the player
 * @param {function} setModalOpen opens the video player
 * @returns 
 */
const MediaItem = ({ title, imageSrc, imagePos, date, description, videoUrl, isVideo, links, bgDarkness = 60, halfWidth, setVideoUrl, setModalOpen }) => {
  return (
    <div className={`flex flex-col items-center ${halfWidth ? 'w-1/2' : 'w-full'} mb-8`}>
      <h2 className={`${halfWidth ? 'w-full' : 'w-[95%]'} pl-1 mb-4 font-mono`}>{title}</h2>
      <div 
        className={`${halfWidth ? 'w-full' : 'w-[95%]'} flex flex-col justify-center items-center h-[${halfWidth ? 360 : 480}px] relative`}
      >
        <Image src={imageSrc} layout='fill' className={`object-cover ${imagePos}`} alt='' loading='eager' priority={true} quality={100}/>
        <div
          className={
            `w-full h-full flex flex-col justify-between bg-black/${bgDarkness} opacity-0 ${isVideo ? 'hover:cursor-pointer' : ''} hover:opacity-100 
            hover:transition-all active:opacity-100 active:transition-all transition duration-300 
            py-20 ${halfWidth ? 'px-20' : 'px-40'} backdrop-blur z-10`
          }
          onClick={
            isVideo ? () => {
              setVideoUrl(videoUrl);
              setModalOpen(true);
            } 
            : () => {}
          }
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