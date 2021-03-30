import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


class verProducto extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> verProducto</Text>
            </View>
        )
    }
}

export default verProducto;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})