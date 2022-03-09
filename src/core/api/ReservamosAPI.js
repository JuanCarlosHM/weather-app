import axios from 'axios';
import { REACT_APP_RESERVAMOS_URL } from "@env";


function getCity(query)
{
    const city = axios.get
    (
        REACT_APP_RESERVAMOS_URL,
        {
            params: {
               q: query
            }
        }).catch(error =>
    {
        throw error;
    });

    return city.then((response) => response.data).catch(e => console.log(e));
}

export const reservamos = {
    getCity
}