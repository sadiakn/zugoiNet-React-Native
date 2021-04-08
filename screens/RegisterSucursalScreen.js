import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import LoadingEffect from '../components/loadingEffect';

import zugoi from '../api/zugoi';

const RegisterSucursalScreen = ({ navigation }) => {
    let errors = 0;
    const [establishmentId, setEstablishmentId] = useState('');
    const [provinceId, setProvinceId] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const countryId = '1';

    const [loading, setLoading] = useState(false);
    const [posted, setPosted] = useState(false);
    
    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState([]);

    //API GET
    const establishmentsApi = async () => {
        const response = await zugoi
            .get('/establishments')
            .then((res) => {
                setItems(res.data.map(({ establishmentName: label, id: value }) => ({ label, value })));
                error => {
                    console.log(error);
                }
            });

    };

    const provinceApi = async () => {
        const response = await zugoi
            .get('/countries/1/provinces')
            .then((res) => {
                setItems2(res.data.map(({ provinceName: label, id: value }) => ({ label, value })));
                error => {
                    console.log(error);
                }
            });
    };

    const multiApi = async () => {
        const response = await Promise.all([establishmentsApi(), provinceApi()])
            .then(res => {
                console.log('Loaded');
                setLoading(true);
            }, error => {
                console.log(error)
            });
    };

    useEffect(() => {
        multiApi();
    }, []);

    // API POST
    const RegSucApi = async () => {
        const response = await zugoi('/branch-offices', {
            method: 'post',
            data: {
                countryId: countryId,
                provinceId: provinceId,
                city: city,
                establishmentId: establishmentId,
                zipCode: zipCode
            }
        })
            .then(() => {
                setPosted(true);
                console.log('Posted');
                navigation.navigate('Dashboard');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onSubmit = () => {
        let err = [];
        if (establishmentId === '' || establishmentId === null) {
            errors++;
            err.push(' [Establecimiento]');
        }
        if (provinceId === '' || provinceId === null) {
            errors++;
            err.push(' [Provincia]');
        }
        if (city === '' || city === null) {
            errors++;
            err.push(' [Ciudad]');
        }
        if (errors > 0) {
            alert("Error! Rellenar los campos: " + err);
            return;
        }

        // API CALL
        RegSucApi();
    }

    return (

        <View style={[styles.mycontent, { backgroundColor: "white", }]}>
            {loading ?
                <>
                    <Text style={styles.welcomeText}>Registrar Sucursal</Text>

                    {/* Linea horizontal */}
                    <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

                    <RNPickerSelect
                        placeholder={{
                            label: 'Select Establishment...',
                            value: null,
                            color: '#EE712E',
                        }}
                        items={items}
                        onValueChange={(value) => {
                            setEstablishmentId(value);
                            errors=0;
                        }}
                        style={styles.dropSelect}
                    />

                    <Text>Direccion</Text>
                    <View style={[{ backgroundColor: "white", }]} >

                        <RNPickerSelect
                            placeholder={{
                                label: 'Select Province...',
                                value: null,
                                color: '#EE712E',
                            }}
                            items={items2}
                            onValueChange={(value) => {
                                setProvinceId(value);
                                errors=0;
                            }}
                            style={styles.dropSelect}
                        />

                        <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                            <TextInput style={styles.textInput}
                                placeholder="Zip Code"
                                placeholderTextColor="#333"
                                value={zipCode}
                                onChangeText={setZipCode}
                            />
                        </View>

                        <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                            <TextInput style={styles.textInput}
                                placeholder="Ciudad"
                                placeholderTextColor="#333"
                                value={city}
                                onChangeText={(city) => {
                                    setCity(city);
                                    errors=0;
                                }}
                            />
                        </View>

                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.btn}
                        onPress={() => {
                            // navigation.navigate('Dashboard');
                            onSubmit();
                        }}>
                        <Text style={styles.BTnText}>Registrar Sucursal</Text>
                    </TouchableOpacity>
                </>
                : <LoadingEffect />}
        </View>

    )
}

RegisterSucursalScreen.navigationOptions = () => {
    return {
        headerTitle: '',
    };
};

export default RegisterSucursalScreen;

const styles = StyleSheet.create({
    mycontent: {
        flex: 1,

        padding: 30

    },
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    borderLine: {
        borderWidth: 0.5,
        borderColor: "#EE712E",
        marginBottom: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        width: "50%",

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
    mytextboxL: {
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",

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
    welcomeText: {
        textAlign: 'center',
        fontSize: 20,


    },
    btn: {
        marginTop: 30,
        paddingVertical: 10,
        borderRadius: 20,
        height: "8%",
        width: "70%",
        backgroundColor: "#EE712E",
        alignSelf: "center"
    },
    BTnText: {
        color: 'white',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },
})