import axios from 'axios';
import stores from './../Store/Store';
const apiUrl = 'https://jobs.github.com/positions.json';
//const apiUrl = 'http://localhost:3000/positions.json';
export async function jobAPI(params) {    
    try {
        //stores.setLoadStatus(true);
        const response = await axios.get(apiUrl, {
            params: {
                description: stores.getDescription(),
                type: stores.getType(),
                location: stores.getLocation()
            }
        })       
        console.log(response);
        if(response.statusText === "OK" && response.data.length > 0) {
            //stores.setLoadStatus(false);
            return response.data;
        }else {
            return [];
        }        
    } 
    catch (error) {
      console.error(error);
    }
}