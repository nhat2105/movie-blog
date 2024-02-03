import axios from 'axios';

const base_url = 'http://localhost:3001/api';

const fetchPostData = async (postId) => {
  try {
    const response = await axios.get(`${base_url}/posts/${postId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching post data:', error.message);
    throw error;
  }
};

const apiAllPosts= async () => {
  try {
    const response = await axios.get(`${base_url}/posts/`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching all posts data:', error.message);
    throw error;
  }
};

const apiPost = async ({postId}) => {
    try {
      return await fetchPostData(postId);
    } catch (error) {
      console.error('Error in apiPost:', error);
    }
};

export {apiPost, apiAllPosts };
