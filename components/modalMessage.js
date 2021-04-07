import React, { Component, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, Image, View } from "react-native";

const checked = require('../assets/checked1.png');
const cancel = require('../assets/cancel.png');

const regSuccess = ({ navigation, Type, Title, Message, Button, Visible, onPress, Nav }) => {
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={Visible}
                onRequestClose={() => (onPress(!Visible))}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View><Image source={Type === 'Checked' ? checked : cancel} /></View>
                        <Text style={styles.modalText1}>{Title}</Text>
                        <Text style={styles.modalText2}>{Message}</Text>
                        <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>
                        <>
                            {Button === 'Ok' ?
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => {
                                        onPress(!Visible);
                                        navigation.navigate(`${Nav}`);
                                        }}
                                >
                                    <Text style={styles.textStyle}>Ok</Text>
                                </Pressable>
                                : <>
                                    <View style={styles.container}>
                                        <View style={{ paddingHorizontal: 10, }}>
                                            <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => (onPress(!Visible))}
                                            >
                                                <Text style={styles.textStyle}>Cancelar</Text>
                                            </Pressable>
                                        </View>
                                        <View />
                                        <View style={{ paddingHorizontal: 10, }}>
                                            <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => (navigation.navigate(Nav))}
                                            >
                                                <Text style={styles.textStyle}>Registrar</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </>}
                        </>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default regSuccess;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        paddingBottom: 150
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#EE712E",
    },
    buttonClose: {
        backgroundColor: "#EE712E",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText1: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
    },

    modalText2: {
        marginBottom: 15,
        textAlign: "center"
    },
    borderLine: {
        borderWidth: 1,
        borderColor: "#EE712E",
        marginBottom: 20,
        marginTop: 20,
        paddingHorizontal: 100,
        width: "50%",
    },
    container: {
        flexDirection: 'row',
    },
    button1: {
        backgroundColor: "white",
        borderColor: "#878787",
        marginBottom: 3,
        borderWidth: 1,
        paddingHorizontal: 53,
    },
});
