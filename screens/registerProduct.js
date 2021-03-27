import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

class registerProduct extends React.Component {

    state = {
        codigo_barra: "",
        nombre: "",
        categoria: "",
    }
    doForm() {
        const { codigo_barra, nombre, categoria} = this.state;
    }
    onChangeHandle(state, value) {
        this.setState({
            [state]: value
        })
    }

    render() {
        const { codigo_barra, nombre, categoria} = this.state;
        return (
            <View style={[styles.mycontent, { backgroundColor: "white", }]}>
                <Text style={styles.welcomeText}>Registrar Producto</Text>

                {/* Linea horizontal */}
                <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

                <View >
                    <View style={styles.myrow}>
                        
                        <View style={[styles.mytextboxS, { backgroundColor: "darkorange", }]}>
                            <TextInput style={styles.textInputSmall}
                                placeholder="Codigo de Barra"
                                placeholderTextColor="#333"
                                value={codigo_barra}
                                onChangeText={(value) => this.onChangeHandle('codigo_barra', value)}
                            />
                        </View>

                    </View>

                    <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                        <TextInput style={styles.textInput}
                            placeholder="Nombre del Producto"
                            placeholderTextColor="#333"
                            value={nombre}
                            onChangeText={(value) => this.onChangeHandle('nombre', value)}
                        />
                    </View>


                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={() => this.props.navigation.navigate('')}>
                    <Text style={styles.BTnText}>Registrar Producto</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default registerProduct;

const styles = StyleSheet.create({
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