import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';

import LoadingEffect from '../components/loadingEffect';


const RegisterPriceScreen = ({ navigation }) => {
    const [establishmentName, setEstablishmentName] = useState('');
    // const [typeOfEstablishmentId, setTypeOfEstablishmentId] = useState('');

    const [loading, setLoading] = useState(false);

    // res.data.map(({ typeOfEstablishmentName: label, id: value }) => ({ label, value }))
    const [items, setItems] = useState();

    console.log("------------------------------------");
    console.log("typeOfEstablishmentId: " + typeOfEstablishmentId);
    return (
        <View style={styles.container}>
            {loading ?
                <>
                    <Text style={styles.welcomeText}>Registro de Establecimiento</Text>
                    {/* Linea horizontal */}
                    <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

                    <View >
                        <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                            <TextInput style={styles.textInput}
                                placeholder="Nombre del Establecimiento"
                                placeholderTextColor="#333"
                                value={establishmentName}
                                onChangeText={setEstablishmentName}
                            />
                        </View>
                        <View style={[styles.mytextboxL, {}]} >
                            {/* <RNPickerSelect
                                placeholder={{
                                    label: 'Select a type of Establishment...',
                                    value: null,
                                    color: '#EE712E',
                                }}
                                items={items}
                                onValueChange={setTypeOfEstablishmentId}
                                style={styles.dropSelect}
                            /> */}


                        </View>
                    </View>
                </> : <LoadingEffect />}
        </View>

    )
}

RegisterPriceScreen.navigationOptions = () => {
    return {
        headerTitle: '',
    };
};

export default RegisterPriceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        height: "100%",

    },
    container2: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    dropSelect: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30
    },

    mycontent: {
        flex: 1,

        padding: 30

    },
    DisclaimerText: {
        fontSize: 10,
        textAlign: 'center',


    },
    mytextboxS: {
        width: "49.5%",
        marginHorizontal: 2,
        alignItems: "center",
        justifyContent: "center",

    },
    mytextboxL: {
        marginVertical: 10,


        alignItems: "center",
        justifyContent: "center",

    },
    myrow: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },

    btn: {
        marginTop: 30,
        paddingVertical: 10,
        borderRadius: 20,
        width: "60%",
        backgroundColor: "#EE712E",
        alignSelf: "center"
    },
    BTnText: {
        color: 'white',
        textAlign: "center",
        fontWeight: "bold"
    },


    textInput: {
        width: "100%",


        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#FFFFFF",
        color: "#333",
        borderRadius: 0,
        borderWidth: 1,
        borderColor: "black",

    },
    textInputSmall: {

        width: "100%",


        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: "#FFFFFF",
        color: "#333",
        borderRadius: 0,
        borderWidth: 1,
        borderColor: "black"

    },
    welcomeText: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 24,


    },
    Btn: {
        marginTop: 30,
        paddingVertical: 10,
        borderRadius: 20,
        width: "60%"

    },
    signinText: {
        textAlign: "center",
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold"
    },
    borderLine: {
        borderWidth: 0.5,
        borderColor: "#EE712E",
        marginBottom: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        width: "40%",

    }
})