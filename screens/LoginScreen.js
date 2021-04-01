import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';

import { Text, Input, Button} from 'react-native-elements';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const LoginScreen = ({ navigation }) => {
    const { username, password} = "";
    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <Text style={styles.welcomeText}>Ingresar a tu cuenta</Text>
                <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

                <View style={styles.formRow}>
                    <TextInput style={styles.textInput}
                        placeholder="Correo Electrónico"
                        placeholderTextColor="#333"
                        value={username}
                        onChangeText={(value) => { }}
                    />
                </View>
                <View></View>
                <View style={styles.formRow}>
                    <TextInput style={styles.textInput}
                        placeholder="Contraseña"
                        placeholderTextColor="#333"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(value) => { }}
                    />
                </View>
                <View></View>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.SignInBtn}
                        onPress={() => navigation.navigate('mainFlow')}
                        >
                        <Text style={styles.signinText}>
                            Iniciar sesión
                        </Text>
                    </TouchableOpacity>
                    <Text onPress={() => navigation.navigate('RegUser')}>
                        Crear una cuenta
                        </Text>
                </View>
            </View>
        </View>
    );
};

LoginScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    formWrapper: {
        width: "80%"
    },
    formRow: {
        marginBottom: 10
    },
    textInput: {
        marginBottom: 15,
        paddingVertical: 10,
        backgroundColor: "#FFFFFF",
        height: 40,
        paddingHorizontal: 10,
        color: "#333",
        borderRadius: 0,
        borderWidth: 1,
        borderColor: "black"

    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 24,


    },
    SignInBtn: {
        marginTop: 30,
        paddingVertical: 10,
        borderRadius: 20,
        width: "60%",
        backgroundColor: "#EE712E",

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