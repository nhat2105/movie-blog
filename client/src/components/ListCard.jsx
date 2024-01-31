import React from 'react'
import { Link } from 'react-router-dom'

const ListCard = ({list}) => {
  return (
    <div className='list-card'>
      <div className="list-card-container">
        <div className= 'list-card-wrapper' key={list.lid}>
            <Link to={`/lists/${list.lid}`} >
                <h1 style={{color:'white'}}>{list.title}</h1>
                <img className= 'list-card-img' src={list.poster} alt='' />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default ListCard
