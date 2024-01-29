import axios from 'axios';

const base_url = 'http://localhost:3001/api';

const fetchListData = async (listId) => {
  try {
    const response = await axios.get(`${base_url}/lists/${listId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching list data:', error.message);
    throw error;
  }
};

const apiList = async ({listId}) => {
    try {
        const urls = await fetchListData(listId);
        //should return a list of mids and posters
        const mids = urls.mid;
        const posters = urls.poster;
        return {mids, posters};

    } catch (error) {
      console.error('Error in apiList:', error);
    }
};


export default apiList;
