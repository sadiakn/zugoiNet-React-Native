import  {createAppContainer} from  'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';

import AuthLoadingScreen from './screens/authLoadingScreen';
import LoginScreen from './screens/loginScreen';
import RegisterUser from './screens/registerUser';
import RegisterUser2 from './screens/registerUser2';

import DashboardScreen from './screens/dashboardScreen';
import Scanner from './screens/scanner';
import RegisterProduct from './screens/registerProduct';
import RegisterSucursal from './screens/registerSucursal';
import RegisterEstablishment from './screens/registerEstablishment';

import VerProducto from './screens/verProducto';

import Ztestaxios from './screens/ztestaxios';

const BeforeSignin =  createStackNavigator({
    Login: {screen: LoginScreen, navigationOptions: { headerShown: false}},
    RegisterUser1: {screen: RegisterUser, navigationOptions: { headerTitle: 'Registrar Usuario'}},
    RegisterUser2: {screen: RegisterUser2, navigationOptions: { headerTitle: 'Registrar Usuario'}}
}, {
    
    initialRouteName: "Login"
})

const AfterSignin =  createStackNavigator({
    Dashboard: {screen: DashboardScreen, navigationOptions: { headerShown: false}},
    Scan: {screen: Scanner, navigationOptions: { headerTitle: 'Scan Barcode'}},
    RegisterProduct: {screen: RegisterProduct, navigationOptions: { headerTitle: 'Registrar Producto'}},
    RegisterSucursal: {screen: RegisterSucursal, navigationOptions: { headerTitle: 'Registrar Sucursal'}},
    RegisterEstablishment: {screen: RegisterEstablishment, navigationOptions: { headerTitle: 'Registrar Establecimiento'}},   
    VerProducto: {screen: VerProducto, navigationOptions: { headerTitle: 'Producto'}}
}, {
    initialRouteName:"Dashboard"
})

const AppNavigator =  createStackNavigator({
    Auth: {screen: BeforeSignin},
    App: {screen: AfterSignin},
    AuthLoadingScreen: AuthLoadingScreen,
    Ztestaxios: {screen: Ztestaxios, navigationOptions: { headerTitle: 'AXIOS TEST'}}
},  {
        headerMode: "none",
        initialRouteName: "AuthLoadingScreen"
})

export default createAppContainer (AppNavigator);