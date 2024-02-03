import React, {useState, useEffect} from 'react'
import template from "../assets/images/components/FELICE_POSTS.png"
import { apiAllPosts } from '../api/post.api';
import PostCard from '../components/PostCard';

const Post = () => {
  const [allPosts, setAllPosts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await apiAllPosts();
        setAllPosts(posts);

      } catch (error) {
        console.log("Error front end: " + error);
      } 
    };

    fetchData();
  }, []);


  return (
    <div style={{backgroundColor:"black"}}>
        <img src={template} alt='' width="100%"></img>
        <div className='lists-list-card-wrapper'>
          {allPosts.map((post) => (
            <PostCard id={post.pid} poster ={post.poster} type={post.type}/>
          ))}
        </div>
    </div>
  )
}

export default Post
