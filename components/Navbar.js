import Link from 'next/link'
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
      <nav className="w-full h-12 flex items-center justify-between border-b border-neutral-700 mobile:flex-col mobile:h-24 mobile:justify-center">
        <div>
          <Link href='/'><a className="ml-5 text-xl font-sans font-semibold text-white mobile:text-3xl mobile:ml-0">Alex Howe</a></Link>
        </div>
        <div className='flex w-[35%] max-w-[560px] justify-between items-center mr-5 mobile:mr-0 mobile:w-[80%] mobile:mt-3'>
          <Link href='/video'><a>Video</a></Link>
          <Link href='/photo'><a>Photo</a></Link>
          <p className='font-thin mb-1 mx-1 mobile:hidden'>|</p>
          <Link href='/game'><a>Game</a></Link>
          <Link href='/code'><a>Code</a></Link>
          <p className='font-thin mb-1 mx-1 mobile:hidden'>|</p>
          <Link href='https://www.youtube.com/channel/UCGPSDan8oaEvppSeaLNkofg'><a target='_blank' className='mobile:hidden'><FaYoutube/></a></Link>
          <Link href='https://github.com/pokeblokdude'><a target='_blank' className='mobile:hidden'><FaGithub/></a></Link>
          <Link href='https://www.linkedin.com/in/alex-howe-6696161b7/'><a target='_blank' className='mobile:hidden'><FaLinkedin/></a></Link>
        </div>
      </nav>
  )
}

export default Navbar
