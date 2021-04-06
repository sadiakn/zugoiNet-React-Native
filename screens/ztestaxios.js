import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList  } from 'react-native';

import reqres from '../api/reqres';
import zugoi from '../api/zugoi';

const Ztestaxios = () => {
    const [results, setResults] = useState(null);

    const [results2, setResults2] = useState(null);

    const [results3, setResults3] = useState(null);

    const [results4, setResults4] = useState(null);

    const [results5, setResults5] = useState(null);

    const [results6, setResults6] = useState(null);

    //reqres test
    const userApi = async () => {
        try {
            const response = await reqres.get('/api/users/2');
            setResults(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // zugoi get User
    const userApi2 = async () => {
        try {
            const response = await zugoi.get('/users/3');
            setResults2(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // zugoi get User
    const userApi6 = async () => {
        try {
            const response = await zugoi.get('/users');
            setResults6(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // zugoi get Product Types
    const userApi3 = async () => {
        try {
            const response = await zugoi.get('/categories');
            setResults3(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // zugoi get Establishments Types
    const userApi4 = async () => {
        try {
            const response = await zugoi.get('/type-of-establishments');
            setResults4(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // zugoi get Provinces 
    const userApi5 = async () => {
        try {
            const response = await zugoi.get('/provinces');
            setResults5(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{paddingVertical: 10}}>
                <Button title='GET (reqres)' onPress={userApi}/>
                {
                    results 
                    ? <View style={{borderColor:"black",borderWidth: 1}}>
                        {console.log('------------------------------------- result1')}
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
            <Button title='GET 1 User (zugoi)' onPress={userApi2} />
            {
                results2 
                ? <View style={{borderColor:"black",borderWidth: 1}}>
                    {console.log('------------------------------------- result2')}
                    {console.log(results2)}
                    <Text style={{fontSize: 22}}>Response</Text>
                    <Text>id: {results2.id}</Text>
                    <Text>name: {results2.name}</Text>
                    <Text>lastName: {results2.lastName}</Text>
                    <Text>email: {results2.email}</Text>
                    <Text>phone: {results2.phone}</Text>
                    <Text>sex: {results2.sex}</Text>
                </View>
                : null 
            }
            </View>

            <View style={{paddingVertical: 10}}>
            <Button title='GET Users (zugoi)' onPress={userApi6} />
            {
                results6 
                ? <View style={{borderColor:"black",borderWidth: 1}}>
                    {console.log('------------------------------------- result6')}
                    {console.log(results6)}
                    <FlatList 
                        ListHeaderComponent={<Text>Response:</Text>}
                        data={results6}
                        listKey={(usersKey) => results6.id}
                        keyExtractor={(usersKey) => results6.id}
                        renderItem={({ item }) => (
                            <View style={{borderColor:"black",borderWidth: 1, margin:5}}> 
                                <Text>id: {item.id}</Text>
                                <Text>name: {item.name}</Text>
                                <Text>lastName: {item.lastName}</Text>
                                <Text>email: {item.email}</Text>
                                <Text>phone: {item.phone}</Text>
                                <Text>sex: {item.sex}</Text>
                            </View>
                        )}
                    />
                </View>
                : null 
            }
            </View>
            
            <View style={{paddingVertical: 10}}>
            <Button title='GET Product Types (zugoi)' onPress={userApi3}/>
            {
                results3
                ? <View style={{borderColor:"black",borderWidth: 1}}>
                {console.log('------------------------------------- results3')}
                {console.log(results3)}
                <FlatList 
                    ListHeaderComponent={<Text>Response:</Text>}
                    data={results3}
                    listKey={(productTypeKey) => results3.id}
                    keyExtractor={(productTypeKey) => results3.id}
                    renderItem={({ item }) => (
                        <View style={{borderColor:"black",borderWidth: 1, margin:5}}> 
                            <Text>id: {item.id}</Text>
                            <Text>categoryName: {item.categoryName}</Text>
                            <Text>description: {item.description}</Text>
                        </View>
                    )}
                />
            </View>
                : null
            }
            </View>

            <View style={{paddingVertical: 10}}>
            <Button title='GET Establishment Types (zugoi)' onPress={userApi4}/>
            {
                results4 
                ? <View style={{borderColor:"black",borderWidth: 1}}>
                    {console.log('------------------------------------- result4')}
                    {console.log(results4)}
                    <FlatList 
                        ListHeaderComponent={<Text>Response:</Text>}
                        data={results4}
                        listKey={(establishmentKey) => results4.id}
                        keyExtractor={(establishmentKey) => results4.id}
                        renderItem={({ item }) => (
                            <View style={{borderColor:"black",borderWidth: 1, margin:5}}> 
                                <Text>id: {item.id}</Text>
                                <Text>typeOfEstablishmentName: {item.typeOfEstablishmentName}</Text>
                            </View>
                        )}
                    />
                </View>
                : null 
            }
            </View>

            {/* <View style={{paddingVertical: 10}}>
            <Button title='GET Provinces List (zugoi)' onPress={userApi5}/>
            {
                results5 
                ? <View style={{borderColor:"black",borderWidth: 1}}>
                    {console.log('------------------------------------- result5')}
                    {console.log(results5)}
                    <FlatList 
                        ListHeaderComponent={<Text>Response:</Text>}
                        data={results5}
                        listKey={(provinceKey) => results5.id}
                        keyExtractor={(provinceKey) => results5.id}
                        renderItem={({ item }) => (
                            <View style={{borderColor:"black",borderWidth: 1, margin:5}}> 
                                <Text>countryId: {item.countryId}</Text>
                                <Text>id: {item.id}</Text>
                                <Text>provinceName: {item.provinceName}</Text>
                            </View>
                        )}
                    />
                </View>
                : null 
            }
            </View> */}

        </View>
        
    );
};


export default Ztestaxios;

const styles = StyleSheet.create({
    container2: {
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "center"
    },
})