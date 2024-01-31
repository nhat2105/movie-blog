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

const apiAllLists= async () => {
  try {
    const response = await axios.get(`${base_url}/lists/`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching list data:', error.message);
    throw error;
  }
};

const apiList = async ({listId}) => {
    try {
      return await fetchListData(listId);
    } catch (error) {
      console.error('Error in apiList:', error);
    }
};

export {apiList, apiAllLists };
