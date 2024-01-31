import React, {useState, useEffect} from 'react'
import ListsLogo from '../components/ListsLogo'
import { apiAllLists } from '../api/list.api'
import ListCard from '../components/ListCard'

const Lists = () => {
  const [allLists, setAllLists] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lists = await apiAllLists();
        setAllLists(lists);

      } catch (error) {
        console.log("Error front end: " + error);
      } 
    };

    fetchData();
  }, []);

  return (
    <div className='lists'>
      <ListsLogo />
      <div className='lists-intro-container'>
        <p className='lists-intro-text'>FELICE COMPILATIONS contain movies lists that we'd like to share</p>
      </div> 
      <div className='lists-list-card-wrapper'>
        {allLists.map((list) => (
          <ListCard list={list}/>
        ))}
      </div>
    </div>
  )
}

export default Lists
