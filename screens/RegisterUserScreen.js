import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var gender = [
    { label: 'Hombre    ', value: "M" },
    { label: 'Mujer', value: "F" }
];

const RegisterUserScreen = ({ navigation }) => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [numero, setNumero] = useState('');
    const [sexo, setSexo] = useState('');

    return (
        <View style={[styles.mycontent, { backgroundColor: "white", }]}>
            <Text style={styles.welcomeText}>Crear una Cuenta</Text>

            {/* Linea horizontal */}
            <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

            <View >
                <View style={styles.myrow}>
                    <View style={[styles.mytextboxS, { backgroundColor: "darkorange", }]}>
                        <TextInput style={styles.textInputSmall}
                            placeholder="Nombre"
                            placeholderTextColor="#333"
                            value={nombre}
                            onChangeText={setNombre}
                        />
                    </View>
                    <View style={[styles.mytextboxS, { backgroundColor: "yellow", }]}>
                        <TextInput style={styles.textInputSmall}
                            placeholder="Apellido"
                            placeholderTextColor="#333"
                            value={apellido}
                            onChangeText={setApellido}
                        />
                    </View>
                </View>

                <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                    <TextInput style={styles.textInput}
                        placeholder="Número de Teléfono                              (Opcional)"
                        placeholderTextColor="#333"
                        value={numero}
                        onChangeText={setNumero}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Text >Sexo:</Text>
                </View>
                <View >

                    <RadioForm style={styles.radiob}
                        animation={true}
                        radio_props={gender}
                        initial={-1}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#ee712e'}
                        selectedButtonColor={'#ee712e'}
                        animation={true}
                        onPress={(value) => { setSexo(value)}}
                        labelStyle={{ fontSize: 14, color: "black" }}
                    />


                </View>



            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => {
                    console.log("------------------------------------");
                    console.log("nombre: "+nombre);
                    console.log("apellido: "+apellido);
                    console.log("numero: "+numero);
                    console.log("sexo: "+sexo);
                    navigation.navigate('RegUser2', { nombre, apellido, numero, sexo });
                    }}>
                <Text style={styles.BTnText}>Siguiente</Text>
            </TouchableOpacity>
        </View>
    );
};

RegisterUserScreen.navigationOptions = () => {
    return {
        headerTitle: 'Registrar Usuario',
    };
};

export default RegisterUserScreen;

const styles = StyleSheet.create({
    radiob: {
        justifyContent: 'center', alignItems: 'center'

    },
    mycontent: {
        flex: 1,

        padding: 30

    },
    myform: {


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
        width: "50%",

    }
})