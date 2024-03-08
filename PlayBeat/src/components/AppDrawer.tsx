/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Main navigation setup, React Native's Drawer provides the majority of utilities needed for our purposes.
 * 
 */

import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import LogInScreen from '../screens/LogInScreen';
import { ExploreScreen } from '../screens/Explore';
import { ProfileScreen } from '../screens/Profile';
import { NavBar } from './NavBar';
import { SideBar } from './SideBar';

export function AppDrawer() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator initialRouteName='Login' screenOptions={{ header: (props) => <NavBar title='' {...props} /> }} drawerContent={(props) => <SideBar {...props} />} >
        <Drawer.Screen name="Login" component={LogInScreen} options={{
          drawerIcon: () => <Image source={require('../assets/images/logo_blanco.png')} style={styles.logo} />
        }} />
        <Drawer.Screen name="Explore" component={ExploreScreen} options={{
            drawerIcon: () => <Image source={require('../assets/images/compass-outline.png')} style={styles.logo} />
        }} />
        <Drawer.Screen name="Friends" component={ExploreScreen} options={{
            drawerIcon: () => <Image source={require('../assets/images/people-outline.png')} style={styles.logo} />
        }} />
        <Drawer.Screen name="Upload" component={ExploreScreen} options={{
            drawerIcon: () => <Image source={require('../assets/images/cloud-upload-outline.png')} style={styles.logo} />
        }} />
        <Drawer.Screen name="Settings" component={ExploreScreen} options={{
            drawerIcon: () => <Image source={require('../assets/images/cog-outline.png')} style={styles.logo} />
        }} />
        <Drawer.Screen name="Library" component={ExploreScreen} options={{
            drawerIcon: () => <Image source={require('../assets/images/library-outline.png')} style={styles.logo} />
        }} />
      </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 35,
        height: 35,
      },
})