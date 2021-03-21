import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import LoginScreen from './screens/loginScreen';
import DashboardScreen from './screens/dashboardScreen';
import AuthLoadingScreen from './screens/authLoadingScreen';
const App = () => {
  return(
    //<LoginScreen/>

    //<DashboardScreen/>
    
    <AuthLoadingScreen/>
  );
};
export default App;


const styles = StyleSheet.create({
  container: {
    height:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
})