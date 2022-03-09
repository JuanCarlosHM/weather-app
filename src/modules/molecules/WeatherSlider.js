import {ScrollView, Text, View} from "react-native";
import {styles} from "../../visuals/MainTheme";
import {WeatherCard} from "../atoms/WeatherCard";

export const WeatherSlider = (props) => {
    return (

        <View style={[styles.mainContainer, {alignItems: 'flex-start'}]}>

            <Text style={[styles.ctaStyle, {marginLeft: 10, marginTop: 55}]}>
                Próximos 8 días:
            </Text>

            <ScrollView
                horizontal={true}
                style={{marginTop: 25}}>
                {
                    props.nexSevenDays && props.nexSevenDays.map((item, index) => {
                        return <WeatherCard key={index} day={item}/>
                    })
                }
            </ScrollView>
        </View>
    );
}