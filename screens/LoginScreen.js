import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import zugoi from '../api/zugoi';

import ModalMessage from '../components/modalMessage';

const LoginScreen = ({ navigation }) => {
    const [posted, setPosted] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorModal, setErrorModal] = useState(false);

    let errors = 0;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const storeToken = async (value) => {
        try {
            await AsyncStorage.setItem('token', value)
            // console.log('-- LOGIN --');
            // console.log(value);
        } catch (e) {
            // saving error
        }
    }

    // API POST
    const loginApi = async () => {
        // console.log(barCode);
        
        const response = await zugoi('/auth/login', {
            method: 'post',
            data: {
                email: email,
                password: password
            }
        })
            .then((res) => {
                // setProductName(res.data.product.productName);
                storeToken(res.data.token);

                setPosted(true);
                navigation.navigate('Dashboard');
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    setErrorLogin(true);
                }
                else {
                    // console.log(error);
                    setErrorModal(true);
                }
            });
    };

    const onSubmit = () => {
        let err = [];
        if (email === '' || email === null) {
            errors++;
            err.push(' [Email]');
        }
        if (password === '' || password === null) {
            errors++;
            err.push(' [Password]');
        }
        if (errors > 0) {
            alert("Error! Rellenar: " + err);
            return;
        }
        if (password.length < 8) {
            alert("Error! El Password es de 8 o mas caracteres");
            return;
        }

        // console.log('********************');
        // console.log('** Validation: OK **');
        // console.log('********************');
        // navigation.navigate('mainFlow');

        // API CALL
        loginApi();
        // navigation.navigate('Dashboard');
    }

    return (
        <>
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
            {errorLogin ? (
                <ModalMessage
                    Title='¡Error!'
                    Message='¡Email o Password incorrecto!'
                    Button='Fail'
                    Visible={errorLogin}
                    onPress={setErrorLogin}
                    navigation={navigation}
                />
            ) : null}

            <View style={styles.container}>
                <View style={styles.formWrapper}>
                    <Text style={styles.welcomeText}>Ingresar a tu cuenta</Text>
                    <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

                    <View style={styles.formRow}>
                        <TextInput style={styles.textInput}
                            placeholder="Correo Electrónico"
                            placeholderTextColor="#333"
                            value={email}
                            onChangeText={(email) => {
                                setEmail(email);
                                errors = 0;
                            }}
                        />
                    </View>
                    <View></View>
                    <View style={styles.formRow}>
                        <TextInput style={styles.textInput}
                            placeholder="Contraseña"
                            placeholderTextColor="#333"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(password) => {
                                setPassword(password);
                                errors = 0;
                            }}
                        />
                    </View>
                    <View></View>
                    <View style={{ justifyContent: "center", alignItems: 'center' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.SignInBtn}
                            onPress={() => {
                                // navigation.navigate('mainFlow');
                                onSubmit();
                            }}
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
        </>
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