import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import ModalMessage from '../components/modalMessage';
import RegError from '../components/regError';

const ScannerScreenTEMP3 = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Text>TESTING MODAL</Text>
            <ModalMessage
                Type='Checked'
                Title='¡Producto Registrado!'
                Message='¡El producto a sido registrado!'
                Button=''
                Visible={modalVisible}
                onPress={setModalVisible}
                navigation={navigation}
                Nav='Dashboard'
            />
            {/* <RegError
                Visible={modalVisible}
                onPress={setModalVisible}
            /> */}
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => { setModalVisible(!modalVisible) }}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    );
};

ScannerScreenTEMP3.navigationOptions = () => {
    return {
        headerTitle: 'TEST STUFF 3',
    };
};

export default ScannerScreenTEMP3;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingTop: 20
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: "#EE712E",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})