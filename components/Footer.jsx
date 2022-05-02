import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="p-8 sm:p-20 grid grid-cols-1 sm:grid-cols-[0.75fr,0.25fr]">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          <ul>
            <li>
              <Link
                href="/"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">Home</motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="/a"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">About Us</motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="/e"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">Events</motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="/s"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">Sponsors</motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="/h"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">Highlights</motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="/t/night"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">TechNights</motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="/policy"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">Privacy Policy</motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">Terms and Conditions</motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="/cancellation"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">Cancellation policy</motion.a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="m-2 italic text-sm">Developer&apos;s github profile</li>
            <li>
              <Link
                href="https://github.com/Spider8019"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">spider8019</motion.a>
              </Link>
            </li>          <li>
              <Link
                href="https://github.com/ashutoshc8101"
                passHref={true}
              >
                <motion.a
                  className="hoverLink m-2 ">ashutoshc8101</motion.a>
              </Link>
            </li>

          </ul>
          {/* <ul>
              <li>
                <Link
                  href="/h"
                  passHref={true}
                >
                  <motion.a
                    onClick={() => setShowNav(false)}
                    className="hoverLink m-2 ">Highlights</motion.a>
                </Link>
              </li>
              <li>
                <Link
                  href="/h"
                  passHref={true}
                >
                  <motion.a
                    onClick={() => setShowNav(false)}
                    className="hoverLink m-2 ">Highlights</motion.a>
                </Link>
              </li>          <li>
                <Link
                  href="/h"
                  passHref={true}
                >
                  <motion.a
                    onClick={() => setShowNav(false)}
                    className="hoverLink m-2 ">Highlights</motion.a>
                </Link>
              </li>          <li>
                <Link
                  href="/h"
                  passHref={true}
                >
                  <motion.a
                    onClick={() => setShowNav(false)}
                    className="hoverLink m-2 ">Highlights</motion.a>
                </Link>
              </li>          <li>
                <Link
                  href="/h"
                  passHref={true}
                >
                  <motion.a
                    onClick={() => setShowNav(false)}
                    className="hoverLink m-2 ">Highlights</motion.a>
                </Link>
              </li>
            </ul> */}
        </div>
        <div className="p-4 mt-4 bg-[#2e2e2e] rounded sm:bg-transparent sm:p-0 sm:mt-0">
          <Image
            src="/static/logo.png"
            alt="Footer Head Logo"
            height="80"
            width="80"
          />
          <b className='mt-4 text-3xl font-bold block'>Technunctus</b>
          <b>Indian Institute of Technology, Jammu</b>
          <p className='text-sm'>Jagti, NH-44 , PO Nagrota<br />Jammu - 181 221 J&K,  India<br />Tel.: 0191-2570381 </p>
          <ul className='grid gap-4 grid-cols-8 mt-4'>
            <li>
              <Link
                href="https://www.iitjammu.ac.in/"
                passHref={true}
              >
                <motion.a
                  className="hover:gradientText"><LanguageIcon /></motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/school/iitjammu/?originalSubdomain=in"
                passHref={true}
              >
                <motion.a
                  className="hover:gradientText"><LinkedInIcon /></motion.a>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/IITJammu?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                passHref={true}
              >
                <motion.a
                  className="hover:gradientText"><TwitterIcon /></motion.a>
              </Link>
            </li>          <li>
              <Link
                href="https://www.facebook.com/IITJammuOfficial/"
                passHref={true}
              >
                <motion.a
                  className="hover:gradientText"><FacebookIcon /></motion.a>
              </Link>
            </li>          <li>
              <Link
                href="https://www.instagram.com/technunctus/"
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
  )
}

export default Footer