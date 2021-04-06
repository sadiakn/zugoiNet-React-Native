import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import reqres from '../api/reqres';
import zugoi from '../api/zugoi';

const ScannerScreenTEMP2 = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);

    //API GET
    const productTypesApi = async () => {
        try {
            const response = await zugoi
            .get('/type-of-establishments')
            .then((res) => {
                setResults(res.data);
                setLoading(true);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        productTypesApi();
    },[]);

    return (
        <FlatList
        ListHeaderComponent={
            <View style={styles.container}>
                <Text>TESTING autoload</Text>
                {loading ? (
                    <View style={{borderColor:"black",borderWidth: 1}}>
                    {
                        results.map((results, index)=>{
                            const {id, typeOfEstablishmentName} = results;

                            return (
                            <View key={id} style={{borderColor:"black",borderWidth: 1, margin:5}}> 
                                <Text>id: {id}</Text>
                                <Text>typeOfEstablishmentName: {typeOfEstablishmentName}</Text>
                            </View>
                        );})
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