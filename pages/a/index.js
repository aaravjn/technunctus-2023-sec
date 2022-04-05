import React from 'react'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from "next/head"
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import { bgcolor } from '@mui/material/node_modules/@mui/system'


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


        <div className="mb-12 sm:mb-40 grid place-items-center">
        <div className="grid  sm:grid-cols-[0.5fr,0.6fr] justify-center  items-center "
        >
    
        <div className=' h-80 sm:h-full relative ' >
           
           <Image

             src="/static/about_img.png"
             alt="WE Logo"
             height={"400"}
             width={"400"}
             layout='fill'
             objectFit='contain'
            />      

            
          </div>
         
      
         <div className="sm:p-2 text-center sm:text-left">
          <motion.p className="text-2xl sm:text-3xl font-bold text-white"  > Who are we?</motion.p>
           <motion.p className="text-xl sm:text-xl text-white"> Lorem Ipsum is simply dummy .sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</motion.p>
           
           <Link
                  href="/t"
                >
                  <a className="btn inline-block mt-4">Team Heads</a>
                </Link>
            <Link
                  href="/t"
                >
                  <a className="btn inline-block mt-4 ml-2">Gallery</a>
                </Link>
           
           <ul className='grid gap-8 grid-cols-8 mt-4 d-flex items-center'>
            <li>
              <Link
                href="/h"
                passHref={true}
              >
                <motion.a
                  className="hover:gradientText"><LanguageIcon/></motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="/h"
                passHref={true}
              >
                <motion.a
                  className="hover:gradientText"><TwitterIcon/></motion.a>
              </Link>
            </li>          <li>
              <Link
                href="/h"
                passHref={true}
              >
                <motion.a
                  className="hover:gradientText"><FacebookIcon/></motion.a>
              </Link>
            </li>          <li>
              <Link
                href="/h"
                passHref={true}
              >
                <motion.a
                  className="hover:gradientText"><InstagramIcon/></motion.a>
              </Link>
            </li>          
          </ul>
           
           </div>
           
           
         </div>
         </div>
         
        </body>




        
    </div>

  )
};

export default About