import Link from 'next/link'
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
      <nav className="w-full h-12 flex items-center justify-between min-w-[1080px] border-b border-neutral-700">
        <div>
          <Link href='/'><a className="ml-5 text-xl font-sans font-semibold text-white">Alex Howe</a></Link>
        </div>
        <div className='flex w-[35%] max-w-[640px] justify-between items-center mr-5'>
          <Link href='/reel'><a>Reel</a></Link>
          <p className='font-thin mb-1 mx-1'>|</p>
          <Link href='/film'><a>Film</a></Link>
          <Link href='/video'><a>Video</a></Link>
          <Link href='/game'><a>Game</a></Link>
          <Link href='/code'><a>Code</a></Link>
          <Link href='/photo'><a>Photo</a></Link>
          <p className='font-thin mb-1 mx-1'>|</p>
          <Link href='https://www.youtube.com/channel/UCGPSDan8oaEvppSeaLNkofg'><a target='_blank'><FaYoutube/></a></Link>
          <Link href='https://github.com/pokeblokdude'><a target='_blank'><FaGithub/></a></Link>
          <Link href='https://www.linkedin.com/in/alex-howe-6696161b7/'><a target='_blank'><FaLinkedin/></a></Link>
        </div>
      </nav>
  )
}

export default Navbar
