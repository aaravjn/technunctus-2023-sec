import React from 'react'
import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"
import { xSlide, negxSlide } from '../../utils/framer'
import Link from 'next/link'

const Night = () => {
  return (
    <div>
      <Head>
        <title>
          Tech Nights - Technunctus
        </title>
      </Head>
      <div className="">
        <div>
          <div className="relative  w-full" style={{ height: "calc(100vh - 92px)" }}>
            <Image
              src="https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1389&q=80"
              layout="fill"
              alt="Landers page"
              objectFit='cover'
              objectPosition='top'
            />
            <div className="absolute bottom-0 left-0 z-40 p-4">
              <motion.p
                initial="initial"
                animate="animate"
                variants={xSlide}
                className="text-8xl font-semibold font-white">The Landers</motion.p>
            </div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={negxSlide}

              className="absolute text-right top-0 right-0 z-40 p-4">
              <p> <b>Date : </b>7<sup>th</sup> May <br /><b>Venue : </b>College Ground</p>
              <Link href="tel:6388115067" passHref={true}>
                <motion.a
                  className="inline-block gradientButton mt-2 font-semibold font-white">For Pass Contact <br /> +91 6388115067</motion.a>
              </Link>
            </motion.div>
          </div>
          <div className="relative  w-full" style={{ height: "calc(100vh - 92px)" }}>
            <Image
              src="https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWRtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
              layout="fill"
              alt="Landers page"
              objectFit='cover'
              objectPosition='top'
            />
            <div className="absolute bottom-0 left-0 z-40 p-4">
              <motion.p
                initial="initial"
                animate="animate"
                variants={xSlide}
                className="text-8xl font-semibold font-white">BDM <span className='text-6xl'>(Bollywood Dance Music)</span></motion.p>
            </div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={negxSlide}

              className="absolute text-right top-0 right-0 z-40 p-4">
              <p><b>Date : </b>8<sup>th</sup> May <br /> <b>Venue : </b>College Ground</p>
              <Link href="tel:6388115067" passHref={true}>
                <motion.a
                  className="inline-block gradientButton mt-2 font-semibold font-white">For Pass Contact <br /> +91 6388115067</motion.a>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Night