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
import ScannerScreenTEMP from './screens/ScannerScreenTEMP';


const scannerFlow = createStackNavigator({
    Scanner: ScannerScreenTEMP,
    VerProducto: VerProductoScreen
});

const switchNavigator =  createSwitchNavigator({
    loginFlow: createStackNavigator({
        Login: {screen: LoginScreen, navigationOptions: { headerShown: false}},
        RegUser: {screen: RegisterUserScreen, navigationOptions: { headerTitle: 'Registrar Usuario'}},
        RegUser2: {screen: RegisterUserScreen2, navigationOptions: { headerTitle: 'Registrar Usuario'}}
    }),
    mainFlow: createBottomTabNavigator({
        dashBoardFlow: createStackNavigator({
            Dashboard: {screen: DashboardScreen, navigationOptions: { headerShown: false}},
            scannerFlow: {screen: scannerFlow, navigationOptions: { headerShown: false}},
            RegProduct: {screen: RegisterProductScreen, navigationOptions: { headerTitle: 'Registrar Producto'}},
            RegSucursal: {screen: RegisterSucursalScreen, navigationOptions: { headerTitle: 'Registrar Sucursal'}},
            RegEstablishment: {screen: RegisterEstablishmentScreen, navigationOptions: { headerTitle: 'Registrar Establecimiento'}}
        }),
        scannerFlow: {screen: scannerFlow, navigationOptions: { headerShown: false}},
        searchFlow: createStackNavigator({
            SearchProducto: {screen: SearchProductoScreen, navigationOptions: { headerTitle: 'Buscar Producto'}},
            VerProducto: {screen: VerProductoScreen, navigationOptions: { headerTitle: 'Producto'}}
        })
    },{resetOnBlur: true})
});

export default createAppContainer (switchNavigator);