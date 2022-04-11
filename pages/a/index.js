import React from 'react'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from "next/head"
import Image from 'next/image'



const About = () => {
  return (
    <div>
      <Head>
        <title>
          Events - Technunctus
        </title>
      </Head>
      <body>

        <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>About Us</p>


        <div className="my-12 sm:mb-40 grid place-items-center">
          <div className="grid mx-8 sm:mx-40 sm:grid-cols-[0.5fr,0.6fr] justify-center items-start"
          >

            <div className='sm:sticky sm:top-0 h-80 gradientRightBorder sm:w-full' >
              <Image
                src="/static/about_img.png"
                alt="WE Logo"
                layout='fill'
                objectFit='contain'
                className=''
              />
            </div>


            <div className="sm:p-2 text-center sm:text-left">
              <motion.p className="text-2xl sm:text-3xl font-bold text-white"  > Who are we?</motion.p>
              <motion.p className="text-white text-sm">
                <p className='gradientText my-4'>About IIT Jammu</p>
                Established in 2016, The prestigious institute of IIT - Jammu has rightfully earned the title of the fastest prospering amongst the budding IITs. With its unparalleled vigour and a thirst to prove its mettle, the institute has swiftly risen up the ranks to lead its fellow tertiary kin
                Unbounded by constraints of any pre- established agendas whilst nurturing the pioneers of the near future, Indian Institute of Technology Jammu commands complete freedom of moulding and reshaping its own fate, a belief that the establishment is a staunch supporter of. With this idea in our hearts and the will in our minds, we inch consistently towards being the most reputed college in the country. Thriving for excellence and quality, IIT-Jammu prides itself in aiding the development of the brightest minds of the nation whilst upholding its values of trust, integrity and growth.
                IIT Jammu is walking on the path of becoming one of the biggest institutions of the country and soon will reach its destination.
                We welcome you to our campus with all our heart to be a part of the IIT Jammu family!
              </motion.p>
              <motion.p className="text-white text-sm mb-4">
                <p className='gradientText my-4'>About the Fest</p>
                Technunctus&apos;22 is a platform for students to manifest their talents by working on challenging problems and to learn and grow from the various talks given by industry experts on contemporary topics and issues. It boasts having more than two dozen events from a multitude of fields like robotics, astronomy, finance, programming and so forth spread across 3 days of engagement, excitement and illumination. It is a pan-India event with participants from all IITs and NITs as well as reputed colleges from Jammu and Kashmir.
              </motion.p>
              <Link
                href="/t"
              >
                <a className="gradientButton inline-block mt-4">Team Heads</a>
              </Link>
              <Link
                href="/h"
              >
                <a className="gradientButton inline-block mt-4 ml-2">Gallery</a>
              </Link>

            </div>


          </div>
        </div>

      </body>





    </div>

  )
};

export default About