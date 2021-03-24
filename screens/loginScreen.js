import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class LoginScreen extends React.Component{
    state = {
        username:"",
        password:"",
        loading:false
    }
    onChangeHandle(state, value){
        this.setState({
            [state]:value 
        })
    }
    doLogin(){
    const {username,password} = this.state;
    if(username && password){
            const req = {
                "email": username,
                "password": password        
            }
        this.setState({
            loading:true
        })
        axios.post("https://reqres.in/api/login", req)
        .then(
            res => {
                this.setState({
                    loading:false
                })
                AsyncStorage.setItem("token", res.data.token)
                .then(
                    res => {
                        this.props.navigation.navigate('App');
                        //alert("Login,Successfull");
                    });
               },
            err => {
                this.setState({
                    loading:false
                })
                alert("username or password is wrong");  
            }
        )
    }
    else{
        alert("Enter username & password");
    }
    }
    render(){
        const {username,password,loading} = this.state;
        return(
        <View style={styles.container}>
        <View style={styles.formWrapper}>
        <Text style={styles.welcomeText}>Ingresar a tu cuenta</Text>
        <View style={{justifyContent:"center",alignItems: 'center'}}><View style={styles.borderLine}></View></View>

        <View style={styles.formRow}>
        <TextInput style={styles.textInput}
        placeholder="Correo Electrónico"
        placeholderTextColor="#333"
        value={username} 
        onChangeText={(value) => this.onChangeHandle('username', value)}    
        />
        </View>
        <View></View>
        <View style={styles.formRow}>
        <TextInput style={styles.textInput}
        placeholder="Contraseña"
        placeholderTextColor="#333"
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => this.onChangeHandle('password', value)}
        />
        </View>
        <View></View>
        <View style={{justifyContent:"center",alignItems: 'center'}}>
        <TouchableOpacity
        activeOpacity={0.8}
        style={{...styles.signinBtn,
        backgroundColor: loading ? "#FFF8F5": "#EE712E"
        }}
        onPress={()=>this.doLogin()}
        disables={loading}>
        <Text style={styles.signinText}>
        {loading ? "Loading...": "Iniciar sesión"}
        </Text>
        </TouchableOpacity>
        <Text /*onPress={() => Linking.openURL('')}*/>
        Crear una cuenta
        </Text>
        </View>
   
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
        marginBottom:15,
        paddingVertical: 10,
        backgroundColor:"#FFFFFF",
        height:40,
        paddingHorizontal:10,
        color:"#333",
        borderRadius:0,
        borderWidth:1,
        borderColor:"black"
        
    },
    welcomeText:{
        textAlign:'center',
        fontSize:24,
       
        
    },
    signinBtn:{
        marginTop:30,
        paddingVertical: 10 ,
        borderRadius:20,
        width:"60%"
        
    },
    signinText:{
        textAlign:"center",
        color:'#fff',
        fontSize:18,
        fontWeight:"bold"
    },
    borderLine:{
        borderWidth: 0.5,
        borderColor:"#EE712E",
        marginBottom:50,
        marginTop:20,
        paddingHorizontal:10,
        width:"50%",
        
    }
})