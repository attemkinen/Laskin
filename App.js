import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorApp from './CalculatorApp';
import ShoppingListApp from './ShoppingListApp';
import History from './History';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CalculatorApp">
        <Stack.Screen name="CalculatorApp" component={CalculatorApp} />
        <Stack.Screen name="ShoppingListApp" component={ShoppingListApp} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;