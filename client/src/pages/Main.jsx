import React from 'react'
import bg from '../assets/images/components/wallpaper2.jpg'

const Main = () => {
  return (
    <div className = 'main-container'>
      <p className='main-intro-desc'>
        Welcome! <br/> And... <br/> Let's chat <br/>about <br/> movies
      </p>
      <img className = "main_bg_img" src={bg} alt= ""/>  
    </div>
  )
}

export default Main
