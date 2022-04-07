import React from 'react'
import Head from "next/head"
import Image from "next/Image"

const Night = () => {
  return (
    <div>
            <Head>
                <title>
                    Tech Nights - Technunctus
                </title>
            </Head>
            <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>Tech Nights</p>
            <div className="mt-12 mb-20">
                <div className='relative'>
                    <p className='text-center text-8xl font-semibold'>Coming soon</p>
                 </div>
            </div>
    </div>
  )
}

export default Night