import  {createAppContainer} from  'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/loginScreen';
import DashboardScreen from './screens/dashboardScreen';
import AuthLoadingScreen from './screens/authLoadingScreen';
import RegisterUser from './screens/registerUser';
import RegisterUser2 from './screens/registerUser2';
import RegisterProduct from './screens/registerProduct';
import RegisterEstablishment from './screens/registerEstablishment';
import RegisterSucursal from './screens/registerSucursal';
import Scanner from './screens/scanner';
import VerProducto from './screens/verProducto';


const BeforeSignin =  createStackNavigator({
    Login: {screen: LoginScreen, navigationOptions: { headerShown: false}},
    RegisterUser1: RegisterUser,
    RegisterUser2: RegisterUser2
}, {
    
    initialRouteName: "Login"
})

const AfterSignin =  createStackNavigator({
    Dashboard: {screen: DashboardScreen, navigationOptions: { headerShown: false}},
    Scan: {screen: Scanner, navigationOptions: { headerShown: false}},
    RegisterProduct: {screen: RegisterProduct},
    RegisterSucursal: {screen: RegisterSucursal},
    RegisterEstablishment: {screen: RegisterEstablishment},   
    VerProducto: {screen: VerProducto} ,
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