import React from 'react'
// import Header from './header/Header'
import HomeBg from './background/HomeBg'
import MainBody from './bodysection/MainBody'
import Partner from './partner/Partner'
import Footer1 from './footer/Footer1'
import Header2 from './header/header2/Header2'

function Home() {
  return (
    <div className='m-0 p-0'  style={{fontFamily:'"Times New Roman", Times, serif'}}>
      <Header2></Header2>
      {/* <Header></Header> */}
      <HomeBg></HomeBg>
      <MainBody></MainBody>
      <Partner></Partner>
      <Footer1></Footer1>
      
    </div>
  )
}

export default Home
