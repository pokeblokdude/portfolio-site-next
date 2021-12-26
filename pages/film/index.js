import ReactPlayer from "react-player/youtube"
import { FaRegPlayCircle } from 'react-icons/fa'

const Film = () => {
  return (
    <div className="w-full">

      <h1 className="text-white text-2xl font-semibold m-10">Films</h1>

      <div 
        className='w-full flex justify-center items-center bg-the-machine bg-cover bg-center h-[500px] z-50
          hover:blur hover:cursor-pointer hover:brightness-90 hover:transition-all transition duration-300'
      >
        <FaRegPlayCircle className='w-10 h-10'/>
      </div>
      <div 
        className='w-full flex justify-center items-center bg-gsp bg-cover bg-center h-[500px] z-40
          hover:blur hover:cursor-pointer hover:brightness-90 hover:transition-all transition duration-300'
      >
        <FaRegPlayCircle className='w-10 h-10'/>
      </div>
      <div 
        className='w-full flex justify-center items-center bg-timelapse bg-cover bg-center h-[500px] z-30
          hover:blur hover:cursor-pointer hover:brightness-90 hover:transition-all transition duration-300'
      >
        <FaRegPlayCircle className='w-10 h-10'/>
      </div>
  
    </div>
  )
}

export default Film
