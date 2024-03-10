/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Common side bar used for navigating the app.
 * 
 */

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';

type SideBarProps = {
    state: any,
    navigation: any,
    descriptors: any,
};


export function SideBar(p: SideBarProps): React.JSX.Element {

    return (
        <DrawerContentScrollView {...p} style={styles.sidebar} contentContainerStyle={{
            backgroundColor: "#9288F9",
        }}  >
        <View style={{ flex: 1, backgroundColor: "#9288F9", paddingTop: 10 }}>
            <DrawerItemList {...p} />
        </View>
        </DrawerContentScrollView>
    )
}


const styles = StyleSheet.create({
    sidebar: {

    },
    logo: {
        width: 50,
        height: 5,
        backgroundColor: 'black',
    },
    item: {

    },
    subItem: {

    }
})
