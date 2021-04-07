import  {
    createAppContainer,
    createSwitchNavigator 
} from  'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

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

const scannerFlow = createStackNavigator({
    Scanner: ScannerScreen,
    VerProducto: VerProductoScreen,
});

const switchNavigator =  createSwitchNavigator({
    loginFlow: createStackNavigator({
        Login: LoginScreen,
        RegUser: RegisterUserScreen,
        RegUser2: RegisterUserScreen2
    }),
    mainFlow: createBottomTabNavigator({
        dashBoardFlow: createStackNavigator({
            Dashboard: DashboardScreen,
            scannerFlow: {screen: scannerFlow, navigationOptions: { headerShown: false}},
            RegProduct: RegisterProductScreen,
            RegSucursal: RegisterSucursalScreen,
            RegEstablishment: RegisterEstablishmentScreen,
            Test: TestingScreenTEMP2
        }),
        scannerFlow: {screen: scannerFlow, navigationOptions: { headerShown: false}},
        searchFlow: createStackNavigator({
            SearchProducto: SearchProductoScreen,
            VerProducto: VerProductoScreen
        })
    },{resetOnBlur: true})
});

export default createAppContainer (switchNavigator);