import Link from 'next/link'
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
      <nav 
        className="w-full h-14 flex items-center justify-between border-b border-neutral-700 mobile:flex-col
                  mobile:h-24 mobile:justify-center sticky top-0 z-50 bg-neutral-900"
      >
        <div>
          <Link href='/'>
            <a
              className="ml-5 text-xl font-sans font-semibold text-white mobile:text-3xl mobile:ml-0
                        hover:text-neutral-300"
            >
                Alex Howe
              </a>
          </Link>
        </div>
        <div
          className='flex w-[35%] max-w-[576px] justify-between items-center mr-5 mobile:mr-0 mobile:w-[80%]
                    mobile:mt-3'
        >
          <Link href='/video'><a className='hover:text-neutral-300'>Video</a></Link>
          <Link href='/photo'><a className='hover:text-neutral-300'>Photo</a></Link>

          <p className='font-thin mb-1 mx-1 mobile:hidden pointer-events-none'>|</p>

          <Link href='/game'><a className='hover:text-neutral-300'>Game</a></Link>
          <Link href='/code'><a className='hover:text-neutral-300'>Code</a></Link>

          <p className='font-thin mb-1 mx-1 mobile:hidden pointer-events-none'>|</p>

          <Link href='https://www.youtube.com/channel/UCGPSDan8oaEvppSeaLNkofg'>
            <a target='_blank' className='mobile:hidden hover:text-neutral-300'><FaYoutube/></a>
          </Link>
          <Link href='https://github.com/pokeblokdude'>
            <a target='_blank' className='mobile:hidden hover:text-neutral-300'><FaGithub/></a>
          </Link>
          <Link href='https://www.linkedin.com/in/alex-howe-6696161b7/'>
            <a target='_blank' className='mobile:hidden hover:text-neutral-300'><FaLinkedin/></a>
          </Link>
        </div>
      </nav>
  )
}

export default Navbar
