import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieComponent = () => {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        axios.get('/movies/1')  
            .then(response => {
                setMovieData(response.data);
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
            });
    }, []);

    return (
        <div>
            {movieData && (
                <div>
                    <h1>{movieData.title}</h1>
                    <p>{movieData.description}</p>
                </div>
            )}
        </div>
    );
};

export default MovieComponent;
