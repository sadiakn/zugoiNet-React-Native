import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const barcodeimg = require('../assets/barcode.png')
const editimg = require('../assets/edit.png')

class DashboardScreen extends React.Component {
    doLogout() {
        AsyncStorage.removeItem("token")
            .then(
                res => {
                    this.props.navigation.navigate('Auth')
                }
            )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topuser}>

                    <View>
                        <Text style={styles.userText}> Welcome user</Text>

                        <TouchableOpacity style={styles.logouBtn} onPress={() => this.doLogout()}>
                            <Text style={styles.logouBtnText}>Logout</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View>
                        <TouchableOpacity style={styles.dashboardBTn} title="barcode">
                            <View style={{ justifyContent: "center", alignItems: 'center' }}><Image source={barcodeimg} style={styles.buttonimage} /></View>
                            <Text style={styles.dashboardBTnText}>Barcode</Text>
                            <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.dashboardBTn} title="barcode">
                            <View style={{ justifyContent: "center", alignItems: 'center' }}><Image source={editimg} style={styles.buttonimage2} /></View>
                            <Text style={styles.dashboardBTnText}>Registrar</Text>
                            <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({

    borderLine: {
        borderWidth: 0.4,
        borderColor: "#EE712E",

        marginTop: 20,
        paddingHorizontal: 10,
        width: "40%",
    },

    container: {
        alignItems: "center",
        justifyContent: "center"
    },

    topuser: {
        height: "50%",
        alignItems: "center",
        justifyContent: "center"
    },

    userText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10
    },

    logouBtn: {
        backgroundColor: "#ee712e",
        paddingVertical: 10,
        borderRadius: 20,
        width: 100,
        alignSelf: "center"
    },

    logouBtnText: {
        color: '#fff',
        textAlign: "center",
        fontWeight: "bold"
    },

    dashboardBTnText: {
        color: '#ee712e',
        textAlign: "center",
        fontWeight: "bold"
    },
    buttonimage: {
        width: 130,
        height: 120
    },
    buttonimage2: {
        width: 120,
        height: 120
    },
    dashboardBTn: {
        backgroundColor: "#fff8f5",
        paddingVertical: 10,
        width: 150,
        alignSelf: "center"
    }
})