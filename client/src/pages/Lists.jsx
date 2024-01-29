import React, { useState } from 'react'
import MovieList from '../components/MovieList'
import { useParams } from 'react-router-dom';

const Lists = () => {
  const { listId } = useParams();
  const [listData, setListData] = useState(null);

  return (
    <div>
      {listData && <MovieList items = {listData.lid} />}
    </div>
  )
}

export default Lists
