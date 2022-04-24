import '../styles/globals.css'
import Layout from "../layout/Basic"
import {AnimatePresence,motion} from "framer-motion"
import {pageAnimation} from "../utils/framer"
import Head from "next/head"

function MyApp({ Component, pageProps,router }) {
  return(
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/static/logo.png" />
        <meta charset="UTF-8"/>
        <meta name="description" content="The IIT Jammu family takes immense pleasure in inviting you all to the third edition of our Annual Tech Fest, Technunctus’21, which is scheduled from 17th-18th April 2021 in complete Online Mode"/>
        <meta name="keywords" content="TECHFEST, spider8019, IIT JAMMU, TECHNUNCTUS"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
      </Head>
      <AnimatePresence exitBeforeEnter>

         <motion.div
            key={router.route}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageAnimation}
            transition={pageAnimation}
          >
           <Component {...pageProps} />
         </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
