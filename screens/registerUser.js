import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';


class registerUser extends React.Component {

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
        const { nombre, apellido, numero, sexo, correo, password1, password2 } = this.state;
        return (
            // <View style={styles.container}>
            //     {/* <View style={styles.formWrapper}> */}
            //         {/* <Text style={styles.welcomeText}>Crear una Cuenta</Text>

                    // <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View> */}
                <View>  
                    <View style={ { flexDirection: "column",flex:1,padding:20, }}>

                        <View style={{ flexDirection: "row",flex:1,padding:20,}}>
                            <View style={{ flex: 1, backgroundColor: "darkorange" }}>

                            </View>
                            <View style={{ flex: 1, backgroundColor: "green" }}>

                            </View>

                        </View>
                        <View style={{ flex: 1, backgroundColor: "darkorange" }} />
                        <View style={{ flex: 1, backgroundColor: "green" }} />
                        <View style={{ flex: 1, backgroundColor: "blue" }} />
                    </View>
                </View>
            //         {/* <View style={styles.imputWrapper}>
            //             <View style={styles.row}>
            //                 <View style={styles.formRow}>
            //                     <TextInput style={styles.textInputSmall}
            //                         placeholder="Nombre"
            //                         placeholderTextColor="#333"
            //                         value={nombre}
            //                         onChangeText={(value) => this.onChangeHandle('nombre', value)}
            //                     />
            //                 </View>


            //                 <View style={styles.formRow}>
            //                     <TextInput style={styles.textInputSmall}
            //                         placeholder="Apellido"
            //                         placeholderTextColor="#333"
            //                         value={apellido}
            //                         onChangeText={(value) => this.onChangeHandle('apellido', value)}
            //                     />
            //                 </View>

            //             </View>
            //             <View style={styles.formRow}>
            //                 <TextInput style={styles.textInput}
            //                     placeholder="Número de Teléfono (Opcional)"
            //                     placeholderTextColor="#333"
            //                     value={numero}
            //                     onChangeText={(value) => this.onChangeHandle('numero', value)}
            //                 />
            //             </View>

            //             <View style={styles.formRow}>

            //             </View>


            //             <View style={styles.formRow}>
            //                 <TouchableOpacity
            //                     activeOpacity={0.8}
            //                     style={styles.btn}
            //                     onPress={() => this.props.navigation.navigate('RegU2')}>
            //                     <Text style={styles.BTnText}>Siguiente</Text>
            //                 </TouchableOpacity>
            //             </View>

            //     //     </View> */}


            //     // </View >





            // // </View >
        )
    }
}

export default registerUser;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",

    },

    formRow: {
        flex: 1,
        marginBottom: 10
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
    formWrapper: {
        width: "80%"
    },
    imputWrapper: {
        flexDirection: "column",
        flex: 1,
        marginBottom: 20,
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
    textInputSmall: {

        width: "30%",
        marginBottom: 15,
        marginHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#FFFFFF",
        height: 40,
        paddingHorizontal: 5,
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