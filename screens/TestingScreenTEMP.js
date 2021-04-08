import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import RegPrice from '../components/regPrice';

import { FlatList } from 'react-native-gesture-handler';

const ScannerScreenTEMP = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <FlatList
            ListHeaderComponent={
                <View style={styles.container}>
                    <Text>TESTING SCREEN</Text>

                    <TouchableOpacity
                        style={{ borderColor: "black", borderWidth: 1, margin: 5 }}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text>id: 1</Text>
                        <Text>EstablishmentName: Test</Text>
                        <Text>city: David</Text>
                    </TouchableOpacity>
                    
                        <RegPrice
                            navigation={navigation}
                            Visible={modalVisible}
                            onPress={setModalVisible}
                            EstablishmentName={'Super Xtra'}
                            city={'David'}
                            productId={'1'}
                            branchOfficeId={'1'}
                        />
                </View>
            }
        />
    );
};

ScannerScreenTEMP.navigationOptions = () => {
    return {
        headerTitle: 'TEST STUFF',
    };
};

export default ScannerScreenTEMP;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingTop: 40
    },
    Btn: {
        backgroundColor: "#ee712e",
        paddingVertical: 10,
        borderRadius: 20,
        width: 100,
        alignSelf: "center"
        , elevation: 10,
    },
    BtnText: {
        color: '#fff',
        textAlign: "center",
        fontWeight: "bold"

    },
})