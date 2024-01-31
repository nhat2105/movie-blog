import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import { apiList } from '../api/list.api';

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
                <div className='movie-cards-list-container'>
                    {listData && listData.map((item, index) => (
                        <div key={index} className='movie-card-list-wrapper'>
                            <MovieCard id={item.mid} poster={item.poster} />
                            <h3 style={{marginLeft: "150px", marginTop: "0px"}}>{item.item_id}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
