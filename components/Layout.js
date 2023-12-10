import Navbar from './Navbar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <Navbar />
        {children}
        <p className='font-light font-mono text-neutral-400 text-center text-xs min-w-fit mb-10 mt-12'>
          Last updated: 12/9/23
        </p>
      </div>
    </>
    
  )
}

export default Layout
