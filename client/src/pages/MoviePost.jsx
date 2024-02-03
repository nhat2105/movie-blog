import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import template from "../assets/images/components/FELICE_REVIEW.png"
import { apiPost } from '../api/post.api';
import MovieCard from "../components/MovieCard"

const MoviePost = () => {
    const { postId } = useParams();
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const data = await apiPost({ postId });
                setPostData(data);
            } catch (error) {
                console.error('Error fetching post movie data:', error);
            }
        };

        fetchPostData();
    }, [postId]);


    return (
        <div className='movie-post'>
            <div className="img-post-container">
                <img src={template} alt='' width="100%" style={{zIndex: -1}} />
            </div>
            <div className='movie-post-wrapper'>
                {postData && <img src={postData.scene_two} alt='' width="100%" className='scene-image-two' />}
                {postData && <img src={postData.scene_one} alt='' className='scene-image-one'/>}
                {postData && <h1 className='movie-post-title'>{postData.title}</h1>}
            </div>
            <div className='movie-post-card-wrapper'>
                {postData && <MovieCard id={postData.mid} poster={postData.poster} />}
                <div className='movie-post-introduction'>
                    {postData && <h1 className='movie-post-type' style={{ color:'#20DD33'}}>POST TYPE: <span style={{ color:'white'}}>{postData.type}</span></h1>}
                    {postData && <h1 className='movie-post-type' style={{ color:'#20DD33'}}>RATING: <span style={{ color:'white'}}>{postData.rating}</span></h1>}

                </div>
            </div>
            <div className="movie-post-desc-wrapper">

                {postData && <p className='movie-post-description' dangerouslySetInnerHTML={{ __html: postData.description }}></p>}
            </div>
        </div>
    )
}

export default MoviePost
