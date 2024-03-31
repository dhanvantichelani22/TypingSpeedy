import React from 'react'
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import TypingBox from "../Components/TypingBox"

const HomePage = () => {
  return (
    <div className="canvas">
        {/* <div className="test">testing</div> */}
        <Header/>
        <TypingBox />
        <Footer />
      </div>
  )
}

export default HomePage