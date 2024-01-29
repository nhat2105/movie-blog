import React from 'react'
import {Link} from 'react-router-dom'

const MovieCard = ( {title, id, poster, review} ) => {
  return (
 
    <div className="movie-card">
      
      <div className="movie-details"> 
        <div className='movie-card-review-container'>
        <h1 className='movie-card-title'>{title}</h1>
          <h2 style ={{fontSize: "25px", fontStyle: 'italic', color: '#20DD33'}}>Mini Review</h2>
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
