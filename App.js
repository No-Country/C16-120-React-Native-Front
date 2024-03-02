import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import TrailsScreen from './src/screens/TrailsScreen';
import PopularesScreen from './src/screens/PopularesScreen';
import DatosScreen from './src/screens/DatosScreen'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={ {headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Trails" component={TrailsScreen}/>
        <Stack.Screen name="Populares" component={PopularesScreen}/>
        <Stack.Screen name="Datos" component={DatosScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App