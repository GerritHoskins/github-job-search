import axios from 'axios';
import stores from './../Store/Store';
const apiUrl = 'https://jobs.github.com/positions.json';

export async function jobAPI(params) {    
    try {
        const response = await axios.get(apiUrl, {
            params: {
                description: stores.getDescription(),
                type: stores.getType(),
                location: stores.getLocation()
            }
        })       
        console.log(response);
        if(response.statusText === "OK") {
            return response.data;
        }else {
            return {};
        }        
    } 
    catch (error) {
      console.error(error);
    }
}