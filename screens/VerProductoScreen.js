import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const VerProductoScreen = ({ navigation }) => {
    const barCode = navigation.getParam('barCode');
    
    console.log("------------------------------------");
    console.log('barCode: ' + barCode);

    return (
        <View style={styles.container}>
            <Text> verProducto</Text>
            <Text style={styles.welcomeText}>barCode: {barCode}</Text>
        </View>
    );
};

VerProductoScreen.navigationOptions = () => {
    return {
        headerTitle: 'Producto',
    };
};

export default VerProductoScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})