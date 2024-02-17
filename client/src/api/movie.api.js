import axios from 'axios';

const base_url = 'http://localhost:3001/api';

const fetchMovieData = async (movieId) => {
  try {
    const response = await axios.get(`${base_url}/movies/${movieId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching movie data:', error.message);
    throw error;
  }
};


const fetchMovieShotData = async (movieId) => {
  try {
    const response = await axios.get(`${base_url}/movies/${movieId}/gallery`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching movie shot data:', error.message);
    throw error;
  }
};

const apiAllMovies = async () => {
  try {
    const response = await axios.get(`${base_url}/collection`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching all movies data:', error.message);
    throw error;
  }
};

const fetchMovieRefData = async (movieId) => {
  try {
    const response = await axios.get(`${base_url}/movies/${movieId}/ref`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching movie ref data:', error.message);
    throw error;
  }
};

const apiMovie = async ({movieId, code}) => {
    try {
      if (code === "description"){
        const movieData = await fetchMovieData(movieId);
        const title = movieData.title
        const review = movieData.description
        const poster = movieData.poster
        const rating = movieData.rating
        const id = movieId
        return { title, review, poster, id, rating};
      }
      else if (code === "gallery"){
        const urls = await fetchMovieShotData(movieId);
        return {urls};
      }

      else{
        const urls = await fetchMovieRefData(movieId);
        return {urls};
      }

    } catch (error) {
      console.error('Error in apiMovie:', error);
    }
};


export {apiMovie, apiAllMovies};
