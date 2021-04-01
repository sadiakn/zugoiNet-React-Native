import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AppContainer from './routes';

const App = () => {
  return( 
    <AppContainer/>
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