import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const RegisterSucursalScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Registrar Sucursal</Text>
        </View>
    )
}

export default RegisterSucursalScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})