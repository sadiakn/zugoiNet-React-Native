import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import reqres from '../api/reqres';
import zugoi from '../api/zugoi';

const Ztestaxios = () => {
    const [results, setResults] = useState([]);
    const [used, setUsed] = useState(false);

    //reqres
    const userApi = async () => {
        try {
            const response = await reqres.get('/api/users/2');
            setResults(response.data);
            setUsed(true);
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
            <Button title='TEST GET' onPress={userApi}/>
            {
                used 
                ? <View style={{borderColor:"black",borderWidth: 1}}>
                    <Text style={{fontSize: 22}}>Response</Text>
                    <Text>id: {results.data.id}</Text>
                    <Text>first_name: {results.data.first_name}</Text>
                    <Text>last_name: {results.data.last_name}</Text>
                    <Text>email: {results.data.email}</Text>
                    <View style={{justifyContent: "center",alignItems: "center",}}>
                    <Image 
                        style={{width: 120, height: 120}}
                        source={{uri: results.data.avatar}} 
                    />
                    </View>
                </View>
                : null 
            }
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