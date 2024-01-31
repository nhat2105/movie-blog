import React from 'react'

import logo from '../assets/images/components/compilations/FELICE.png'
import line from '../assets/images/components/compilations/Arrow 2.png'

const ListsLogo = () => {
  return (
    <div className='lists-logo'>
      <div className="lists-logo-container">
          <img className='lists-logo-img' src={logo} alt=''/>
          <h3 style={{textAlign: 'center', color:'white', fontWeight: '900', fontSize: '90px', marginTop: '70px'}}>COMPILATIONS</h3>
          <img className='lists-logo-line' src={line} alt=''/>
      </div>  
    </div>
  )
}

export default ListsLogo
