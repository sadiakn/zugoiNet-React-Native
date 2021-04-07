import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import zugoi from '../api/zugoi';

const VerProductoScreen = ({ navigation }) => {
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
                    <Text>PRODUCTO</Text>
                    {loading ? (
                        <View>
                            <Text>!Producto Encontrado!</Text>
                            <Text>Image: {results.product.img}</Text>
                            <Text>Product Name: {results.product.productName}</Text>
                            {
                                results.branchOfficesWithPrice.map((results, index) => {
                                    const { id, Establishment, PricesProductsBranchOffices, Address } = results;

                                    return (
                                        <View key={id} style={{ borderColor: "black", borderWidth: 1, margin: 5 }}>
                                            <Text>id: {id}</Text>
                                            <Text>EstablishmentName: {Establishment.establishmentName}</Text>
                                            <Text>city: {Address.city}</Text>
                                            <Text>PriceID: {PricesProductsBranchOffices[0].id}</Text>
                                            <Text>Price: {PricesProductsBranchOffices[0].price}</Text>
                                        </View>
                                    );
                                })
                            }
                            <Button
                                title="Agregar Precio"
                                onPress={() => {navigation.navigate('RegPrice'), { data: barCode }}}
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

VerProductoScreen.navigationOptions = () => {
    return {
        headerTitle: '',
    };
};

export default VerProductoScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingTop: 40
    },
})