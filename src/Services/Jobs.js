import axios from 'axios';

const apiUrl = 'https://jobs.github.com/positions.json';

export async function getList(params) {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                description: params.description,
                type: params.type,
                location: params.location
            }
        })       
        console.log(response);
        if(response.statusText === "OK") {
            return response.data;
        }else {
            return [];
        }        
    } 
    catch (error) {
      console.error(error);
    }
}