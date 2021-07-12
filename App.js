import * as React from 'react';
//Screens
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import ItemsListScreen from './app/screens/ItemsListScreen';

//Colors
import colors from './app/config/colors';
//Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
            name="Login"
            component={LoginScreen}
            // options={{ title: ''}}
            options={{
              title: '',
              headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{
            title: '' ,
            headerTransparent: true,
            headerTintColor: colors.white,  // The arrow color
            headerTitleStyle: {
              fontWeight: 'normal',
              textAlign: 'center',
              marginRight: "23%"
            },
          }}
        />
        <Stack.Screen 
            name="MyAccount" 
            component={MyAccountScreen} 
            options={{
            title: '' ,
            headerTransparent: true,
            // headerStyle: {
            //   backgroundColor: '#000', // The header color
            // },
            headerTintColor: colors.white,  // The arrow color
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              marginRight: "23%"
            },
          }}
        />
        <Stack.Screen 
            name="ItemsList" 
            component={ItemsListScreen} 
            options={{
            title: '' ,
            headerTransparent: true,
            headerTintColor: colors.black,  // The arrow color
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              marginRight: "23%"
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};



/*
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
  });

*/