import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="w-full h-12 flex items-center justify-between">
        <div>
          <Link href='/'><a className="ml-5 text-xl font-sans font-semibold">Alex Howe</a></Link>
        </div>
        <div className='flex w-1/4 justify-between items-center mr-5'>
          <Link href='/film'><a>Film</a></Link>
          <Link href='/video'><a>Video</a></Link>
          <Link href='/game'><a>Game</a></Link>
          <Link href='/code'><a>Code</a></Link>
          <Link href='/photo'><a>Photo</a></Link>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Layout
