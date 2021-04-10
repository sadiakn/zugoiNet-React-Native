import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button, TouchableOpacity, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { withNavigation } from 'react-navigation';

import RegPrice from '../components/regPrice';
import zugoi from '../api/zugoi';
import BackIcon from '../assets/Salir.png';
import RefreshIcon from '../assets/refresh.png'
const VerProductoScreen = ({ navigation }) => {

    const [results, setResults] = useState(null);
    const [productid, setProductid] = useState('');
    const [productName, setProductName] = useState('');
    const [img, setImg] = useState('');
    const [barCode, setBarCode] = useState('');

    const [loading, setLoading] = useState(false);
    const [posted, setPosted] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    // API POST
    const productApi = async (barCode, { navigation }) => {
        // console.log(barCode);
        const response = await zugoi('/products/prices/branch-offices', {
            method: 'post',
            data: {
                barCode: barCode
            }
        })
            .then((res) => {
                setResults(res.data);
                setProductid(res.data.product.id);
                setProductName(res.data.product.productName);
                setImg(res.data.product.img);
                setLoading(true);
                setPosted(true);
                setBarCode(barCode);
                // console.log('************');
                // console.log('** Posted **');
                // console.log('************');
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    alert("Producto no Encontrado");
                    console.log("Producto no Encontrado");
                    navigation.navigate('RegProduct', { barCode: barCode, mode: 'Regi' });
                }
                else {
                    console.log(error);
                }

            });
    };

    useEffect(() => {
        let barCode = navigation.getParam('barCode');
        // let barCode = '7509552816334';
        productApi(barCode, { navigation });
    }, []);

    const onButtonClick = () => {
        productApi(barCode, { navigation });
    };

    return (
        <>
            {loading ? (
                <FlatList
                    ListHeaderComponent={
                        <>

                            <View style={{ marginVertical: 25 }}>
                                <Text style={styles.BigText}>¡Producto encontrado!</Text>
                                <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>
                            </View>
                            <View style={{}}>
                                <View style={styles.ImgContainer}>
                                    <Image
                                        style={styles.ProductImage}
                                        source={{ uri: `${results.product.img}` }}
                                    />
                                    <Text style={styles.ProductText, { textAlign: "center" }}>{results.product.productName}</Text>
                                </View>
                                <View style={{ paddingHorizontal: 20 }}>
                                    <View style={styles.myrow}>
                                        <View style={{ marginHorizontal: 5, }}>
                                            <Text style={styles.BigText}>Comparaciones</Text>
                                        </View>
                                        <TouchableOpacity onPress={onButtonClick}>
                                            <Image source={RefreshIcon}
                                                style={{ marginHorizontal:5,height: 15, width: 15, alignSelf: 'center', resizeMode: "contain", flex: 1 }}
                                            />
                                        </TouchableOpacity>
                                        <View style={{ marginHorizontal: 5, justifyContent: "center", alignItems: 'center' }}>
                                            <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLineS}></View></View>
                                        </View>


                                    </View>

                                    {
                                        results.branchOfficesWithPrice.map((results, index) => {
                                            const { id, Establishment, PricesProductsBranchOffices, Address } = results;

                                            return (
                                                <View key={id} style={styles.PriceContainer}>
                                                    <View style={styles.myrow}>
                                                        <View style={{ marginHorizontal: 50, }}>
                                                            <Text style={styles.ProductText, { textAlign: "center" }}>{Establishment.establishmentName}</Text>
                                                        </View>
                                                        <View style={{ marginHorizontal: 50, }}>
                                                            <Text style={styles.ProductText, { textAlign: "center" }}>Precio:{PricesProductsBranchOffices[0].price}</Text>
                                                        </View>
                                                    </View>
                                                    <Text style={styles.CityText}>            Ciudad: {Address.city}</Text>
                                                </View>
                                            );
                                        })
                                    }
                                </View>

                                <TouchableOpacity style={styles.Btn} onPress={() => setModalVisible(true)}>
                                    <Text style={styles.BtnText}>+ Precios</Text>
                                </TouchableOpacity>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <FlatList
                                        ListHeaderComponent={

                                            <View style={styles.centeredView}>
                                                <View style={styles.modalView}>
                                                    <TouchableOpacity style={{ marginVertical: 20, }} onPress={() => {
                                                        setModalVisible(!modalVisible);
                                                    }}>
                                                        <Image
                                                            style={{ height: 25, width: 25, resizeMode: "contain" }}
                                                            source={BackIcon}
                                                        />
                                                    </TouchableOpacity>
                                                    {

                                                        results.branchOffices.map((re, index) => {
                                                            const { id, Establishment, Address } = re;

                                                            return (
                                                                <View style={{ flex: 1, }} key={id}>
                                                                    <TouchableOpacity
                                                                        key={id}
                                                                        style={styles.PriceContainer}
                                                                        onPress={() => {
                                                                            setModalVisible(!modalVisible);
                                                                            navigation.navigate('Price', {
                                                                                establishmentName: `${Establishment.establishmentName}`,
                                                                                city: `${Address.city}`,
                                                                                productId: `${productid}`,
                                                                                branchOfficeId: `${id}`,
                                                                                productName: `${results.product.productName}`,
                                                                                img: `${results.product.img}`,
                                                                                barCode: `${barCode}`,
                                                                            });
                                                                        }}
                                                                    >

                                                                        <Text>Establecimiento: {Establishment.establishmentName}</Text>
                                                                        <Text>Ciudad: {Address.city}</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            );
                                                        })
                                                    }
                                                </View>
                                            </View>
                                        }
                                    />
                                </Modal>
                            </View>
                        </>
                    }
                />
            )
                : (
                    <View style={styles.container2}>
                        <ActivityIndicator size="large" color="#EE712E" />
                    </View>
                )}
        </>

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
    container2: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    PriceContainer: {

        paddingHorizontal: 20,
        marginVertical: 5,
        backgroundColor: "#FFF8F5",
        elevation: 5,

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        paddingBottom: 150
    },
    modalView: {
        flex: 1,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
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
    borderLineS: {
        borderWidth: 0.4,
        borderColor: "#EE712E",

        marginTop: 5,
        paddingHorizontal: 10,
        width: 150,
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
    Btn: {
        backgroundColor: "#ee712e",
        paddingVertical: 10,
        marginVertical: 20,
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