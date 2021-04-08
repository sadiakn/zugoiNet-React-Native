import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import zugoi from '../api/zugoi';

const VerProductoScreen = ({ navigation }) => {
    const barCode = '7509552816334';
    const [results, setResults] = useState(null);

    const [loading, setLoading] = useState(false);
    const [posted, setPosted] = useState(false);

    // API POST
    const productApi = async () => {
        const response = await zugoi('/products/prices/branch-offices', {
            method: 'post',
            data: {
                barCode: barCode
            }
        })
            .then((res) => {
                setResults(res.data);
                setLoading(true);
                setPosted(true);
                console.log('************');
                console.log('** Posted **');
                console.log('************');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        productApi();
    }, []);
    
    return (
        <FlatList
            ListHeaderComponent={
                <>
                    <View style={{ marginVertical: 25 }}>
                        <Text style={styles.BigText}>¡Producto encontrado!</Text>
                        <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>
                    </View>
                    {loading ? (
                        <View style={{}}>
                            <View style={styles.ImgContainer}>
                                <Image
                                    style={styles.ProductImage}
                                    source={{ uri: `${results.product.img}` }}
                                />
                                <Text style={styles.ProductText}>{results.product.productName}</Text>
                            </View>
                            <View style={styles.myrow}>
                                <View style={{ marginHorizontal: 5, }}>
                                    <Text style={styles.BigText}>Comparaciones</Text>
                                </View>
                                <View style={{ marginHorizontal: 5, justifyContent: "center", alignItems: 'center' }}>
                                    <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>
                                </View>


                            </View>

                            {
                                results.branchOfficesWithPrice.map((results, index) => {
                                    const { id, Establishment, PricesProductsBranchOffices, Address } = results;

                                    return (
                                        <View key={id} style={styles.PriceContainer}>
                                            <View style={styles.myrow}>
                                                <View style={{ marginHorizontal: 50, }}>
                                                    <Text style={styles.ProductText}>{Establishment.establishmentName}</Text>
                                                </View>
                                                <View style={{ marginHorizontal: 50, }}>
                                                    <Text style={styles.ProductText}>Precio:  {PricesProductsBranchOffices[0].price}</Text>
                                                </View>


                                            </View>
                                            <Text style={styles.CityText}>            Ciudad: {Address.city}</Text>

                                        </View>
                                    );
                                })
                            }
                            <Text> ---------------------------------- </Text>
                            <Text> Agregar Precio vvvvv </Text>
                            <Text> ---------------------------------- </Text>
                            {
                                results.branchOffices.map((results, index) => {
                                    const { id, Establishment, PricesProductsBranchOffices, Address } = results;

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
                </>
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
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingTop: 40
    },
    PriceContainer: {
        paddingHorizontal: 10,
        marginVertical: 10,
    },

    myrow: {

        flexDirection: "row",
        marginVertical: 20,

    },

    ProductImage: {
        height: 200, width: 200, alignSelf: 'center', resizeMode: "contain",
    },
    ImgContainer: {
        marginVertical: 20,
    },
    borderLine: {
        borderWidth: 0.4,
        borderColor: "#EE712E",

        marginTop: 5,
        paddingHorizontal: 10,
        width: 145,
        height: 0
    },
    borderLine: {
        borderWidth: 0.4,
        borderColor: "#EE712E",

        marginTop: 5,
        paddingHorizontal: 10,
        width: 200,
        height: 0
    },
    BigText: {
        textAlign: "center",
        color: '#fff',
        fontSize: 24,
        color: 'black',

    },
    SmallText: {
        textAlign: "center",
        color: '#fff',
        fontSize: 18,
    },
    ProductText: {
        marginVertical: 5,
        textAlign: "center",
        color: '#fff',
        fontSize: 16,
        color: 'gray',

    },
    CityText: {
        marginVertical: 5,

        color: '#fff',
        fontSize: 16,
        color: 'gray',

    },
})