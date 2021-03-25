import  {createAppContainer} from  'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/loginScreen';
import DashboardScreen from './screens/dashboardScreen';
import AuthLoadingScreen from './screens/authLoadingScreen';
import RegisterUser from './screens/registerUser';
import RegisterProduct from './screens/registerProduct';
import Scanner from './screens/scanner';

// // TEMP MAIN
// const BeforeSignin =  createStackNavigator({
//     Login:{
//                 /*vvvvvvvvvvvvvvvvvvvvvvvvv*/
//     /*>>>>>>>>>>>*/ screen: RegisterUser  /*<<<<<<<<<<< Cambiar por ventana que se desea ver primero*/
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
    },
    RegUser:{
        screen: RegisterUser
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

const AppNavigator =  createStackNavigator({
    Auth: BeforeSignin,
    App: AfterSignin,
    AuthLoadingScreen: AuthLoadingScreen,
    RegU: { screen: RegisterUser},
    RegP: { screen: RegisterProduct},
    Scan: { screen: Scanner}
},  {
        headerMode: "none",
        initialRouteName: "AuthLoadingScreen"
})

export default createAppContainer (AppNavigator);