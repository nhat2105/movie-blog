import React from 'react'
import {Routes as R, Route } from 'react-router-dom'

import Main from '../pages/Main'
import Movie from '../pages/Movie'
import Lists  from '../pages/Lists'
import MovieList from '../pages/MovieList'
import Post from '../pages/Post'

const Routes = () => {
  return (
        <R>
            <Route path='/' element={<Main />}/>
            <Route path='/movies/:movieId' element={<Movie/>}/>
            <Route path='/lists/' element={<Lists/>}/>
            <Route path='/posts/' element={<Post/>}/>
            <Route path='/lists/:listId' element = {<MovieList />} />
        </R>
  )
}

export default Routes
