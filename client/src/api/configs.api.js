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

const apiConfigs = async ({ movieId }) => {
  try {
    const movieData = await fetchMovieData(movieId);
    const title = movieData.title
    const review = movieData.review
    const poster = movieData.poster
    const id = movieId

    return { title, review, poster, id };
  } catch (error) {
    console.error('Error in apiConfigs:', error);
  }
};

export default apiConfigs;
