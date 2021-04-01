import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const RegisterSucursalScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Registrar Sucursal</Text>
        </View>
    )
}

RegisterSucursalScreen.navigationOptions = () => {
    return {
        headerTitle: 'Registrar Sucursal',
    };
};

export default RegisterSucursalScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})