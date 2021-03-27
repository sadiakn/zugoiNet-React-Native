import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

class registerUser2 extends React.Component {
    state = {
        nombre: "",
        apellido: "",
        numero: "",
        sexo: "",
        correo: "",
        password1: "",
        password2: "",

    }

    doForm() {
        const { nombre, apellido, numero, sexo, correo, password1, password2 } = this.state;
    }
    onChangeHandle(state, value) {
        this.setState({
            [state]: value
        })
    }
    render() {
        const { navigation } = this.props;
        const { nombre, apellido, numero, sexo, correo, password1, password2 } = this.state;
        

        return (
            <View style={[styles.mycontent, { backgroundColor: "white", }]}>
                <Text style={styles.welcomeText}>Crear una Cuenta</Text>

                {/* Linea horizontal */}
                <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

                <View >

                    <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                        <TextInput style={styles.textInput}
                            placeholder="Correo electrónico"
                            placeholderTextColor="#333"
                            value={correo}
                            onChangeText={(value) => this.onChangeHandle('correo', value)}
                        />
                    </View>
                    <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                        <TextInput style={styles.textInput}
                            placeholder="Contraseña"
                            placeholderTextColor="#333"
                            value={password1}
                            onChangeText={(value) => this.onChangeHandle('password1', value)}
                        />
                    </View>
                    <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                        <TextInput style={styles.textInput}
                            placeholder="Vuelve a introducir la contraseña"
                            placeholderTextColor="#333"
                            value={password2}
                            onChangeText={(value) => this.onChangeHandle('password2', value)}
                        />
                    </View>
                

                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={() => this.props.navigation.navigate('Auth')}>
                    <Text style={styles.BTnText}>Registrarse</Text>
                </TouchableOpacity>
                <Text style={styles.DisclaimerText}>Al hacer clic en “Registrarse”, aceptas los Términos y Condiciones de Uso de zugoiNet. </Text>
            </View>
        )
    }
}

export default registerUser2;

const styles = StyleSheet.create({
    radiob: {
        justifyContent: 'center', alignItems: 'center'

    },
    mycontent: {
        flex: 1,

        padding: 30

    },
    DisclaimerText: {
        fontSize:10,
        textAlign:'center',
        

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
        marginTop:40,
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