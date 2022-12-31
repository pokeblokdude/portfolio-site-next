import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../../components/Footer'
import MediaItem from '../../components/MediaItem'

const Code = () => {
  return (
    <>
      <Head>
        <title>Code | Alex Howe</title>
      </Head>
      <div className="w-full max-w-[1366px] flex flex-col mb-20">
        <h1 className="text-2xl font-semibold w-[95%] self-center my-10">Code</h1>
        
        <MediaItem 
          title='00. UKG Job Referral Tool'
          imageSrc='/bg/bg-ukg.PNG'
          imagePos='object-top'
          date='Dec. 2021.'
          description={[
            <p className="leading-relaxed" key='a'>
              <span className='font-mono font-bold italic'>Job Referral Tool</span> &nbsp;was a semester-long project
              for CS320 - Software Engineering at UMass Amherst. Students were split into teams of 10, each with a student manager
              who had taken the class previously. Each team was tasked with
              creating a prototype for an internal job referral app for the HR company, UKG. 
              The project requirements were to have the following features implemented:
            </p>,
            <ul className='list-disc ml-5 mt-2 leading-relaxed' key='b'>
              <li>View listings, leave referral</li>
              <li>Search/filter listings</li>
              <li>Manager create/delete listings</li>
              <li>Manager view referrals</li>
            </ul>,
            <p className="leading-loose mt-2" key='c'>
              My team chose to go with React.js, Express and PostgreSQL for our tech stack, and a neumorphic design
              for the frontend.
            </p>
          ]}
          isVideo={false}
          halfWidth={false}
          links={[
            { text: 'View Heroku deployment.', url: 'https://job-listing-tool-320.herokuapp.com' },
            { text: 'View source on GitHub.', url: 'https://github.com/elinottonson/job-listing-tool' }
          ]}
          bgDarkness={70}
        />

        <MediaItem 
          title='01. Our House Bot'
          imageSrc='/bg/bg-ourhousebot.PNG'
          imagePos='object-top'
          date='2020.'
          description={[
            <p className="leading-relaxed" key='a'>
              <span className='font-mono font-bold italic'>Our House Bot</span> &nbsp;is a Discord bot I created for
              me and my friends&apos; private server. I started the project as a way to practice the JavaScript principles
              I learned in CS220 - Programming Methodology at UMass Amherst. Here are some of the main features I&apos;ve
              implemented:
            </p>,
            <ul className='list-disc ml-5 mt-2' key='b'>
              <li>
                Polls - live updating user-created polls
              </li>
              <li>
                Recruiting - People can &quot;sign up&quot; for an event by reacting to an embed.
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
              <li>
                Etc.
              </li>
            </ul>
          ]}
          isVideo={false}
          halfWidth={false}
          links={[
            { text: 'View source on GitHub.', url: 'https://github.com/pokeblokdude/ourhouse-bot' }
          ]}
          bgDarkness={70}
        />

        <div className='w-[95%] flex flex-col self-center mt-10'>
          <h2 className="pl-1 font-mono">02. This Website :)</h2>
          <p className="text-sm text-neutral-400 font-mono mb-2 ml-4 mt-2 w-full max-w-[1366px] self-center">Dec. 2021 (ongoing)</p>
          <Link href='https://github.com/pokeblokdude/portfolio-site-next'>
            <a target='_blank' className='font-mono hover:underline hover:cursor-pointer ml-2 mt-[-8px] w-fit text-neutral-400'>View source on GitHub.</a>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Code
