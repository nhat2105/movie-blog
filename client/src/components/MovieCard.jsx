import React from 'react'
import {Link} from 'react-router-dom'

const MovieCard = ( {movie} ) => {
  return (
    <Link to={`/movies/${movie.id}`} key={movie.id}>
    <div className="index-movie-card">
      <img src={movie.poster_url} alt={movie.title} className="index-movie-poster" />
      <div className="index-movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </div>
    </div>
  </Link>
  )
}

export default MovieCard
