import {Image, ImageBackground, Text, View} from "react-native";
import {styles} from "../../visuals/MainTheme";
import {useEffect, useState} from "react";
import {REACT_APP_OPEN_WEATHER_ICON_URL} from "@env";
import {IconSet} from "../../assets/icons/iconSet";

export const WeatherStatus = (props) =>
{
    const [weatherIcon, setWeatherIcon] = useState('');
    const [weatherDesc, setWeatherDEsc] = useState('');

    useEffect(() =>
    {
        if (props.actualWeather.length > 0) {
            setWeatherIcon(props.actualWeather[0].icon);
            setWeatherDEsc(props.actualWeather[0].description);
        }

    }, [props])

    return (
        <View style={styles.mainContainer}>

            <View style={[styles.mainContainer, { position: 'absolute', top: 10, height: 250, width: '100%'}]}>

                <Image
                    source={require('../../assets/images/world.png')}
                    style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                        opacity: .5}}
                   />

            </View>

            <View
                style={[styles.mainContainer, {backgroundColor: 'transparent', marginTop: 50}]}>

                <Image
                    source={IconSet[weatherIcon]}
                    style={{width: 150, height: 160, margin: 5,  resizeMode: 'contain'}}
                />
            </View>


            <View style={[styles.mainContainer, {marginTop: 20}]}>

                <Text style={ styles.subTitleStyle }>
                    {props.countryName}
                </Text>

                {/*<View style={{}}>*/}
                {/*    <Text style={styles.subTitleStyle}>*/}
                {/*        {props.humidity && props.humidity + '%'}*/}
                {/*    </Text>*/}

                {/*    <Text style={styles.subTitleStyle}>*/}
                {/*        Humedad*/}
                {/*    </Text>*/}
                {/*</View>*/}

                <View style={[styles.mainContainer]}>
                    <Text style={styles.titleStyle}>
                        <Text>  </Text>
                        {props.actualTemp && props.actualTemp.toFixed(0)}
                        <Text style={{color: 'yellow'}}> º </Text>
                    </Text>

                    <Text style={ [styles.ctaStyle, {marginRight: 15}]}> {weatherDesc } </Text>
                </View>

                {/*<View style={{}}>*/}
                {/*    <Text style={styles.subTitleStyle}>*/}
                {/*        {props.windSpeed && props.windSpeed + " m/s"}*/}
                {/*    </Text>*/}
                {/*    <Text style={styles.subTitleStyle}>*/}
                {/*        Viento*/}
                {/*    </Text>*/}
                {/*</View>*/}
            </View>
        </View>
    );
}