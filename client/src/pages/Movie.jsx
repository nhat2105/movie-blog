import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import apiConfigs from '../api/configs.api'
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiConfigs({ movieId });
        console.log("received front end: " + data)
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    
    fetchData();

  }, [movieId]);

  return (
    <div>
      {movieData && <MovieCard {...movieData} />}
    </div>
  );
};

export default MoviePage;
