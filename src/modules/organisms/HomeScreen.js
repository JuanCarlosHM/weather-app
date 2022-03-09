import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {styles} from "../../visuals/MainTheme";
import {SearchBar} from "../molecules/SearchBar";
import {CityName} from "../molecules/CityName";
import {WeatherStatus} from "../molecules/WeatherStatus";
import {WeatherSlider} from "../molecules/WeatherSlider";
import {useEffect, useState} from "react";
import {weather} from "../../core/api/OpenWeatherAPI";

export const HomeScreen = () =>
{

    const [cityName, setCityName] = useState('');
    const [countryName, setCountryName] = useState('');


    const [actualTemp, setActualTemp] = useState('');
    const [actualWeather, setActualWeather] = useState('');
    const [nexSevenDays, setNexSevenDays] = useState([]);

    const [windSpeed, setWindSpeed] = useState('');
    const [humidity, setHumidity] = useState('');

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();


    useEffect(() =>
    {
        if(!latitude || !longitude) return;

        weather.getWeather(latitude, longitude).then(response =>
        {
            if (response)
            {
                setActualTemp(response.current.temp);
                setWindSpeed(response.current.wind_speed);
                setHumidity(response.current.humidity);
                setActualWeather(response.current.weather);
                setNexSevenDays(response.daily);
            }

        }).catch(e => console.log("error -->", e))

    }, [latitude, longitude, longitude])



    return(

        <ScrollView style={{padding: 10, backgroundColor: 'black'}}>
            <SearchBar setLatitude={setLatitude} setLongitude={setLongitude} setCountry={setCountryName}/>
            <WeatherStatus countryName={countryName} actualTemp={actualTemp} windSpeed={windSpeed} humidity={humidity} actualWeather={ actualWeather }/>
            <WeatherSlider nexSevenDays={nexSevenDays}/>
        </ScrollView>
    );
}