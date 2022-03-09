import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {HomeScreen} from "./src/modules/organisms/HomeScreen";
import {styles} from "./src/visuals/MainTheme";

export default function App()
{
  return (
        <HomeScreen/>
  );
}
