/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03
 *
 * @format hello
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/components/BottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
