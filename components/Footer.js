import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const Footer = ({ sticky }) => {
  return (
    <div 
      className="w-full h-14 bg-neutral-900 flex items-center justify-center border-t border-neutral-700 mobile:flex-col mobile:h-16"
    >
      <p className="font-light text-neutral-300">I made this site using Next.js and Tailwind CSS.</p>
      <p className='font-light m-2 text-neutral-300 mobile:hidden'>|</p>
      <div className='flex items-center'>
        <Link href='https://github.com/pokeblokdude/portfolio-site-next'>
          <a className='hover:underline text-neutral-200' target='_blank'>View on GitHub</a>
        </Link>
        <FaGithub className='ml-2 text-neutral-200'/>
      </div>
    </div>
  )
}

export default Footer
