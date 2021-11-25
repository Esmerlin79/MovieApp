import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import StackNavigation from './src/navigation/StackNavigation';
// import FadeScreen from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const App = () => {
  return (
    <NavigationContainer>

      <GradientProvider>
        <StackNavigation />
        {/* <FadeScreen /> */}
      </GradientProvider>
    </NavigationContainer>
  )
}

export default App
