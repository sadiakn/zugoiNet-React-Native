import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, Pressable, View, TouchableOpacity } from "react-native";

const regPrice = ({ navigation, Visible, onPress, EstablishmentName, city, productId, branchOfficeId }) => {
  let errors = 0;
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
            setPosted(true);
            console.log('************');
            console.log('** Posted **');
            console.log('************');
            // navigation.navigate('Test');
        })
        .catch((error) => {
            console.log(error);
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
    console.log('productId: '+productId);
    console.log('branchOfficeId: '+branchOfficeId);
    console.log('price: '+price);

    // console.log('********************');
    // console.log('** Validation: OK **');
    // console.log('********************');
    // navigation.navigate('Test');

    // API CALL
    // RegPrecApi();
  }

  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={Visible}
          onRequestClose={() => (onPress(!Visible))}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Agregar Precio</Text>
              <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>
              <View style={{ flexDirection: "row" }}>
                <Text >{EstablishmentName}</Text>
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
              </View>
              <Text >{city}</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.logouBtn} onPress={() => (onPress(!Visible))}>
                  <Text style={styles.logouBtnText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logouBtn} onPress={onSubmit}>
                  <Text style={styles.logouBtnText}>Registar</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
      </View>
    </>
  )
}

export default regPrice;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#FFFFFF",
    color: "#333",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
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
    marginBottom: 50,
    marginTop: 20,
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
});