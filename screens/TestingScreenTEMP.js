import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

import RegSuccess from '../components/regSuccess';
import RegNoProduct from '../components/regNoProduct';
import RegError from '../components/regError';

import Ztestaxios from '../screens/ztestaxios';
import { FlatList } from 'react-native-gesture-handler';

const ScannerScreenTEMP = ({ navigation }) => {
    return (
        <FlatList
        ListHeaderComponent={
            <View style={styles.container}>
                <Text>TESTING SCREEN</Text>
                <RegSuccess
                name="Sucursal"
                />

                <RegSuccess
                name="Establecimiento"
                />

                <RegSuccess
                name="Producto"
                />
                
                <RegError
                name="Error"
                />

                < RegNoProduct
                name="Producto NO Registrado"
                />

                <Ztestaxios />
            </View>
        }
        />
    );
};

ScannerScreenTEMP.navigationOptions = () => {
    return {
        headerTitle: 'TEST STUFF',
    };
};

export default ScannerScreenTEMP;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingTop: 40
    },
})