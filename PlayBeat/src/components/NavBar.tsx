/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Common NavBar for every screen in the application
 * 
 */

import { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AppColorPalette } from '../constants/types';
import Icon from 'react-native-vector-icons/Ionicons'

/**
 * @field `navigation` - navigation object
 * @field `title` - Required but unused
 */
type NavBarProps = {
    navigation: any,
    title: string
}

/**
 * Navigation Bar component for many application screens
 * @param nbp refer to {@link NavBarProps} 
 * @returns 
 */
export default function NavBar (nbp : NavBarProps): React.JSX.Element {
    const [toggled, setToggling] = useState(false);
    const [query, setQuery] = useState("");
    const openMenu = () => {
        nbp.navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <Image source={require('../assets/images/logo_blanco.png')} style={styles.logo} />
            {
                toggled? 
                    <TextInput style={styles.searchInput} onChangeText={setQuery} value={query} textAlignVertical="bottom" /> 
                        :  
                    <TouchableOpacity onPress={() => setToggling(true)}  >
                        <Icon name="search-outline" color={AppColorPalette.black} size={35} style={commonStyles.headerIcon}  />
                    </TouchableOpacity>
            }
        </View>
        
    )
}

const commonStyles = StyleSheet.create({
    headerIcon: {
        backgroundColor: "white",
        borderRadius: 5,
        margin: 10,
      },
})

const styles = StyleSheet.create({

    header: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: AppColorPalette.black,
        paddingHorizontal: 20
      },
      headerTitle: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center"
      },
      headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
      },
      logo: {
        width: 50,
        height: '100%',
      },
      
      searchInput: {
        ...commonStyles.headerIcon,
        width: 200,
        lineHeight: 1
      }

})