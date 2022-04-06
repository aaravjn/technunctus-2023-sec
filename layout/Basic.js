import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from 'next/head'


const Basic = ({children}) => {
  return (
    <div>
      <Head>
        <title>Technunctus</title>
        <link rel="icon"  href="/static/logo.png"/>
      </Head>

        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Basic