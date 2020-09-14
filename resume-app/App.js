import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeForm from './src/screens/ResumeForm'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeForm" options={{ title: 'Resume form' }} component={ResumeForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;