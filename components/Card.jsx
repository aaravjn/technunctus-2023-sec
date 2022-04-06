import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { card } from '../utils/framer'

const Card = ({title,image,description,broughtToYouBy,aspectRatioImage=1,buttonText="Register"}) => {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={card}
      layout className={`min-h-80 min-w-60 bg-black overflow-hidden grid grid-cols-1 rounded`}
      style={{gridTemplateRows:aspectRatioImage+"fr 1fr"}}
      >
        <div className="relative">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit='cover'
              objectPosition="center"
            />    
        </div>
        <div className="p-4">
            <p className="gradientText text-xs">{broughtToYouBy.slice(4,)}</p>
            <b>{title}</b>
            <p className="text-sm my-4">{description.slice(0,150)} ...</p>
            <button className='gradientButton'>{buttonText}</button>
        </div>
    </motion.div>
  )
}

export default Card