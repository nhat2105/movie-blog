import React from 'react'
import {Routes as R, Route } from 'react-router-dom'

import Main from '../pages/Main'
import Movie from '../pages/Movie'
import Lists  from '../pages/Lists'
import MovieList from '../pages/MovieList'
import Posts from '../pages/Posts'
import MoviePost from '../pages/MoviePost'
import Collection from '../pages/Collection'

const Routes = () => {
  return (
        <R>
            <Route path='/' element={<Main />}/>
            <Route path='/movies/:movieId' element={<Movie/>}/>
            <Route path='/lists/' element={<Lists/>}/>
            <Route path='/posts/' element={<Posts/>}/>
            <Route path='/posts/:postId' element={<MoviePost/>}/>
            <Route path='/lists/:listId' element = {<MovieList />} />
            <Route path='/collection' element = {<Collection />} />
        </R>
  )
}

export default Routes
