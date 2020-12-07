import axios from 'axios';

export async function getList() {
    return await axios.get('https://jobs.github.com/positions.json', {
        params: {
            search: 'react'
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        })
}