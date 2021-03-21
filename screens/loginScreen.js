import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';

class LoginScreen extends React.Component{
    render(){
        return(
        <View style={styles.container}>
        <View style={styles.formWrapper}>
        <Text style={styles.welcomeText}>WELCOME</Text>


        <View style={styles.formRow}>
        <TextInput style={styles.textInput} placeholder="User" placeholderTextColor="#333"/>
        </View>

        <View style={styles.formRow}>
        <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor="#333" secureTextEntry={true}/>
        </View>

        <TouchableOpacity style={styles.signinBtn} onPress={()=>this.props.navigation.navigate('App')}>
        <Text style={styles.signinText}>SING IN</Text>
        </TouchableOpacity>
        </View>
        </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    formWrapper:{
        width:"80%"
    },
    formRow:{
        marginBottom:10
    },
    textInput:{
        backgroundColor:"#ddd",
        height:40,
        paddingHorizontal:10,
        color:"#333"
    },
    welcomeText:{
        textAlign:'center',
        marginBottom:20,
        fontSize:24,
        fontWeight:"bold"
    },
    signinBtn:{
        backgroundColor:"blue",
        paddingVertical: 10 
    },
    signinText:{
        textAlign:"center",
        color:'#fff',
        fontSize:18,
        fontWeight:"bold"
    }
})