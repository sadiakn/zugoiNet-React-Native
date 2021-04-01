import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const VerProductoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> verProducto</Text>
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