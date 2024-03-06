import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type NavBarProps = {
    navigation: any,
    title: string
}

export const NavBar = ({ navigation, title } : NavBarProps): React.JSX.Element => {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={openMenu}  >
                <Image source={require('../assets/images/menu-outline.png')} style={styles.toggleSideBar} />
            </TouchableOpacity>
            <Image source={require('../assets/images/logo_blanco.png')} style={styles.logo} />
            <TouchableOpacity onPress={openMenu}  >
                <Image source={require('../assets/images/search-outline.png')} style={{...styles.toggleSideBar}} />
            </TouchableOpacity>
        </View>
        
    )
}
const styles = StyleSheet.create({

    header: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
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
      toggleSideBar: {
        backgroundColor: "white",
        borderRadius: 5,
        width: 30,
        height: 30
      }

})