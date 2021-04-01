import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


const RegisterSucursalScreen = ({ navigation }) => {
const { establecimiento, provincia, zipcode, ciudad} = "";

    return (
        <View style={[styles.mycontent, { backgroundColor: "white", }]}>
            <Text style={styles.welcomeText}>Registrar Sucursal</Text>

            {/* Linea horizontal */}
            <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>
            <Text>Direccion</Text>
            <View style={[{ backgroundColor: "white", }]} >
               
                <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                    <TextInput style={styles.textInput}
                        placeholder="Zip Code"
                        placeholderTextColor="#333"
                        value={zipcode}
                        onChangeText={(value) => this.onChangeHandle('zipcode', value)}
                    />
                </View>

                <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                    <TextInput style={styles.textInput}
                        placeholder="Ciudad"
                        placeholderTextColor="#333"
                        value={ciudad}
                        onChangeText={(value) => this.onChangeHandle('ciudad', value)}
                    />
                </View>

            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.BTnText}>Registrar Sucursal</Text>
            </TouchableOpacity>

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