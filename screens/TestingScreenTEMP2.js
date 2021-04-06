import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import reqres from '../api/reqres';

const ScannerScreenTEMP2 = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);

    //reqres test
    const userApi = async () => {
        try {
            const response = await reqres
            .get('/api/users/2')
            .then((res) => {
                setResults(res.data);
                console.log(results);
                setLoading(true);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        userApi();
    },[]);

    return (
        <FlatList
        ListHeaderComponent={
            <View style={styles.container}>
                <Text>TESTING autoload</Text>
                {loading ? (
                    <View style={{ borderColor: "black", borderWidth: 1 }}>
                    {console.log('------------------------------------- result1')}
                    {console.log(results.data)}
                    <Text style={{ fontSize: 22 }}>Response</Text>
                    <Text>id: {results.data.id}</Text>
                    <Text>first_name: {results.data.first_name}</Text>
                    <Text>last_name: {results.data.last_name}</Text>
                    <Text>email: {results.data.email}</Text>
                    <View style={{ justifyContent: "center", alignItems: "center", }}>
                        <Image
                            style={{ width: 120, height: 120 }}
                            source={{ uri: results.data.avatar }}
                        />
                    </View>
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