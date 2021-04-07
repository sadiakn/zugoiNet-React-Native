import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import zugoi from '../api/zugoi';

const ScannerScreenTEMP2 = ({ navigation }) => {
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
    console.log("------------------------------------");
    console.log(results);
    return (
        <FlatList
            ListHeaderComponent={
                <View style={styles.container}>
                    <Text>TESTING autoload</Text>
                    {loading ? (
                        <View>
                            <Text>!Producto Encontrado!</Text>
                            <Text>Image: {results.product.img}</Text>
                            <Text>Product Name: {results.product.productName}</Text>
                            <Text>Product Image: {results.product.img}</Text>
                            {
                                results.branchOfficesWithPrice.map((results, index) => {
                                    const { id, Establishment, PricesProductsBranchOffices } = results;

                                    return (
                                        <View key={id} style={{ borderColor: "black", borderWidth: 1, margin: 5 }}>
                                            <Text>id: {id}</Text>
                                            <Text>EstablishmentName: {Establishment.establishmentName}</Text>
                                            <Text>PriceID: {PricesProductsBranchOffices[0].id}</Text>
                                            <Text>Price: {PricesProductsBranchOffices[0].price}</Text>
                                        </View>
                                    );
                                })
                            }
                            <Button
                                title="Agregar Precios"
                                onPress={() => {
                                    console.log("------------------");
                                    console.log(results.branchOffices);
                                    navigation.navigate('RegPrice', {branchOffices: results.branchOffices});
                                }}
                            />

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

ScannerScreenTEMP2.navigationOptions = () => {
    return {
        headerTitle: 'TEST STUFF 2',
    };
};

export default ScannerScreenTEMP2;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingTop: 40
    },
})