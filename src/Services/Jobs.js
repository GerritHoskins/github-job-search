import axios from 'axios';
import stores from './../Store/Store';
const apiUrl = 'https://jobs.github.com/';
//const apiUrl = 'http://localhost:3000/positions.json';

export async function jobAPI(params) {    
    try {
        const response = await axios.get(apiUrl + 'positions.json', {
            params: {
                description: stores.getDescription(),
                full_time: stores.getType(),
                location: stores.getLocation() || "Germany"
            }
        })       
        console.log(response);
        if(response.statusText === "OK" && response.data.length > 0) {
            return response.data;
        }else {
            return [];
        }        
    } 
    catch (error) {
      console.error(error);
    }
}

export async function jobByIdAPI() {    
    try {
        const response = await axios.get(apiUrl+'positions/'+stores.filter+'.json?markdown=true')       
        console.log(response);
        if(response.statusText === "OK" && response.data) {
            return response.data;
        }else {
            return [];
        }        
    } 
    catch (error) {
      console.error(error);
    }
}