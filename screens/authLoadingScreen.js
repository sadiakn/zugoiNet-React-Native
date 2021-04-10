import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const AuthLoadingScreen = ({navigation}) => {
    const checkToken = async () => {
        const token = await AsyncStorage.getItem("token");
        console.log('-- AUTH --');
        console.log(token);
        if (token) {
            navigation.navigate("Dashboard");
        }
        else {
            navigation.navigate("loginFlow");
        }
    }

    useEffect(() => {
        checkToken();
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#EE712E" />
        </View>
    )
}


export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },



})