import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import zugoi from '../api/zugoi';

const RegisterPriceScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const barCode = '7509552816334';
    // API POST
    const productApi = async () => {
        const response = await zugoi('/products/prices/branch-offices', {
            method: 'post',
            data: {
                barCode: barCode
            }
        }).then((res) => {
            setResults(res.data),
                console.log(res.data),
                setLoading(true),
                error => { console.log(error) }
        });
    };

    useEffect(() => {
        productApi();
    }, []);

    return (
        <FlatList
            ListHeaderComponent={
                <View style={styles.container}>
                    <Text>ADD PRICE</Text>
                    {loading ? (
                        <View>
                            <Text>!Agregar Precios!</Text>
                            <Text>Image: {results.product.img}</Text>
                            <Text>Product Name: {results.product.productName}</Text>
                            {
                                results.branchOffices.map((results, index) => {
                                    const { id, Establishment, Address } = results;

                                    return (
                                        <TouchableOpacity key={id} style={{ borderColor: "black", borderWidth: 1, margin: 5 }}>
                                            <Text>id: {id}</Text>
                                            <Text>EstablishmentName: {Establishment.establishmentName}</Text>
                                            <Text>city: {Address.city}</Text>
                                        </TouchableOpacity>
                                    );
                                })
                            }

                        </View>
                    )
                        : (
                            <ActivityIndicator size="large" color="#EE712E" />
                        )}
                </View>
            }
        />
    );
};

RegisterPriceScreen.navigationOptions = () => {
    return {
        headerTitle: '',
    };
};

export default RegisterPriceScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingTop: 40
    },
})