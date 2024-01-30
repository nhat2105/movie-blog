import React, { useEffect, useState } from 'react';
import MovieDesc from '../components/MovieDescription';
import MovieRef from '../components/MovieRef';
import MovieGallery from '../components/MovieGallery';
import apiMovie from '../api/movie.api'
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [movieGallery, setMovieGallery] = useState([]);
  const [movieRef, setMovieRef] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiMovie({movieId, code: "description"});
        setMovieData(data);

        const gallery = await apiMovie({movieId, code: "gallery"});
        setMovieGallery(gallery);    
        
        const ref = await apiMovie({movieId, code: "ref"});
        setMovieRef(ref);
         

      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    
    fetchData();

  }, [movieId]);

  return (
    <div>
      {movieData && <MovieDesc {...movieData} />}
      {movieGallery.urls && <MovieGallery urls = {movieGallery.urls} />}
      {movieRef.urls && <MovieRef urls={movieRef.urls} />}

    </div>
  );
};

export default MoviePage;
