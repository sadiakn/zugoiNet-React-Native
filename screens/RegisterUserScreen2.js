import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

const RegisterUserScreen2 = ({ navigation }) => {
    // Values from registerUserScreen1
    const name = navigation.getParam('name');
    const lastName = navigation.getParam('lastName');
    const phone = navigation.getParam('phone');
    const sex = navigation.getParam('sex');

    // Values in this screen
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    // Autofilled values for user
    const countryId = '1';
    const provinceId = '1';
    const city = 'david';

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
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                    <TextInput style={styles.textInput}
                        placeholder="Contraseña"
                        placeholderTextColor="#333"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                    <TextInput style={styles.textInput}
                        placeholder="Vuelve a introducir la contraseña"
                        placeholderTextColor="#333"
                        value={password2}
                        onChangeText={setPassword2}
                    />
                </View>

            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => {
                    console.log("------------------------------------");
                    console.log("name: "+name);
                    console.log("lastName: "+lastName);
                    console.log("email: "+email);
                    console.log("phone: "+phone);
                    console.log("sex: "+sex);
                    console.log("password: "+password);
                    console.log("password2: "+password2);
                    console.log("countryId: "+countryId);
                    console.log("provinceId: "+provinceId);
                    console.log("city: "+city);
                    navigation.navigate('Login');}
                    }>
                <Text style={styles.BTnText}>Registrarse</Text>
            </TouchableOpacity>
            <Text style={styles.DisclaimerText}>Al hacer clic en “Registrarse”, aceptas los Términos y Condiciones de Uso de zugoiNet. </Text>
        </View>
    );
};

RegisterUserScreen2.navigationOptions = () => {
    return {
        headerTitle: '',
    };
};

export default RegisterUserScreen2;

const styles = StyleSheet.create({
    radiob: {
        justifyContent: 'center', alignItems: 'center'

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