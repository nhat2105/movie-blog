import React from 'react'
import {Routes as R, Route } from 'react-router-dom'

import Main from '../pages/Main'
import Movie from '../pages/Movie'
import Shots from '../pages/Shots'
import Catalog from '../pages/Catalog'

const Routes = () => {
  return (
        <R>
            <Route path='/' element={<Main />}/>
            <Route path='/catalog/:movie' element={<Movie/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/catalog/:movie/:shot' element={<Shots />}/>
        </R>
  )
}

export default Routes
