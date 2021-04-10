import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


const SearchProductoScreen = ({ navigation }) => {
    const [producto, setProducto] = useState('');

    return (
        <View style={[styles.mycontent, { backgroundColor: "white", }]}>
            <Text style={styles.welcomeText}>Buscar Producto</Text>

            {/* Linea horizontal */}
            <View style={{ justifyContent: "center", alignItems: 'center' }}><View style={styles.borderLine}></View></View>

            <View style={[{ backgroundColor: "white", }]} >
               
                <View style={[styles.mytextboxL, { backgroundColor: "green", }]} >
                    <TextInput style={styles.textInput}
                        placeholder="Buscar Producto"
                        placeholderTextColor="#333"
                        value={producto}
                        onChangeText={setProducto}
                    />
                </View>

            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => {
                    console.log("------------------------------------");
                    console.log("producto: "+producto);
                    navigation.navigate('Dashboard')
                }}>
                <Text style={styles.BTnText}>Buscar Producto</Text>
            </TouchableOpacity>

        </View>
    );
};

SearchProductoScreen.navigationOptions = () => {
    return {
        headerTitle: '',
    };
};

export default SearchProductoScreen;

const styles = StyleSheet.create({
    mycontent: {
        flex: 1,

        padding: 30

    },
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    borderLine: {
        borderWidth: 0.5,
        borderColor: "#EE712E",
        marginBottom: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        width: "50%",

    },
    mytextboxL: {
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",

    },
    textInput: {
        width: "100%",


        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#FFFFFF",
        color: "#333",
        borderRadius: 0,
        borderWidth: 1,
        borderColor: "black",

    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 20,


    },
    btn: {
        marginTop: 30,
        paddingVertical: 10,
        borderRadius: 20,
        height: "8%",
        width: "70%",
        backgroundColor: "#EE712E",
        alignSelf: "center"
    },
    BTnText: {
        color: 'white',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },
})