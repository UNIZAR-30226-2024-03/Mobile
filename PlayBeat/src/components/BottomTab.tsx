/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03
 *
 * Main navigation setup, React Native's Drawer provides the majority of utilities needed for our purposes.
 *
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ExploreScreen} from '../screens/Explore';
import NavBar from './NavBar';
import {AppColorPalette} from '../constants/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {LibraryScreen} from '../screens/Library';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{header: props => <NavBar title="" {...props} />}}>
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: () => (
            <Icon
              name="compass-outline"
              color={AppColorPalette.black}
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={ExploreScreen}
        options={{
          tabBarIcon: () => (
            <Icon
              name="people-outline"
              color={AppColorPalette.black}
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: () => (
            <Icon
              name="library-outline"
              color={AppColorPalette.black}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
