import React from 'react'
import Head from "next/head"
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import Link from "next/link"
import Tilt from 'react-parallax-tilt';
import sponsors from '../../utils/sponsors';
import Card from '../../components/Card';
import { motion } from 'framer-motion';

const Sponsors = () => {
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>
                    Sponsors - Technunctus
                </title>
            </Head>
            <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>Sponsors</p>
            <p className='mb-20 text-center text-8xl font-semibold'>Coming soon</p>
                {/* <motion.div 
                    className="mt-8">
                    <Tilt>
                        <div className="mb-20 mx-20 p-20 rounded gradientBorder bg-black grid place-items-center">
                            <div className="text-center text-2xl sm:text-3xl">
                                <p>Title Sponsors</p>
                                <div>
                                    <Link
                                        href="/titlesponsorswebsite"
                                    >
                                        <a className='flex justify-center text-6xl sm:text-7xl m-4'>
                                            <KeyboardCommandKeyIcon className="text-6xl sm:text-7xl text-[#39ff14]" />
                                            <p className="ml-4 font-semibold">Android</p>
                                        </a>
                                    </Link>
                                    <p>Marsh McLennan Global Services India Pvt Ltd</p>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </motion.div>
                <motion.div 
                    whileInView={{opacity:1,amount:"100"}}
                    margin="200"
                    amount="200"
                    className="grid sm:grid-cols-4 gap-8 mx-20 mb-20">
                    {
                        sponsors.map((item,key)=>{
                            return(
                                <Card key={key} {...item} aspectRatioImage={0.5} buttonText={"View"}/>
                            )
                        })
                    }
                </motion.div> */}
        </div>
    )
}

export default Sponsors