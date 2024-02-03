import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({id, poster, type}) => {
  return (
    <div className='post-card-container'>
        <div className="list-card-wrapper" style={{marginLeft: 130}}>
            <Link style= {{textDecoration: "none"}} to={`/posts/${id}`} key={id}>
                <img src={poster} alt="" className='movie-card-poster'/>
                <h1 style={{color: "#20DD33", textAlign:'center', marginTop:-10}}>{type}</h1>
            </Link>
        </div>
    </div>
  )
}

export default PostCard
