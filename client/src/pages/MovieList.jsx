import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { useParams, Link } from 'react-router-dom';
import apiList from '../api/list.api';
import { Grid } from '@mui/material';


const MovieList = () => {
    const { listId } = useParams();
    const [listData, setListData] = useState(null);

    useEffect(() => {
        const fetchListData = async () => {
            try {
                const data = await apiList({ listId });
                setListData(data);
            } catch (error) {
                console.error('Error fetching list movies data:', error);
            }
        };

        fetchListData();
    }, [listId]);

    return (
        <div className='movie-list'>
            <div className="movie-list-container">
            <h1 className='movie-list-title'>{listData && listData[0].title}</h1>
            <h2 className='movie-list-desc'>{listData && listData[0].description}</h2>
            <Grid container spacing={10}>
                {listData && listData.map((item, index) => (
                    <Grid item key={index} xs={3} sm={3} md={3} lg={3}>
                        <Link to={`/movies/${item.mid}`} key={index}>
                            <MovieCard id={item.mid} poster={item.poster} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
            </div>
        </div>
    );
};

export default MovieList;
