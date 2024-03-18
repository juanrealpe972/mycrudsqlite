import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FormScreen from './src/screen/FormScreen';
import ListaCategorias from './src/screen/ListaCategorias';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({headerStyle: {  backgroundColor: '#9EB9D4',},
          tabBarIcon: () => {
            let iconName;
            if (route.name === 'Formulario') {
              iconName = '❤️';
            } else if (route.name === 'Listar') {
              iconName = '✔️';
            }
            return <Text style={{ fontSize: 30 }}>{iconName}</Text>
          }})}>
        <Tab.Screen name="Formulario" component={FormScreen}/>
        <Tab.Screen name="Listar" component={ListaCategorias}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
