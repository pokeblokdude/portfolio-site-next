import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Footer from '../../components/Footer'

const Code = () => {
  return (
    <>
      <Head>
        <title>Code | Alex Howe</title>
      </Head>
      <div className="w-full max-w-[1366px] min-w-[1080px] flex flex-col mb-20">
        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Code</h1>
        
        <div className="flex flex-col w-full items-center">
          <h2 className="w-[95%] pl-1 mb-4 font-mono">00. UKG Job Referral Tool</h2>
          <div 
            className='w-[95%] flex flex-col justify-center items-center bg-ukg bg-cover bg-top h-[480px]'
          >
            <div
              className="w-full h-full bg-black/90 opacity-0 hover:opacity-100 hover:transition-all 
                transition duration-300 py-20 px-40 backdrop-blur"
            >
              <p className="leading-relaxed">
                <span className='font-mono font-bold italic'>Job Referral Tool</span> &nbsp;was a semester-long project
                for CS320 - Software Engineering at UMass Amherst. Students were split into teams of 10, each with a student manager
                who had taken the class previously. Each team was tasked with
                creating a prototype for an internal job referral app for the HR company, UKG. 
                The project requirements were to have the following features implemented:
              </p>
              <ul className='list-disc ml-5 mt-2 leading-relaxed'>
                <li>View listings, leave referral</li>
                <li>Search/filter listings</li>
                <li>Manager create/delete listings</li>
                <li>Manager view referrals</li>
              </ul>
              <p className="leading-loose mt-2">
                My team chose to go with React.js, Express and PostgreSQL for our tech stack, and a neumorphic design
                for the frontend.
              </p>
              <div className='mt-4 flex'>
                <Link href='https://job-listing-tool-320.herokuapp.com'>
                  <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer">View Heroku deployment.</a>
                </Link>
                <Link href='https://github.com/elinottonson/job-listing-tool'>
                  <a target='_blank' className="text-sm text-neutral-400 font-mono ml-5 hover:underline hover:cursor-pointer">View source on GitHub.</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center mt-10">
          <h2 className="w-[95%] pl-1 mb-4 font-mono">01. Our House Bot</h2>
          <div 
            className='w-[95%] flex flex-col justify-center items-center bg-ourhousebot bg-cover bg-top h-[640px]'
          >
            <div
              className="w-full h-full bg-black/90 opacity-0 hover:opacity-100 hover:transition-all 
                transition duration-300 py-20 px-40 backdrop-blur"
            >
              <p className="leading-relaxed">
                <span className='font-mono font-bold italic'>Our House Bot</span> &nbsp;is a Discord bot I created for
                me and my friends&apos; private server. I started the project as a way to practice the JavaScript principles
                I learned in CS220 - Programming Methodology at UMass Amherst. Here are some of the main features I&apos;ve
                implemented:
              </p>
              <ul className='list-disc ml-5 mt-2'>
                <li>
                  Polls - Using <span className='font-mono italic'>!poll</span>, a user can start either a timed or untimed poll with a custom title up to 10 
                  custom options. Other users can react to vote in the poll, and the bot will update the &quot;graphics&quot;
                  to reflect the current poll results. Active polls are limited to one per channel.
                  </li>
                <li>
                  Recruit - Using <span className='font-mono italic'>!recruit</span>, a user can send an embed with a custom
                  title and number of people (either specific or infinite) they are looking to get for a specific event. Other users
                  can react to &quot;sign up,&quot; and the bot will update the message to reflect who has signed up already.
                </li>
                <li>
                  PC Specs - Using <span className='font-mono italic'>!specs</span> and <span className='font-mono italic'>!setspecs</span>,
                  users can set their PC specs using a specified&nbsp;
                  <Link href='https://pcpartpicker.com/'><a target='_blank' className='font-semibold hover:underline hover:cursor-pointer'>PCPartpicker</a></Link>
                  &nbsp;list, and view other users&apos; PC specs.
                </li>
                <li>
                  Random Number Generator - Using <span className='font-mono italic'>!rng</span>, a user can make the bot print
                  out a random number in a specified range.
                </li>
                <li>
                  Purge - Using <span className='font-mono italic'>!purge</span>, an admin can bulk-delete
                  a specified number of messages from the channel, up to 100 at a time.
                </li>
              </ul>
              <p className="leading-relaxed mt-2">
                The project has slightly evolved over time; most notably, I switched from using JSON files to
                MongoDB for data storage. I occaisionally go back an work on it every now and then.
              </p>
              <div className='mt-4 flex'>
                <Link href='https://github.com/pokeblokdude/ourhouse-bot'>
                  <a target='_blank' className="text-sm text-neutral-400 font-mono hover:underline hover:cursor-pointer">View source on GitHub.</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[95%] flex flex-col self-center mt-10'>
          <h2 className="pl-1 mb-4 font-mono">02. This Website :)</h2>
          <Link href='https://github.com/pokeblokdude/portfolio-site-next'>
            <a target='_blank' className='font-mono hover:underline hover:cursor-pointer ml-2 mt-[-8px]'>View source on GitHub.</a>
          </Link>
        </div>
      </div>
      <Footer sticky={false}/>
    </>
  )
}

export default Code
