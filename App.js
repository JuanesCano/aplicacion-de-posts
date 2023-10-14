import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Navigation } from "./src/navigation/Navigation";
import axios from 'axios';

axios.defaults.baseURL= "http://192.168.0.5:1000"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style = "Light"/>
      <Navigation/>
    </NavigationContainer>
  );
}
