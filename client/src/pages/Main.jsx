import React from 'react'
import bg from '../assets/images/components/main_center_logo2.png'
import more_btn from "../assets/images/components/more_button.png"
import arr from "../assets/images/components/arrow.png"

const Main = () => {
  return (
      <div className = 'main-container'>
        <img className = "main_bg_img" src={bg} alt= ""/>  
        <button className = 'more_btn'>
          <img src={more_btn} alt= ""/>
        </button>
        <img className='main-scroll-arr' src={arr} alt =''/>

      </div>
  )
}

export default Main
