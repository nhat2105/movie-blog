import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({id, poster}) => {
  return (
    <div className="movie-card-frame">
        <Link to={`/movies/${id}`} key={id}>
            <img src={poster} alt="" className='movie-card-poster'/>
        </Link>
    </div>
  )
}

export default MovieCard
