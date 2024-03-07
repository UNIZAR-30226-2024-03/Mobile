import { useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

type NavBarProps = {
    navigation: any,
    title: string
}

export const NavBar = ({ navigation, title } : NavBarProps): React.JSX.Element => {
    const [toggled, setToggling] = useState(false);
    const [query, setQuery] = useState("");
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={openMenu}  >
                <Image source={require('../assets/images/menu-outline.png')} style={commonStyles.headerIcon} />
            </TouchableOpacity>
            <Image source={require('../assets/images/logo_blanco.png')} style={styles.logo} />
            {
                toggled? 
                    <TextInput style={styles.searchInput} onChangeText={setQuery} value={query} textAlignVertical="bottom" /> 
                        :  
                    <TouchableOpacity onPress={() => setToggling(true)}  >
                        <Image source={require('../assets/images/search-outline.png')} style={commonStyles.headerIcon} />
                    </TouchableOpacity>
            }
        </View>
        
    )
}

const commonStyles = StyleSheet.create({
    headerIcon: {
        backgroundColor: "white",
        borderRadius: 5,
        width: 30,
        height: 30,
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
        backgroundColor: "#000"
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