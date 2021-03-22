import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import axios from 'axios';
import asyncStorage from '@react-native-community/async-storage';

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
                AsyncStorage.setItem("token",res)
                .then(
                    res =>{
                        this.props.navigation.navigate('App');
                        alert("Login,Successfull");
                    });s
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
        <Text style={styles.welcomeText}>WELCOME</Text>


        <View style={styles.formRow}>
        <TextInput style={styles.textInput}
        placeholder=" Enter User"
        placeholderTextColor="#333"
        value={username} 
        onChangeText={(value) => this.onChangeHandle('username', value)}    
        />
        
        </View>

        <View style={styles.formRow}>
        <TextInput style={styles.textInput}
        placeholder="Enter Password"
        placeholderTextColor="#333"
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => this.onChangeHandle('password', value)}
        />
        </View>

        <TouchableOpacity
        activeOpacity={0.8}
        style={{...styles.signinBtn,
        backgroundColor: loading ? "#ddd": "blue"
        }}
        onPress={()=>this.doLogin()}
        disables={loading}>
        <Text style={styles.signinText}>
        {loading ? "Loading...": "SING IN"}
        </Text>
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
        paddingVertical: 10 
    },
    signinText:{
        textAlign:"center",
        color:'#fff',
        fontSize:18,
        fontWeight:"bold"
    }
})