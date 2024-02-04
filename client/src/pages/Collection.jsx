import React, {useState, useEffect} from 'react'
import {apiAllMovies} from '../api/movie.api'
import MovieCard from '../components/MovieCard'
import ListsLogo from '../components/ListsLogo'

const Collection = () => {
  const [allMovies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const m = await apiAllMovies();
        setMovies(m);
        console.log(m);

      } catch (error) {
        console.log("Error front end: " + error);
      } 
    };

    fetchData();
  }, []);

  return (
    <div className="movie-card-list-wrapper" style={{backgroundColor:"black"}} >
      <ListsLogo text="COLLECTION" />
      <div className='movie-cards-list-container'>
        {allMovies && allMovies.map((movie) => (
          <MovieCard id={movie.mid} poster ={movie.poster}/>
        ))}
      </div>
    </div>
  )
}

export default Collection
