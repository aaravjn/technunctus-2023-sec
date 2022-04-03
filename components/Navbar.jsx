import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarLeft,navbarRight,navbarLinksContainer,navbarLink } from '../utils/framer';
import { useRouter } from 'next/router';

const Navbar = () => {

  const router=useRouter()
  console.log(router)
  const [showNav,setShowNav]=React.useState(false)
  return (
    <>
        <AnimatePresence>
        {
            showNav&&
            <motion.div className="fixed z-30 h-screen w-full grid sm:grid-cols-2 shadow-3xl">
                <motion.div 
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={navbarLeft}
                    className='hidden sm:block relative gradientRightBorder'
                    >
                      <Image 
                       src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                       alt="Navbar Cover"
                       layout="fill"
                      />
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={navbarRight}
                    className='grid place-items-center bg-[#000]'>
                    <IconButton className="absolute top-4 right-4 text-white" onClick={()=>setShowNav(!showNav)}>
                        <CloseIcon/>
                    </IconButton>
                    <div>
                        <motion.div 
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={navbarLinksContainer}
                            className='flex flex-col '>
                            <Link
                            href="/"
                            passHref={true}
                            >
                                <motion.a 
                                    onClick={()=>setShowNav(false)}
                                    variants={navbarLink} className={`${router.asPath==="/"?"activeLink":"hoverLink"}  m-2 text-4xl`}>Home</motion.a>                       
                            </Link>
                            <Link
                            href="/a"
                            passHref={true}
                            >
                                <motion.a 
                                    onClick={()=>setShowNav(false)}
                                    variants={navbarLink} className={`${router.asPath==="/a"?"activeLink":"hoverLink"}  m-2 text-4xl`}>About Us</motion.a>                       
                            </Link>
                            <Link
                            href="/e"
                            passHref={true}
                            >
                                <motion.a 
                                    onClick={()=>setShowNav(false)}
                                variants={navbarLink} className={`${router.asPath==="/e"?"activeLink":"hoverLink"}  m-2 text-4xl`}>Events</motion.a>                       
                            </Link>
                            <Link
                            href="/s"
                            passHref={true}
                            >
                                <motion.a 
                                    onClick={()=>setShowNav(false)}
                                    variants={navbarLink} className={`${router.asPath==="/s"?"activeLink":"hoverLink"}  m-2 text-4xl`}>Sponsors</motion.a>                       
                            </Link>
                            <Link
                            href="/h"
                            passHref={true}
                            >
                                <motion.a 
                                    onClick={()=>setShowNav(false)}
                                    variants={navbarLink} className={`${router.asPath==="/h"?"activeLink":"hoverLink"}  m-2 text-4xl`}>Highlights</motion.a>                       
                            </Link>
                        </motion.div>
                    </div>

                </motion.div>

            </motion.div>    
        }
        </AnimatePresence>
        <div className='flex justify-between p-4 items-center bg-black'>
            <Image
            src="/static/logo.png"
            alt="TECH. LOGO"
            height="60"
            width="60"
            />
            <IconButton onClick={()=>setShowNav(!showNav)}>
                <MenuIcon className="text-white"/>
            </IconButton>
        </div>
    </>
  )
}

export default Navbar