import React, { useEffect, useState } from 'react';
import styles from '../../styles/Gallery.module.css'
import _ from "lodash"
import { useRouter } from 'next/router';
import DashboardPost from "../../components/DashboardPost"
import Head from "next/head"
import {isMobile,MobileView} from "react-device-detect"
import { motion, useViewportScroll, useTransform, useMotionValue, useVelocity, AnimatePresence } from "framer-motion"
import data from "../../utils/highlights"

const Gallery = () => {
    
    const { scrollYProgress,scrollY } = useViewportScroll()

    const top = useTransform(scrollYProgress, [0, 1], ["0", "-25%"]);
    
    return(
        <div className="grid relative"
        >
        <Head>
            <title>
                Highlights - Technunctus
            </title>
        </Head>

        <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>Highlights</p>


        <motion.div 
            className="pb-12 grid place-items-center"
        >
            <motion.div  className={`${styles.galleryRow}`}
                >
                {
                    new Array(isMobile?1:4).fill("").map((arr,key)=>{
                        return(
                            <motion.div key={key} className={`${styles.galleryColumn} relative`}
                                style={{top:key%2===1?top:0}}
                            >
                                {
                                    data && data.slice((data.length/(isMobile?1:4))*key,(data.length/(isMobile?1:4))*(key+1)).map((ind,index)=>{
                                        return(
                                            <div key={index} className={`${styles.galleryImage} relative`}
                                            >
                                                <div className={styles.galleryImg}>
                                                    <DashboardPost type={ind.type} item={ind.url}/>
                                                </div>       
                                                <p className={styles.galleryAbsHeight}>{ind.title}</p>
                                                <div className={`${styles.galleryImgControls} text-xs p-4`}>
                                                    {ind.description}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </motion.div>

        </div>
    )
    
};

export default Gallery;


