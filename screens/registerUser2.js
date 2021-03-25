import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

class registerUser2 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Register User Part2</Text>
                <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={()=>this.props.navigation.navigate('Auth')}>
                <Text style={styles.BTnText}>Fin</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default registerUser2;

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