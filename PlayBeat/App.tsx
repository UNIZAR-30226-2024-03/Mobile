/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * @format hello
 */


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppDrawer } from './src/components/AppDrawer';


export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}