import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, Pressable, View } from "react-native";


class App extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
         <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}>Registrar nuevo establecimiento</Text> 
              <View style={{justifyContent:"center",alignItems: 'center'}}><View style={styles.borderLine}></View></View>
              
         <TextInput style={styles.textInput} placeholder="Introduzca nombre del establecimiento" placeholderTextColor="#333"/>     

              <View style={styles.container}>
              <View style={styles.buttoncontainer} >
              <Pressable
                style={[styles.button1, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              </View>
              <View  style={styles.buttoncontainer}>
              <Pressable
                style={[styles.button1, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Guardar</Text>
              </Pressable>
              </View>
              </View>
            </View>
            </View>
        </Modal>
        <Pressable
          style={[styles.button2, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    );
  }
}

export default App ;
const styles = StyleSheet.create({
  textInput:{
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    color: "#333",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "black",
    marginBottom:50,
},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button1: {
    backgroundColor:"white",
     borderColor:"#878787",
     marginBottom:  3,
     borderWidth: 1,
    paddingHorizontal:53,
  },
  button2: {
    backgroundColor:"white",
     borderColor:"#878787",
     marginBottom:3,
     borderWidth: 1,
     padding: 10,
    elevation: 2,
    
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "#EE712E",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
  },
container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',  
    },
    borderLine:{
      borderWidth: 1,
      borderColor:"#EE712E",
      marginBottom:50,
      marginTop:20,
      paddingHorizontal:100,
      width:"50%",
  }
});