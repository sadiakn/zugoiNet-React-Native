import  {createAppContainer} from  'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterUser from './screens/RegisterUser';
import RegisterUser2 from './screens/RegisterUser2';

import DashboardScreen from './screens/DashboardScreen';
import Scanner from './screens/Scanner';
import RegisterProduct from './screens/RegisterProduct';
import RegisterSucursal from './screens/RegisterSucursal';
import RegisterEstablishment from './screens/RegisterEstablishment';

import VerProducto from './screens/VerProducto';

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
},  {
        headerMode: "none",
        initialRouteName: "AuthLoadingScreen"
})

export default createAppContainer (AppNavigator);