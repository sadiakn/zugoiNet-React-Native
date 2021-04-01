import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const ScannerScreenTEMP = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Scanner TEMP</Text>
        </View>
    );
};

ScannerScreenTEMP.navigationOptions = () => {
    return {
        headerTitle: 'Scanner',
    };
};

export default ScannerScreenTEMP;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})