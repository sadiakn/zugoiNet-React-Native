import  {createAppContainer} from  'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/loginScreen';
import DashboardScreen from './screens/dashboardScreen';
import AuthLoadingScreen from './screens/authLoadingScreen';
import RegisterUser from './screens/registerUser';
import RegisterUser2 from './screens/registerUser2';
import RegisterProduct from './screens/registerProduct';
import Scanner from './screens/scanner';
import registerProduct from './screens/registerProduct';

// TEMP MAIN
// const BeforeSignin =  createStackNavigator({
//     Login:{
//                 /*vvvvvvvvvvvvvvvvvvvvvvvvv*/
//     /*>>>>>>>>>>>*/ screen: RegisterProduct  /*<<<<<<<<<<< Cambiar por ventana que se desea ver primero*/
//                 /*^^^^^^^^^^^^^^^^^^^^^^^^^*/
//     }
// }, {
//     headerMode: "none",
//     initialRouteName: "Login"
// })

//ORIGINAL LOGIN
const BeforeSignin =  createStackNavigator({
    Login:{
    screen: LoginScreen
    }
}, {
    headerMode: "none",
    initialRouteName: "Login"
})

const AfterSignin =  createStackNavigator({
    Dashboard:{
        screen: DashboardScreen
    }
}, {
    headerMode:"none",
    initialRouteName:"Dashboard"
})

// const Regis =  createStackNavigator({
//     RegUser:{
//         screen: RegisterUser
//     },
//     RegUser2:{
//         screen: RegisterUser2
//     }
// }, {
//     HeaderMode: "none",
//     initialRouteName: "Login"
// })

const RegisterUsers =  createStackNavigator({
    RUser:{ screen: RegisterUser},
    RUser2: { screen: RegisterUser2},
}, {
    
    headerMode:"float",
    initialRouteName:"RUser",
    
})

const AppNavigator =  createStackNavigator({
    Auth: BeforeSignin,
    App: AfterSignin,
    AuthLoadingScreen: AuthLoadingScreen,
    RegU: RegisterUsers,
    Scan: { screen: Scanner},
    RegP: registerProduct
},  {
        headerMode: "none",
        initialRouteName: "AuthLoadingScreen"
})

export default createAppContainer (AppNavigator);