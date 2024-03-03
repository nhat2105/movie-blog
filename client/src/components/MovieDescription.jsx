import React from 'react'
import MovieCard from './MovieCard'

const MovieDescription = ( {title, id, poster, review, rating} ) => {
  return (
    <div className="movie-desc">
      <div className="movie-details"> 
        <div className='movie-desc-review-container'>
        <h1 className='movie-desc-title'>{title}</h1>
          <h2 style ={{fontSize: "25px", fontStyle: 'italic', color: '#20DD33'}}>Mini Review</h2>
            <p className='movie-desc-review' dangerouslySetInnerHTML={{ __html: review }} />
            <h2 style ={{fontSize: "25px", fontStyle: 'italic', color: '#20DD33', textAlign: 'center'}}>Rating:  
              <text style={{color: 'white'}}> {rating} </text> </h2>
        </div>
        <MovieCard id = {id} poster = {poster} />
      </div>
    </div>
  
  )
}

export default MovieDescription
