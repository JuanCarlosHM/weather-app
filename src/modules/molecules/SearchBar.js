import {View, Text, TouchableOpacity, TextInput, FlatList, ScrollView} from "react-native";
import {styles} from "../../visuals/MainTheme";
import {Ionicons} from '@expo/vector-icons';
import {useState} from "react";
import {reservamos} from "../../core/api/ReservamosAPI";


export const SearchBar = ({setLatitude, setLongitude, setCountry}) =>
{
    const [selectedCity, setSelectedCity] = useState('');
    const [cityQuery, setCityQuery] = useState('');
    const [cityList, setCityList] = useState([]);

    const onGetCity = async (query) =>
    {
        if(query === '')
        {
            setSelectedCity('');
            setCityQuery(query);
            setCityList([]);
            return;
        }

        setSelectedCity('');
        setCityQuery(query);
        const listOfCity = await reservamos.getCity(cityQuery);

        if (listOfCity.length > 0) {
            const asyncRes = await Promise.all(listOfCity.map(async (item) => {
                return {name: item.display, lat: item.lat, lon: item.long};
            }));

            setCityList(asyncRes);
        }
    }

    const handleSelectCity = (item) =>
    {
        setSelectedCity(item);
        setCityQuery('');
        setCityList([]);

        setLatitude(item.lat);
        setLongitude(item.lon);
        setCountry(item.name);
    }

    if (!selectedCity)
    {
        return (
            <>
                <View style={{}}>
                    <View style={[styles.secondaryContainer, {justifyContent: 'space-around', marginTop: 30}]}>

                        <TextInput
                            style={{
                                width: '80%',
                                height: 45,
                                backgroundColor: '#292929',
                                borderRadius: 30,
                                padding: 15,
                                color: 'white'
                            }}

                            placeholder="Busca una ciudad"
                            placeholderTextColor="#d4d3d7"

                            onChangeText={(e) => onGetCity(e)}
                            value={ cityQuery }
                            onFocus={() => {
                                // this.inputField.value = "";
                                //setCityQuery('');
                            }}
                        />

                        <TouchableOpacity>
                            <Ionicons name="search" size={30} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                </View>

            <View style={{
                position:'absolute',
                top: 90,
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                zIndex: 1}}>

                {
                    cityQuery === '' ?
                        <View style={[styles.mainContainer, {paddingTop: 100, paddingHorizontal: 20}]}>
                            <Text style={[styles.titleStyle, {fontSize: 50}]}> ¡Bienvenido! </Text>
                            <Text/>
                            <Text style={[styles.subTitleStyle]}> Ingresa el nombre de una ciudad para comenzar </Text>
                        </View> : null
                }

                <ScrollView
                    style={{width: '100%', backgroundColor: 'black' }}>
                    {
                        cityList.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.mainContainer, {alignItems: 'flex-start', padding: 15}]}
                                    onPress={() => handleSelectCity(item)}>
                                    <Text style={[styles.subTitleStyle, {textAlign: 'left'}]}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>);
                        })
                    }
                    <View style={{height: 140}}/>
                </ScrollView>

                <View style={{ height: 30}}/>
            </View>
            </>
        );
    }

    return (
        <>
            <View>
                <View style={[styles.secondaryContainer, {justifyContent: 'space-around', marginTop: 30}]}>

                    <TextInput
                        style={{
                            width: '80%',
                            height: 45,
                            backgroundColor: '#292929',
                            borderRadius: 30,
                            padding: 15,
                            color: 'white'
                        }}

                        placeholder="Busca una ciudad"
                        placeholderTextColor="#d4d3d7"

                        onChangeText={(e) => onGetCity(e)}
                        value={ cityQuery }
                        onFocus={() => {
                            // this.inputField.value = "";
                            //setCityQuery('');
                        }}
                    />

                    <TouchableOpacity>
                        <Ionicons name="search" size={30} color="#fff"/>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    );
}