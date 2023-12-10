import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MediaItem from '../../components/MediaItem'

const Code = () => {
  return (
    <>
      <Head>
        <title>Code | Alex Howe</title>
      </Head>
      <div className="w-full max-w-[1366px] flex flex-col items-center">
        <h1 className="text-2xl font-semibold w-[95%] my-10">Code</h1>
        
        <MediaItem 
          title='00. OpenGL Renderer'
          imageSrc='/bg/bg-opengl.PNG'
          imagePos='object-center'
          date='Oct. 2023 (WIP).'
          description={[
            <p className="leading-loose mobile:leading-relaxed" key='a'>
              A basic hardware renderer made in C++, using GLFW, GLM, and Dear ImGui.
            </p>,
            <p className='mt-2 leading-loose mobile:leading-relaxed' key='b'>
              Currently, the shapes are hard-coded primitives, and there is no scene hierarchy.
              <span className='mobile:hidden'> The &ldquo;lighting&rdquo; is also faked in the shader, based on the
              camera position.</span> There is a moveable, resizable debug menu made with ImGui.&nbsp;
              <span className='mobile:hidden'>It has interactable sliders for the camera attributes, and shows
              framerate and mouse position info.</span>
            </p>,
            <p className="leading-loose mobile:leading-relaxed mt-2" key='c'>
              The camera can be moved around using standard first-person controls (WASD) when holding down right click.
              <span className='mobile:hidden'> Wireframe view can be toggled on/off from the debug window.</span>
            </p>
          ]}
          isVideo={false}
          halfWidth={false}
          links={[
            {
              text: 'View source on GitHub.',
              url: 'https://github.com/pokeblokdude/opengl-renderer',
              ext: true
            }
          ]}
          bgDarkness={70}
        />

        <div className='flex w-[95%] mobile:flex-col mobile:w-full items-center'>
          <MediaItem 
            title='01. Simple Renderer'
            imageSrc='/bg/bg-renderer.PNG'
            imagePos='object-center'
            date='Apr. 2023.'
            description={[
              <p className="leading-relaxed" key='a'>
                An extremely bare-bones software renderer written (almost) from scratch in C++, using SDL2 and GLM. 
              </p>,
              <p className='leading-relaxed mt-2' key='b'>
                Rendering a scene with 2 shapes takes about 1.5ms on a release build. If I come back to this project in
                the future, I&apos;d like to add support for 3D model import, as well as basic lighting.
              </p>,
            ]}
            isVideo={false}
            halfWidth={true}
            links={[
              {
                text: 'View source on GitHub.',
                url: 'https://github.com/pokeblokdude/simple-renderer',
                ext: true
              }
            ]}
            bgDarkness={70}
          />
          <MediaItem 
            title='02. Breakout! for Arduino'
            imageSrc='/bg/bg-breakout.jpg'
            imagePos='object-center'
            date='Dec. 2022.'
            description={[
              <p className="leading-relaxed" key='a'>
                <span className='font-mono font-bold italic'>Breakout!</span> &nbsp;was my semester project
                for CS 335 at UMass Amherst. My original plan was to make a simple 3D renderer, but
                the LCD wouldn&apos;t work with the Arduino Nano boards we were given.
                In order to use the screen&apos;s 8-bit parallel mode, I switched to an Arduino Uno
                (much slower), and decided to make a <span className='italic'>Breakout</span> clone
                instead.
              </p>,
            ]}
            isVideo={false}
            halfWidth={true}
            links={[
              {
                text: 'View source on GitHub.',
                url: 'https://github.com/pokeblokdude/cs335-breakout-project',
                ext: true
              }
            ]}
            bgDarkness={70}
          />
        </div>
        
        <MediaItem 
          title='03. UKG Job Referral Tool'
          imageSrc='/bg/bg-ukg.PNG'
          imagePos='object-top'
          date='Dec. 2021.'
          description={[
            <p className="leading-relaxed" key='a'>
              <span className='font-mono font-bold italic'>Job Referral Tool</span> &nbsp;was a semester-long project
              for CS320 - Software Engineering at UMass Amherst. Students were split into teams of 10, each with a
              student manager who had taken the class previously. <span className='mobile:hidden'>Each team was tasked
              with creating a prototype for an internal job referral app for the HR company, UKG. The project
              requirements were to have the following features implemented:</span>
            </p>,
            <ul className='list-disc ml-5 mt-2 leading-relaxed mobile:hidden' key='b'>
              <li>View listings, leave referral</li>
              <li>Search/filter listings</li>
              <li>Manager create/delete listings</li>
              <li>Manager view referrals</li>
            </ul>,
            <p className="leading-loose mt-2 mobile:hidden" key='c'>
              My team chose to go with React.js, Express and PostgreSQL for our tech stack, and a
              &quot;neumorphic&quot; design for the frontend.
            </p>
          ]}
          isVideo={false}
          halfWidth={false}
          links={[
            { text: 'View Heroku deployment.', url: 'https://job-listing-tool-320.herokuapp.com', ext: true },
            { text: 'View source on GitHub.', url: 'https://github.com/elinottonson/job-listing-tool', ext: true }
          ]}
          bgDarkness={70}
        />

        <MediaItem 
          title='04. Our House Bot'
          imageSrc='/bg/bg-ourhousebot.PNG'
          imagePos='object-top'
          date='2020.'
          description={[
            <p className="leading-relaxed" key='a'>
              <span className='font-mono font-bold italic'>Our House Bot</span> &nbsp;is a Discord bot I created for
              me and my friends&apos; private server. I started the project as a way to practice the JavaScript
              principles I learned in CS220 - Programming Methodology at UMass Amherst.
              <span className='mobile:hidden'> Here are some of the main features I&apos;ve implemented:</span>
            </p>,
            <ul className='list-disc ml-5 mt-2 mobile:hidden' key='b'>
              <li>
                Polls - live updating user-created polls
              </li>
              <li>
                Recruiting - People can &quot;sign up&quot; for an event by reacting to an embed.
              </li>
              <li>
                PC Specs - Using <span className='font-mono italic'>!specs</span> and&nbsp;
                <span className='font-mono italic'>!setspecs</span>, users can set their PC specs using a
                specified&nbsp;
                <Link href='https://pcpartpicker.com/'>
                  <a target='_blank' className='font-semibold hover:underline hover:cursor-pointer'>PCPartpicker</a>
                </Link>
                &nbsp;list, and view other users&apos; PC specs.
              </li>
              <li>
                Random Number Generator - Using <span className='font-mono italic'>!rng</span>, a user can make the bot
                print out a random number in a specified range.
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
            { text: 'View source on GitHub.', url: 'https://github.com/pokeblokdude/ourhouse-bot', ext: true }
          ]}
          bgDarkness={70}
        />

        <div className='w-[95%] flex flex-col mt-10'>
          <h2 className="pl-1 font-mono">05. This Website :)</h2>
          <p className="text-sm text-neutral-400 font-mono mb-2 ml-4 mt-2 w-full max-w-[1366px] self-center">
            Dec. 2021 (ongoing)
          </p>
          <Link href='https://github.com/pokeblokdude/portfolio-site-next'>
            <a
              target='_blank'
              className='font-mono hover:underline hover:cursor-pointer ml-2 mt-[-8px] w-fit text-neutral-400'
            >
              View source on GitHub.
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Code
