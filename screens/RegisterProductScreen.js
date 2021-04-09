import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';

import LoadingEffect from '../components/loadingEffect';

import zugoi from '../api/zugoi';
import zugoiFormData from '../api/zugoiFormData';

import ModalMessage from '../components/modalMessage';

const camaraimg = require('../assets/Camara.png')
const scanimg = require('../assets/scan.png')

const RegisterProductScreen = ({ navigation }) => {
    const [posted, setPosted] = useState(false);
    const [errorModal, setErrorModal] = useState(false);

    let errors = 0;
    const [selectedImage, setSelectedImage] = useState(null);
    const barCode = navigation.getParam('barCode');

    const [productName, setProductName] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const [loading, setLoading] = useState(false);

    const [items, setItems] = useState([]);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    //API GET
    const categoryTypesApi = async () => {
        const response = await zugoi
            .get('/categories')
            .then((res) => {
                setItems(res.data.map(({ categoryName: label, id: value }) => ({ label, value })));
                // console.log('////////////');
                // console.log('// Loaded //');
                // console.log('////////////');
                setLoading(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        categoryTypesApi();
    }, []);

    // API POST
    const RegProdApi = async () => {
        var formData = new FormData();
        formData.append('barCode', barCode);
        formData.append('productName', productName);
        formData.append('categoryId', categoryId);
        formData.append('file', {
            uri: selectedImage.localUri,
            type: 'image/jpeg',
            name: 'image.jpg',
        });
        const response = await zugoiFormData('/products', {
            method: 'post',
            data: formData
        })
            .then((res) => {
                console.log(res);
                console.log('************');
                console.log('** Posted **');
                console.log('************');

                setPosted(true);
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    console.log(error.response.data);
                }
                console.log(error);
                
                setErrorModal(true);
            });
    };

    const onSubmit = () => {
        setErrorModal(false);
        setPosted(false);

        let err = [];
        if (barCode === '' || barCode === null || barCode === undefined) {
            errors++;
            err.push(' [Codigo]');
        }
        if (selectedImage === null) {
            errors++;
            err.push(' [Imagen]');
        }
        if (productName === '' || productName === null) {
            errors++;
            err.push(' [Producto]');
        }
        if (categoryId === '' || categoryId === null) {
            errors++;
            err.push(' [Categoria]');
        }
        if (errors > 0) {
            alert("Error! Rellenar: " + err);
            return;
        }
        
        // API CALL
        RegProdApi();
    }

    return (
        <FlatList
            style={[styles.mycontent, { backgroundColor: "white", }]}
            ListHeaderComponent={
                <>
                    {posted ? (
                        <ModalMessage
                        Type='Checked'
                        Title='¡Producto Registrado!'
                        Message='¡El producto ha sido registrado!'
                        Button='Ok'
                        Visible={posted}
                        onPress={setPosted}
                        navigation={navigation}
                        Nav='Dashboard'
                    />
                    ) : null}
                    {errorModal ? (
                        <ModalMessage
                            Title='¡Error!'
                            Message='¡Algo salio mal!'
                            Button='Fail'
                            Visible={errorModal}
                            onPress={setErrorModal}
                            navigation={navigation}
                        />
                    ) : null}
                    {/* {modalError ? <RegError visible={modalError} setVisible={setModalError} /> : null} */}
                    <View style={[styles.mycontent, { backgroundColor: "white", }]}>
                        {loading ?
                            <>
                                <Text style={styles.welcomeText}>Registrar Producto</Text>

                                {/* Linea horizontal */}
                                <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

                                <View style={[{ backgroundColor: "white", }]} >
                                    <View style={styles.myrow}>

                                        <View style={[styles.mytextboxS, { marginRight: 20 }]}>
                                            <TextInput style={styles.textInputSmall}
                                                placeholder="Codigo de Barra"
                                                placeholderTextColor="#333"
                                                value={barCode}
                                                editable={false}
                                            />
                                        </View>

                                        <TouchableOpacity style={styles.scanBTn} title="scan" onPress={() => navigation.navigate('Scanner', { mode: 'Reg' })}>
                                            <View ><Image source={scanimg} style={styles.buttonimage} /></View>
                                        </TouchableOpacity>

                                    </View>

                                    <View>
                                        <TouchableOpacity style={styles.camaraBTn} title="camara" onPress={openImagePickerAsync}>
                                            {(selectedImage !== null) ? (
                                                <View>
                                                    <Image
                                                        source={{ uri: selectedImage.localUri }}
                                                        style={styles.thumbnail}
                                                    />
                                                </View>
                                            ) : (
                                                <View>
                                                    <View style={styles.thumbnail}><Image source={camaraimg} /></View>
                                                </View>
                                            )}

                                        </TouchableOpacity>
                                        <Text style={styles.camaraBTnText}>{(selectedImage !== null) ? ('Imagen Seleccionada') : ('Tomar Imagen del Producto')}</Text>
                                    </View>

                                    <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                                        <TextInput style={styles.textInput}
                                            placeholder="Nombre del Producto"
                                            placeholderTextColor="#333"
                                            value={productName}
                                            onChangeText={setProductName}
                                        />
                                    </View>
                                    <View style={[styles.mytextboxL, {}]}>
                                        <DropDownPicker
                                            items={items}
                                            defaultValue={categoryId}
                                            placeholder={"Selecciona la categoria"}

                                            placeholderStyle={{
                                                color: 'gray',
                                            }}
                                            style={{ backgroundColor: '#fafafa', borderColor: 'black', }}
                                            itemStyle={{
                                                justifyContent: 'flex-start'

                                            }}
                                            containerStyle={{
                                                width: "100%",
                                                height: 50,
                                            }}
                                            dropDownStyle={{ backgroundColor: '#fafafa' }} a
                                            onChangeItem={({ value }) => {
                                                setCategoryId(value)
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
                </>
            }
        />
    );
};

RegisterProductScreen.navigationOptions = ({ navigation }) => {
    let mode = navigation.getParam('mode');
    if (mode === 'Regi') {
        return {
            headerTitle: '',
            headerLeft: () => { },

        };
    } else {
        return {
            headerTitle: '',

        };
    }

};

export default RegisterProductScreen;

const styles = StyleSheet.create({
    mycontent: {
        flex: 1,
        padding: 30,
        height: "100%",
    },
    myform: {


    },
    pickercontainer: {

    },
    mytextboxS: {
        width: "80%",
        marginHorizontal: 2,
        alignItems: "flex-start",

    },

    mytextboxL: {
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    dropSelect: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30
    },

    myrow: {

        flexDirection: "row",


    },

    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    btn: {
        marginTop: 30,
        paddingVertical: 10,
        borderRadius: 20,
        width: "60%",
        height: 40,
        backgroundColor: "#EE712E",
        alignSelf: "center"
    },
    BTnText: {
        color: 'white',
        textAlign: "center",
        fontWeight: "bold"
    },

    camaraBTn: {
        backgroundColor: "white",
        paddingVertical: 20,
        alignSelf: "center"
    },

    scanBTn: {
        backgroundColor: "white",
        paddingVertical: 10,
        alignSelf: "center"
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

    camaraBTnText: {
        color: 'black',
        textAlign: "center",
        fontWeight: "bold"
    },

    borderLine: {
        borderWidth: 0.5,
        borderColor: "#EE712E",
        marginBottom: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        width: "50%",

    },
    thumbnail: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center'
    }
})