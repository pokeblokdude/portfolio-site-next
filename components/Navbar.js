import Link from 'next/link'
import { FaGithub, FaYoutube } from 'react-icons/fa'

const Navbar = () => {
  return (
      <nav className="w-full h-12 flex items-center justify-between min-w-[1080px] border-b border-neutral-700">
        <div>
          <Link href='/'><a className="ml-5 text-xl font-sans font-semibold text-white">Alex Howe</a></Link>
        </div>
        <div className='flex w-1/3 justify-between items-center mr-5'>
          <Link href='/film'><a>Film</a></Link>
          <Link href='/video'><a>Video</a></Link>
          <Link href='/game'><a>Game</a></Link>
          <Link href='/code'><a>Code</a></Link>
          <Link href='/photo'><a>Photo</a></Link>
          <p className='font-thin mb-1 mx-1'>|</p>
          <Link href='https://www.youtube.com/channel/UCGPSDan8oaEvppSeaLNkofg'><a><FaYoutube/></a></Link>
          <Link href='https://github.com/pokeblokdude'><a><FaGithub/></a></Link>
        </div>
      </nav>
  )
}

export default Navbar
