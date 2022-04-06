import React from 'react'
import Card from '../../components/Card'
import events from "../../utils/events"
import Head from "next/head"
import { motion,AnimatePresence } from 'framer-motion'

const Events = () => {

  const [filter,setFilter]=React.useState("all")

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
                <p onClick={()=>setFilter("all")} className={`${filter==="all"&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>All</p>
                <p onClick={()=>setFilter("Coding")} className={`${filter==="Coding"&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>Coding Club</p>
                <p onClick={()=>setFilter("aAstronomy")} className={`${filter==="Astronomy"&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>Astronomy Club</p>
                <p onClick={()=>setFilter("SAE")} className={`${filter==="SAE"&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>SAE</p>
                <p onClick={()=>setFilter("Robo")} className={`${filter==="Robo"&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>Robosapien</p>
                <p onClick={()=>setFilter("Finance")} className={`${filter==="Finance"&&"gradientFilterActive"} my-1 sm:my-0 gradientFilter rounded-full ml-4`}>Finance Club</p>
            </div>
            <motion.div layout className='grid sm:grid-cols-4 gap-8 mx-8 sm:mx-20'>
                <AnimatePresence>
                    {events.filter(x=>x.broughtToYouBy.includes(filter)).map((item,index)=>{
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