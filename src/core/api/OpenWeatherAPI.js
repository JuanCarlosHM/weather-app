import { REACT_APP_OPEN_WEATHER_URL, REACT_APP_OPEN_WEATHER_ICON_URL,  REACT_APP_OPEN_WEATHER_KEY} from "@env";

import axios from 'axios';

function getWeather(lat, lon)
{
    const response = axios.get
    (
        REACT_APP_OPEN_WEATHER_URL,
        {
            params: {
                exclude: "hourly,alerts,minutely",
                lat: lat,
                lon: lon,
                appid: REACT_APP_OPEN_WEATHER_KEY,
                lang: "es",
                units: "metric"
            }
        }).catch(error =>
    {
        throw error;
    });

    return response.then((response) => response.data).catch(e => console.log(e));
}

// function getIcons(code)
// {
//     const token = axios.get
//     (
//         REACT_APP_OPEN_WEATHER_ICON_URL + code + '@2x.png',
//         {
//         }).catch(error =>
//     {
//         throw error;
//     });
//
//     return token.then((response) => response.data);
// }

export const weather = {
    getWeather
}