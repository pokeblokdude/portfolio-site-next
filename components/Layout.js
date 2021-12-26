import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='w-full flex flex-col items-center'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
