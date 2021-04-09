import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';
import LoadingEffect from '../components/loadingEffect';

import zugoi from '../api/zugoi';
import { color } from 'react-native-reanimated';

const RegisterEstablishmentScreen = ({ navigation }) => {
    let errors = 0;
    const [establishmentName, setEstablishmentName] = useState('');
    const [typeOfEstablishmentId, setTypeOfEstablishmentId] = useState('');

    const [loading, setLoading] = useState(false);
    const [posted, setPosted] = useState(false);

    const [items, setItems] = useState([]);

    //API GET
    const establishmentsTypesApi = async () => {
        const response = await zugoi
            .get('/type-of-establishments')
            .then((res) => {
                setItems(res.data.map(({ typeOfEstablishmentName: label, id: value }) => ({ label, value })));
                console.log('////////////');
                console.log('// Loaded //');
                console.log('////////////');
                setLoading(true);
            })
            .catch((error) => {
                console.log(error);
            });
        ;

    };

    useEffect(() => {
        establishmentsTypesApi();
    }, []);

    // API POST
    const RegEstApi = async () => {
        const response = await zugoi('/establishments', {
            method: 'post',
            data: {
                establishmentName: establishmentName,
                typeOfEstablishmentId: typeOfEstablishmentId
            }
        })
            .then(() => {
                setPosted(true);
                console.log('************');
                console.log('** Posted **');
                console.log('************');
                navigation.navigate('Dashboard');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onSubmit = () => {
        let err = [];
        if (establishmentName === '' || establishmentName === null) {
            errors++;
            err.push(' [Establecimiento]');
        }
        if (typeOfEstablishmentId === '' || typeOfEstablishmentId === null) {
            errors++;
            err.push(' [Tipo]');
        }
        if (errors > 0) {
            alert("Error! Rellenar: " + err);
            return;
        }
        // API CALL
        RegEstApi();
    }

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
                                onChangeText={(establishmentName) => {
                                    setEstablishmentName(establishmentName);
                                    errors = 0;
                                }}
                            />
                        </View>
                        <View style={[styles.mytextboxL, {}]} >

                            {/* Dos opciones de dropdown */}
                            {/* de esta pagina??? https://www.npmjs.com/package/react-native-dropdown-picker */}
                            <DropDownPicker
                                items={items}
                                defaultValue={typeOfEstablishmentId}
                                placeholder={"Tipo de establecimiento"}
                                placeholderStyle={{
                                    color:'gray',
                                }}
                                style={{backgroundColor: '#fafafa',borderColor: 'black',}}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                containerStyle={{
                                    width:"100%",
                                    height:50,
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }} a
                                onChangeItem={({ value }) => {
                                    setTypeOfEstablishmentId(value)
                                }}
                            />

                        
                            


                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.btn}
                            onPress={onSubmit}>
                            <Text style={styles.BTnText}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </> : <LoadingEffect />}
        </View>

    )
}

RegisterEstablishmentScreen.navigationOptions = () => {
    return {
        headerTitle: '',
    };
};

export default RegisterEstablishmentScreen;

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
        height:40,
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