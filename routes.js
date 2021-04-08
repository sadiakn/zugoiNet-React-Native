import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import {
    createAppContainer,
    createSwitchNavigator

} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, tabBarIcon } from 'react-navigation-tabs';

import LoginScreen from './screens/LoginScreen';
import RegisterUserScreen from './screens/RegisterUserScreen';
import RegisterUserScreen2 from './screens/RegisterUserScreen2';

import DashboardScreen from './screens/DashboardScreen';
import ScannerScreen from './screens/ScannerScreen';
import RegisterProductScreen from './screens/RegisterProductScreen';
import RegisterSucursalScreen from './screens/RegisterSucursalScreen';
import RegisterEstablishmentScreen from './screens/RegisterEstablishmentScreen';

import VerProductoScreen from './screens/VerProductoScreen';
import SearchProductoScreen from './screens/SearchProductoScreen';

import Ztestaxios from './screens/ztestaxios';
import TestingScreenTEMP from './screens/TestingScreenTEMP';
import TestingScreenTEMP2 from './screens/TestingScreenTEMP2';
import TestingScreenTEMP3 from './screens/TestingScreenTEMP3';

import RegPriceScreen from './screens/RegPriceScreen';

import BarcodeIcon from './assets/barcodeTabIcon.png';
import HomeIcon from './assets/HomeIcon.png'
import LupaIcon from './assets/LupaIcon.png'

const scannerFlow = createStackNavigator({
    Scanner: ScannerScreen,
    VerProducto: VerProductoScreen,
    Price: RegPriceScreen,
});

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Login: LoginScreen,
        RegUser: RegisterUserScreen,
        RegUser2: RegisterUserScreen2
    }),
    mainFlow: createBottomTabNavigator({
        dashBoardFlow: {
            screen: createStackNavigator({
                Dashboard: DashboardScreen,
                scannerFlow: { screen: scannerFlow, navigationOptions: { headerShown: false } },
                RegProduct: RegisterProductScreen,
                RegSucursal: RegisterSucursalScreen,
                RegEstablishment: RegisterEstablishmentScreen,
                Test: TestingScreenTEMP
            }), navigationOptions: {
                tabBarOptions: { showIcon: true, showLabel: false },
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image
                            source={HomeIcon}
                            style={{ height: 25, width: 25, alignSelf: 'center', resizeMode: "contain", flex: 1 }}
                        />
                    )
                },
                headerShown: false,
            }
        },
        scannerFlow: {
            screen: scannerFlow,
            navigationOptions: {
                tabBarOptions: { showIcon: true, showLabel: false },
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image
                            source={BarcodeIcon}
                            style={{ height: 50, width: 70, alignSelf: 'center', resizeMode: "contain", flex: 1 }}
                        />
                    )
                },
                headerShown: false,

            }
        },
        searchFlow: {
            screen: createStackNavigator({
                SearchProducto: SearchProductoScreen,
                VerProducto: VerProductoScreen
            }), navigationOptions: {
                tabBarOptions: { showIcon: true, showLabel: false },
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image
                            source={LupaIcon}
                            style={{ height: 25, width: 25, alignSelf: 'center', resizeMode: "contain", flex: 1 }}
                        />
                    )
                },
                headerShown: false,
            }
        }
    }, { resetOnBlur: true, tabBarOptions: { showLabel: false } })
});

export default createAppContainer(switchNavigator);