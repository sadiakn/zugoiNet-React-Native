import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const RegisterEstablishmentScreen = props => {
    const { establishmentName, typeOfEstablishmentId } = "";
    // constructor(props){
    //     this.state = {
    //         typeOfEstablishmentId:"1"
    //     }
    
    //     this.controller;
    // };
    
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Registro de Establecimiento</Text>
            {/* Linea horizontal */}
            <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

            <View >

                <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                    <TextInput style={styles.textInput}
                        placeholder="Nombre del Establecimiento"
                        placeholderTextColor="#333"
                        value={establishmentName}
                        onChangeText={(value) => this.onChangeHandle('establishmentName', value)}
                    />
                </View>
                <View style={[styles.mytextboxL, { }]} >
                    <DropDownPicker
                        items={[
                            { label: 'Alimentos', value: '1'},
                            { label: 'Ferreteria', value: '2'},
                            { label: 'Electronicos', value: '3'},
                        ]}
                        defaultValue={this.state.typeOfEstablishmentId}
                        placeholder="Tipo de Establecimiento"
                        containerStyle={{ height:55,width:"100%"}}
                        style={styles.myDropdownList,{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={item => this.setState({
                            typeOfEstablishmentId: item.value
                        })}
                    />
                </View>

            </View>



        </View>
    )
}

RegisterEstablishmentScreen.navigationOptions = () => {
    return {
        headerTitle: '',
    };
};

export default RegisterEstablishmentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        height: "100%",

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
        width: "40%",

    }
})