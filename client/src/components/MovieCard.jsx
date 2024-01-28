import React from 'react'
import {Link} from 'react-router-dom'

const MovieCard = ( {title, id, poster, review} ) => {
  return (
 
    <div className="movie-card">
      
      <div className="movie-details"> 
        <div className='movie-card-review-container'>
        <h1 className='movie-card-title'>{title}</h1>
          <p style ={{fontSize: "25px", color: 'white', fontStyle: 'italic'}}>Mini Review</p>
          <p className='movie-card-review'>{review}</p>
        </div>
        <div className="movie-card-frame">
          <Link to={`/movies/${id}`} key={id}>
            <img src={poster} alt="" className='movie-card-poster'/>
          </Link>
        </div>
      </div>
    </div>
  
  )
}

export default MovieCard
