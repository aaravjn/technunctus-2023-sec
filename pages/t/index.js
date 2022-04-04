import React from 'react'
import Head from "next/head"
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Profile from '../../components/Profile';
import teamHeadsList from "../../utils/profile.js"
import { teamMembersContainer,teamHead } from '../../utils/framer';

const TeamHeads = () => {
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>
                    Team Heads - Technunctus
                </title>
            </Head>
            <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>Team Heads</p>
            <motion.div className="mt-8 mb-20 grid place-items-center">
                <div>
                    <motion.div 
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={teamMembersContainer}
                        className='grid sm:grid-cols-3 gap-8 mx-8 sm:mx-20'>
                        {teamHeadsList.map((item, index) => {
                            return (
                                <Tilt key={item.key}>
                                    <motion.div variants={teamHead}>
                                        <Profile {...item} />
                                    </motion.div>
                                </Tilt>
                            )
                        })}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default TeamHeads