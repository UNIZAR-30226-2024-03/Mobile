/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogInScreen from './src/screens/LogInScreen';
import { ExploreScreen } from './src/screens/Explore';
import { ProfileScreen } from './src/screens/Profile';
import { NavBar } from './src/components/NavBar';

const Drawer = createDrawerNavigator();

// const NavBar = { 
//   headerLeft: () => {}, 
//   headerTitle: () => LogBox, 
//   headerRight: () => {}
// }

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Login' screenOptions={{ header: (props) => <NavBar title='' {...props} /> }} >
      <Drawer.Screen name="Login" component={LogInScreen} />
      <Drawer.Screen name="Explore" component={ExploreScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}