// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import { NavBar } from './components/NavBar';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { ExploreScreen } from './screens/Explore';
// import { ProfileScreen } from './screens/Profile';

// const Drawer = createDrawerNavigator();

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   let menuContents = [
//     {
//         name: 'Explorar',
//         logo: '',
//         component: ExploreScreen,
//     },
//     {
//       name: 'Profile',
//       logo: '',
//       component: ProfileScreen,
//   }
// ]

//   // return (
//   // <SafeAreaView style={backgroundStyle}>
//   //     <StatusBar
//   //       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//   //       backgroundColor={backgroundStyle.backgroundColor}
//   //     />
//   //     <ScrollView
//   //       contentInsetAdjustmentBehavior="automatic"
//   //       style={backgroundStyle}>
//   //       <NavBar />
//   //     </ScrollView>
//   //   </SafeAreaView>);

//   return(
//     <NavigationContainer>
//     <Drawer.Navigator initialRouteName="Profile" >
//            {
//              menuContents.map(drawer=> <Drawer.Screen
//                name={drawer.name}
//                component={drawer.component}
//              />)
//            }
//     </Drawer.Navigator>
//     </NavigationContainer>);
// }
// export default App;


import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

type Props = {
  navigation: any
}

function HomeScreen(p: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => p.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen(p: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => p.navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}