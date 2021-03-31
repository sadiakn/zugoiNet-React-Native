import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import reqres from '../api/reqres';
import zugoi from '../api/zugoi';

const Ztestaxios = () => {
    const [results, setResults] = useState([]);

    //reqres
    const userApi = async () => {
        try {
            const response = await reqres.get('/api/users/2');
        setResults(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // zugoi
    // const userApi = async () => {
    //     try {
    //         const response = await zugoi.get('/users/1');
    //     setResults(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <View style={styles.container}>
            <Text>TEST GET</Text>
            <Button title='click' onPress={userApi}/>
            <Text>Response:</Text>
            <Text>{results.data.id}</Text>
            <Text>{results.data.email}</Text>
            <Text>{results.data.first_name}</Text>
            <Text>{results.data.last_name}</Text>
            <Text>{results.data.avatar}</Text>
        </View>
    );
};


export default Ztestaxios;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
})