import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScannerScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const mode = navigation.getParam('mode');
  
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // old alert
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log("------------------------------------");
    console.log('mode: ' + mode);
    console.log('barCode: ' + data);
    setScanned(true);
    if (mode == 'Reg') {

      navigation.navigate('RegProduct', { barCode: data });
    } else {
      // alert(`Bar code: ${barCode} has been scanned!`);
      navigation.navigate('VerProducto', { barCode: data });
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Scan again'} onPress={() => setScanned(false)}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

ScannerScreen.navigationOptions = () => {
  return {
      headerTitle: 'Scanner',
  };
};

export default ScannerScreen;
