import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const RegisterEstablishmentScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Registrar Establishment</Text>
        </View>
    )
}

RegisterEstablishmentScreen.navigationOptions = () => {
    return {
        headerTitle: 'Registrar Establecimiento',
    };
};

export default RegisterEstablishmentScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})