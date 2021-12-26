import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const Footer = ({ sticky }) => {
  return (
    <div 
      className={sticky ? "w-full h-14 bg-neutral-900 flex items-center justify-center fixed left-0 bottom-0 \
        border-t border-neutral-700" 
        : 
        "w-full h-14 bg-neutral-900 \
        flex items-center justify-center border-t border-neutral-700"
      }
    >
      <p className="font-light text-neutral-300">This website was made using Next.js and Tailwind CSS.</p>
      <p className='font-light m-2 text-neutral-300'>|</p>
      <Link href='https://github.com/pokeblokdude/portfolio-site-next'>
        <a className='hover:underline text-neutral-200'>View on GitHub</a>
      </Link>
      <FaGithub className='ml-2 text-neutral-200'/>
    </div>
  )
}

export default Footer
