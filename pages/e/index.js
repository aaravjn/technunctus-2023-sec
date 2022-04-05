import React from 'react'
import Card from '../../components/Card'
import events from "../../utils/events"
import Head from "next/head"
import { motion,AnimatePresence } from 'framer-motion'

const Events = () => {

  const [filter,setFilter]=React.useState(0)

  return (
    <div>
        <Head>
            <title>
                Events - Technunctus
            </title>
        </Head>
        <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>Events</p>

        <div className='mb-20 mt-[32px]'>
            <div className='mx-8 sm:mx-20 mb-12 flex justify-end flex-wrap'>
                <p onClick={()=>setFilter(0)} className={`${filter===0&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>All</p>
                <p onClick={()=>setFilter(1)} className={`${filter===1&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>Coding Club</p>
                <p onClick={()=>setFilter(2)} className={`${filter===2&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>Cybersecurity</p>
                <p onClick={()=>setFilter(3)} className={`${filter===3&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>AI/ML</p>
                <p onClick={()=>setFilter(4)} className={`${filter===4&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>Tech Nights</p>
            </div>
            <motion.div layout className='grid sm:grid-cols-4 gap-8 mx-8 sm:mx-20'>
                <AnimatePresence>
                    {events.filter(x=>x.value>filter).map((item,index)=>{
                    return(
                        <Card key={index} {...item}/>
                    )
                    }) }
                </AnimatePresence>
            </motion.div>
        </div>
    </div>
  )
}

export default Events