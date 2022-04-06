import '../styles/globals.css'
import Layout from "../layout/Basic"
import {AnimatePresence,motion} from "framer-motion"
import {pageAnimation} from "../utils/framer"

function MyApp({ Component, pageProps,router }) {
  return(
    <Layout>
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
