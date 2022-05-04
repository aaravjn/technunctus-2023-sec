import React from 'react'
import Head from "next/head"
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import Link from "next/link"
import Tilt from 'react-parallax-tilt';
import sponsors from '../../utils/sponsors';
import Card from '../../components/Card';
import { motion } from 'framer-motion';
import Image from "next/image"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Sponsors = () => {
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>
                    Sponsors - Technunctus
                </title>
            </Head>
            <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>Sponsors</p>
            <motion.div
                className="mt-8">
                <Tilt>
                    <div className="mb-20 mx-20 p-20 rounded gradientBorder bg-black grid place-items-center">
                        <div className="text-center text-2xl sm:text-3xl">
                            <p>Coding Partner</p>
                            <div>
                                <Link
                                    href="https://www.geeksforgeeks.org/"
                                >
                                    <a
                                        target="_blank"
                                        className='flex justify-center text-6xl sm:text-7xl m-4'>
                                        <div className="relative h-auto  w-40">

                                            <Image
                                                src="/static/teamheads/gfg.png"
                                                alt="GFG LOGO"
                                                layout="responsive"
                                                height={1}
                                                width={2}
                                                objectFit="contain"
                                            />
                                        </div>
                                        <p className="ml-4 font-semibold">GFG</p>
                                    </a>
                                </Link>
                                <p>Don&apos;t Learn Alone
                                    Be the &apos;Pro&apos; in the Programming</p>
                                <ul className='grid gap-4 grid-cols-5 mt-4 mx-40'>
                                    <li>
                                        <Link
                                            href="https://www.geeksforgeeks.org/"
                                            passHref={true}
                                        >
                                            <motion.a
                                                className="hover:gradientText"><LanguageIcon /></motion.a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.linkedin.com/company/geeksforgeeks"
                                            passHref={true}
                                        >
                                            <motion.a
                                                className="hover:gradientText"><LinkedInIcon /></motion.a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://twitter.com/geeksforgeeks"
                                            passHref={true}
                                        >
                                            <motion.a
                                                className="hover:gradientText"><TwitterIcon /></motion.a>
                                        </Link>
                                    </li>          <li>
                                        <Link
                                            href="https://www.facebook.com/geeksforgeeks.org/"
                                            passHref={true}
                                        >
                                            <motion.a
                                                className="hover:gradientText"><FacebookIcon /></motion.a>
                                        </Link>
                                    </li>          <li>
                                        <Link
                                            href="https://www.instagram.com/accounts/login/?next=/geeks_for_geeks/"
                                            passHref={true}
                                        >
                                            <motion.a
                                                className="hover:gradientText"><InstagramIcon /></motion.a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, amount: "100" }}
                margin="200"
                amount="200"
                className="grid sm:grid-cols-4 gap-8 mx-20 mb-20">
                {/* {
                        sponsors.map((item,key)=>{
                            return(
                                <Card key={key} {...item} aspectRatioImage={0.5} buttonText={"View"}/>
                            )
                        })
                    } */}
            </motion.div>
        </div>
    )
}

export default Sponsors