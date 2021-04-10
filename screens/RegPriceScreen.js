import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";

import zugoi from '../api/zugoi';

import ModalMessage from '../components/modalMessage';

const RegPriceScreen = ({ navigation }) => {
  const [posted, setPosted] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  let errors = 0;
  const establishmentName = navigation.getParam('establishmentName');
  const city = navigation.getParam('city');
  const productId = navigation.getParam('productId');
  const branchOfficeId = navigation.getParam('branchOfficeId');
  const productName = navigation.getParam('productName');
  const img = navigation.getParam('img');

  const barCode = navigation.getParam('barCode');

  const [price, setPrice] = useState('');

  // API POST
  const RegPrecApi = async () => {
    const response = await zugoi('/products/register/price', {
      method: 'post',
      data: {
        productId: productId,
        branchOfficeId: branchOfficeId,
        price: price
      }
    })
      .then(() => {
        // console.log('************');
        // console.log('** Posted **');
        // console.log('************');

        setPosted(true);
      })
      .catch((error) => {
        // console.log(error);

        setErrorModal(true);
      });
  };

  const onSubmit = () => {
    let err = [];
    if (price === '' || price === null) {
      errors++;
      err.push(' [Price]');
    }
    if (errors > 0) {
      alert("Error! Rellenar: " + err);
      return;
    }
    console.log('********************');
    console.log('productId: ' + productId);
    console.log('branchOfficeId: ' + branchOfficeId);
    console.log('price: ' + price);
    console.log('barCode: ' + barCode);
    console.log('********************');

    // API CALL
    RegPrecApi();
  }

  return (
    <>
      {posted ? (
        <ModalMessage
          Type='Checked'
          Title='¡Precio agregado!'
          Message='¡El Precio ha sido agregado!'
          Button='Ok'
          Visible={posted}
          onPress={setPosted}
          navigation={navigation}
          Nav='VerProducto'
        />
      ) : null}
      {errorModal ? (
        <ModalMessage
          Title='¡Error!'
          Message='¡Algo salio mal!'
          Button='Fail'
          Visible={errorModal}
          onPress={setErrorModal}
          navigation={navigation}
        />
      ) : null}
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Agregar Precio</Text>
          <View style={styles.ImgContainer}>
            <Image
              style={styles.ProductImage}
              source={{ uri: `${img}` }}
            />
            <Text style={styles.ProductText}>{productName}</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>
          <View style={{ flexDirection: "row" }}>
            <Text >{establishmentName}</Text>
            <Text > ({city})</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Precio"
            placeholderTextColor="#333"
            keyboardType="numeric"
            value={price}
            onChangeText={(price) => {
              setPrice(price);
              errors = 0;
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.logouBtn} onPress={() => (navigation.navigate('VerProducto'))}>
              <Text style={styles.logouBtnText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logouBtn} onPress={onSubmit}>
              <Text style={styles.logouBtnText}>Registar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </>
  )
}

RegPriceScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: '',
  };
};

export default RegPriceScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#FFFFFF",
    color: "#333",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
    width:150,

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
    padding: 60,
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
    backgroundColor: "white",
    borderColor: "#878787",
    marginBottom: 3,
    borderWidth: 1,
    paddingHorizontal: 53,
  },
  button2: {
    backgroundColor: "white",
    borderColor: "#878787",
    marginBottom: 3,
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
  borderLine: {
    borderWidth: 1,
    borderColor: "#EE712E",
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 100,
    width: "50%",
  },
  logouBtn: {
    backgroundColor: "#ee712e",
    paddingVertical: 10,
    borderRadius: 20,
    width: 100,
    alignSelf: "center"
    , elevation: 10,
  },
  logouBtnText: {
    color: '#fff',
    textAlign: "center",
    fontWeight: "bold"

  },
  ProductImage: {
    height: 100, width: 100, alignSelf: 'center', resizeMode: "contain",
  },
  ImgContainer: {
    marginVertical: 20,
  },
  ProductText: {
    marginVertical: 5,
    textAlign: "center",
    color: '#fff',
    fontSize: 14,
    color: 'gray',

  },
});