import React, { Component, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable,Image,View } from "react-native";


const checked1 = require('../assets/cancel.png');

const regNoProduct = ({ name, type }) => {

  const [modalVisible , setModalVisible] = useState(false);

    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View><Image source={checked1}/></View>
              <Text style={styles.modalText1}>¡Producto no registrado!</Text>
              <Text style={styles.modalText2}>¡Oops!  El Producto no se encuentra registrado</Text>         
              <View style={{justifyContent:"center",alignItems: 'center'}}><View style={styles.borderLine}></View></View>
              <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal {name}</Text>
        </Pressable>
        </View>
      </View>
    );
  }


export default regNoProduct;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#EE712E",
  },
  buttonClose: {
    backgroundColor: "#EE712E",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText1: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
  },

  modalText2: {
    marginBottom: 15,
    textAlign: "center"
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
