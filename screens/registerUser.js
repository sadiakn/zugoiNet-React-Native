import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


class registerUser extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Register User Part1</Text>
                <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={()=>this.props.navigation.navigate('RegU2')}>
                <Text style={styles.BTnText}>Siguiente</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default registerUser;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    btn:{
        marginTop:30,
        paddingVertical: 10 ,
        borderRadius:20,
        width:"60%",
        backgroundColor: "#EE712E",
        alignSelf: "center"
    },
    BTnText: {
        color: 'white',
        textAlign: "center",
        fontWeight: "bold"
    }
})