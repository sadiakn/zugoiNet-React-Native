import  {createAppContainer} from  'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/loginScreen';
import DashboardScreen from './screens/dashboardScreen';
import AuthLoadingScreen from './screens/authLoadingScreen';

    const BeforeSignin =  createStackNavigator({
        Login:{
        screen:LoginScreen
        }
    },
        {
            HeaderMode:"none",
            initialRouteName:"Login"
        })

    const AfterSignin =  createStackNavigator({
        Dashboard:{
            screen:DashboardScreen
        }
    },
        {
            HeaderMode:"none",
            initialRouteName:"Dashboard"
        })

        const AppNavigator =  createStackNavigator({
            Auth: BeforeSignin,
            App:AfterSignin,
            AuthLoadingScreen:AuthLoadingScreen
        },
            {
                HeaderMode:"none",
                initialRouteName:"Auth"
            })

export default createAppContainer (AppNavigator);