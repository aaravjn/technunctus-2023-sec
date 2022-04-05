import React from 'react'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'


const About = () => {
  return (
    <div>
      <div className=""></div>
      <div className="sm:p-20 text-center sm:text-center">
        <motion.p className="text-xl sm:text-3xl text-white">Established in 2016, The prestigious institute of IIT - Jammu has rightfully earned the title of the fastest prospering amongst the budding IITs. With its unparalleled vigour and a thirst to prove its mettle, the institute has swiftly risen up the ranks to lead its fellow tertiary kin.
          Unbounded by constraints of any pre- established agendas whilst nurturing the pioneers of the near future, Indian Institute of Technology Jammu commands complete freedom of moulding and reshaping its own fate, a belief that the establishment is a staunch supporter of. With this idea in our hearts and the will in our minds, we inch consistently towards being the most reputed college in the country. Thriving for excellence and quality, IIT-Jammu prides itself in aiding the development of the brightest minds of the nation whilst upholding its values of trust, integrity and growth.
          IIT Jammu is walking on the path of becoming one of the biggest institutions of the country and soon will reach its destination.
          We welcome you to our campus with all our heart to be a part of the IIT Jammu family!</motion.p>
      </div>

    </div>
  )
};

export default About