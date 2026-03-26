import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './src/screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen 
          name="Registration" 
          component={RegistrationScreen} 
          options={{ title: 'DeliveryGuard - Register' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
