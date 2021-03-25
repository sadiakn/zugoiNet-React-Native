import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


class registerUser extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Register user</Text>
            </View>
        )
    }
}

export default registerUser;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})