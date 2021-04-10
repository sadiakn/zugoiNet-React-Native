import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const loadingEffect = () => {

    return <View style={styles.container}>
        <ActivityIndicator size="large" color="#EE712E" />
    </View>
}

export default loadingEffect;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});