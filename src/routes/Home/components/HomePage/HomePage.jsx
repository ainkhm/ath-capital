import React from 'react'

import Navbar from './../Navbar'
import Main from './../Main'
import Body from './../Body'
import Footer from './../Footer'

function Home() {

  return (
    <div className='root'>
      <div id="main_background" />
      <div className="container">
        <Navbar />
        <Main />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Home
