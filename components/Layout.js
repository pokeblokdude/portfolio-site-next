import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import React from 'react'

const Layout = ({ children }) => {
  const [ stickyFooter, setStickyFooter ] = React.useState(false);
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <Navbar />
        {children}
      </div>
    </>
    
  )
}

export default Layout
