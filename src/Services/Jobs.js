import axios from 'axios';

const apiUrl = 'https://jobs.github.com/positions.json';

export async function getList(params) {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                search: params.searchQuery
            }
        })       
        console.log(response);
        return response.data;
    } 
    catch (error) {
      console.error(error);
    }
}