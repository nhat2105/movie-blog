import React from 'react'
import MovieCard from './MovieCard'

//items: list of movies containing mid and poster as attributes
const MovieList = ({items}) => {
    return (
        <div className='movie-list'>
            <div className="movie-list-container">
                {items.map((item, index) => (
                <div className='movie-list-item' key={index}>
                    <MovieCard id ={item.mid} poster={item.poster} />
                </div>
                ))}
            </div>
        </div>
  )
}

export default MovieList
