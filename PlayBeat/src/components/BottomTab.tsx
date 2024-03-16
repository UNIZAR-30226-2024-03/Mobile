/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Main navigation setup, React Native's Drawer provides the majority of utilities needed for our purposes.
 * 
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import LogInScreen from '../screens/LogInScreen';
import { ExploreScreen } from '../screens/Explore';
import NavBar from './NavBar';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Explore' screenOptions={{ header: (props) => <NavBar title='' {...props} /> }}>
        <Tab.Screen name="Explore" component={ExploreScreen} options={{
            tabBarIcon: (p) => <Image source={require('../assets/icons/compass-outline.png')} style={styles.logo} />,
        }} />
        <Tab.Screen name="Friends" component={ExploreScreen} options={{
            tabBarIcon: (p) => <Image source={require('../assets/icons/people-outline.png')} style={styles.logo} />,
        }} />
        <Tab.Screen name="Library" component={ExploreScreen} options={{
            tabBarIcon: (p) => <Image source={require('../assets/icons/library-outline.png')} style={styles.logo} />,
        }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
      width: 35,
      height: 35,
  },
  screenView: {
    flex: 1,
    flexDirection: "column"
  }
})