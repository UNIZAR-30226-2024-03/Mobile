import { Image, Text, View } from "react-native";
import { styles } from "../constants/styles";

export function NavBar(): React.JSX.Element {
    return (
        <View style={styles.navbar}>
            <Text>SideBar</Text>
            <Image source={require('../assets/images/logo_blanco.png')} style={styles.logo} />
            <Text>SearchBar</Text>
        </View>
        
    )
}