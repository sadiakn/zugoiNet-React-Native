import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


class scanner extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> sucursal</Text>
            </View>
        )
    }
}

export default scanner;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})