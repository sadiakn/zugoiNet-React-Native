import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const SearchProductoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Search Producto</Text>
        </View>
    );
};


export default SearchProductoScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})