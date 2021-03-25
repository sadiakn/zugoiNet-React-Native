import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


class registerProduct extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Register product</Text>
            </View>
        )
    }
}

export default registerProduct;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})