import React, {useState, useEffect} from 'react'
import ListsLogo from '../components/ListsLogo'
import { apiAllLists } from '../api/list.api'
import ListCard from '../components/ListCard'
import intro from "../assets/images/components/green-blurred-background.png"

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
      <img src={intro} alt='' width='100%'></img>
      <div className='lists-list-card-wrapper'>
        {allLists.map((list) => (
          <ListCard list={list}/>
        ))}
      </div>
    </div>
  )
}

export default Lists
