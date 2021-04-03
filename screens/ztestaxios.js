import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import reqres from '../api/reqres';
import zugoi from '../api/zugoi';

const Ztestaxios = () => {
    const [results, setResults] = useState([]);
    const [usedreqres, setUsedreqres] = useState(false);

    const [results2, setResults2] = useState([]);
    const [usedzugoi, setUsedzugoi] = useState(false);

    const frankToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTYxNzI1MDIyNCwiZXhwIjoxNjI1MDI2MjI0fQ.7o85X9u-O3MoZOa6z5_OvtuW8dtt_Qa053TD70fi6Ak';

    //reqres
    const userApi = async () => {
        try {
            const response = await reqres.get('/api/users/2');
            setResults(response.data);
            setUsedreqres(true);
        } catch (error) {
            console.log(error);
        }
    };

    // zugoi
    const userApi2 = async () => {
        try {
            const response = await zugoi.get('/users');
            setResults2(response.data);
            setUsedzugoi(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{paddingVertical: 10}}>
                <Button title='TEST AXIOS GET (reqres)' onPress={userApi}/>
                {
                    usedreqres 
                    ? <View style={{borderColor:"black",borderWidth: 1}}>
                        {console.log(results.data)}
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
            
            <View style={{paddingVertical: 10}}>
            <Button title='TEST AXIOS GET (zugoi)' onPress={userApi2}/>
            {
                usedzugoi 
                ? <View style={{borderColor:"black",borderWidth: 1}}>
                    {console.log(results2)}
                    {/* <Text style={{fontSize: 22}}>Response</Text>
                    <Text>id: {results.data.id}</Text>
                    <Text>first_name: {results.data.first_name}</Text>
                    <Text>last_name: {results.data.last_name}</Text>
                    <Text>email: {results.data.email}</Text>
                    <View style={{justifyContent: "center",alignItems: "center",}}>
                    <Image 
                        style={{width: 120, height: 120}}
                        source={{uri: results.data.avatar}} 
                    />
                    </View> */}
                </View>
                : null 
            }
            </View>
        </View>
        
    );
};


export default Ztestaxios;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "center"
    },
})