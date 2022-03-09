import {Image, Text, View} from "react-native";
import {styles} from "../../visuals/MainTheme";
import {IconSet} from "../../assets/icons/iconSet";
import {useEffect, useState} from "react";


export const WeatherCard = (props) => {
    const [weatherIcon, setWeatherIcon] = useState('');

    useEffect(() =>
    {
        if (props.day.weather.length > 0) {
            setWeatherIcon(props.day.weather[0].icon);
        }
    }, [props])

    return (
        <View style={[styles.mainContainer, {justifyContent: 'flex-start', width: 100, height: 150, margin: 10}]}>

            <Image style={{width: 40, height: 35, resizeMode: 'contain'}} source={IconSet[weatherIcon]}/>

            <Text style={[styles.ctaStyle, {paddingTop: 10}]}>
                {props.day.weather[0].description}
            </Text>

            <Text style={[styles.ctaStyle, {paddingTop: 10}]}>
                {props.day && props.day.temp.day.toFixed(1) + 'º'}
            </Text>

        </View>
    );
}