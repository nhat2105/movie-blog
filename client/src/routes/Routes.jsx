import React from 'react'
import {Routes as R, Route } from 'react-router-dom'

import Main from '../pages/Main'
import Movie from '../pages/MoviePost'
import Shots from '../pages/Shots'
import List  from '../pages/List'

const Routes = () => {
  return (
        <R>
            <Route path='/' element={<Main />}/>
            <Route path='/movies/:movie' element={<Movie/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/movies/:movie/:shot' element={<Shots />}/>
        </R>
  )
}

export default Routes
