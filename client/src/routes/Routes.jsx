import React from 'react'
import {Routes as R, Route } from 'react-router-dom'

import Main from '../pages/Main'
import Movie from '../pages/Movie'
import List  from '../pages/List'

const Routes = () => {
  return (
        <R>
            <Route path='/' element={<Main />}/>
            <Route path='/movies/:movieId' element={<Movie/>}/>
            <Route path='/list' element={<List/>}/>
        </R>
  )
}

export default Routes
