import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const camaraimg = require('../assets/Camara.png')
const scanimg = require('../assets/scan.png')

const RegisterProductScreen = ({ navigation }) => {
    const [codigo_barra, setCodigo_barra] = useState(navigation.getParam('codigo_barra'));
    const [nombre, setNombre] = useState('');
    const [categoriaid, setCategoriaid] = useState('');
    
    const items =[{ label: 'Comida', value: '1' }, { label: 'Limpieza', value: '2' }];

    return (
        <View style={[styles.mycontent, { backgroundColor: "white", }]}>
            <Text style={styles.welcomeText}>Registrar Producto</Text>

            {/* Linea horizontal */}
            <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

            <View style={[{ backgroundColor: "white", }]} >
                <View style={styles.myrow}>

                    <View style={[styles.mytextboxS, { marginRight: 20 }]}>
                        <TextInput style={styles.textInputSmall}
                            placeholder="Codigo de Barra"
                            placeholderTextColor="#333"
                            value={codigo_barra}
                            onChangeText={setCodigo_barra}
                        />
                    </View>

                    <TouchableOpacity style={styles.scanBTn} title="scan" onPress={() => navigation.navigate('Scanner')}>
                        <View ><Image source={scanimg} style={styles.buttonimage} /></View>
                    </TouchableOpacity>

                </View>

                <View>
                    <TouchableOpacity style={styles.camaraBTn} title="camara" onPress={() => navigation.navigate('photo')}>
                        <View style={{ justifyContent: "center", alignItems: 'center' }}><Image source={camaraimg} /></View>
                    </TouchableOpacity>
                    <Text style={styles.camaraBTnText}>Tomar Imagen del Producto</Text>
                </View>

                <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                    <TextInput style={styles.textInput}
                        placeholder="Nombre del Producto"
                        placeholderTextColor="#333"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                </View>

            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => {
                    console.log("------------------------------------");
                    console.log("codigo_barra: "+codigo_barra);
                    console.log("nombre: "+nombre);
                    console.log("categoriaid: "+categoriaid);

                    navigation.navigate('Dashboard');
                    }}>
                <Text style={styles.BTnText}>Registrar Producto</Text>
            </TouchableOpacity>
        </View>
    );
};

RegisterProductScreen.navigationOptions = () => {
    return {
        headerTitle: '',
    };
};

export default RegisterProductScreen;

const styles = StyleSheet.create({
    mycontent: {
        flex: 1,

        padding: 30

    },
    myform: {


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
        height: "6%",
        width: "60%",
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

    }
})