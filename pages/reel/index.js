import React from 'react';
import Head from 'next/head';
import ReactPlayer from "react-player/youtube"
import Footer from '../../components/Footer';

const Reel = () => {
  return (
    <>
      <Head>
        <title>Reel | Alex Howe</title>
      </Head>
      <div className="w-full max-w-[1366px] flex flex-col mb-20">

        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Reel</h1>

        <div className="w-[95%] aspect-video self-center">
          <ReactPlayer url='https://youtu.be/vifiwWY8VtY' width='100%' height='100%' controls={true}/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Reel;
