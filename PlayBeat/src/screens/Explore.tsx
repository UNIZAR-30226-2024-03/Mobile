import { Text, View } from "react-native";
import { UserHeader } from "../components/UserHeader";
import { UserScreenMode } from "../constants/types";
import { SafeAreaView } from "react-native-safe-area-context";


export function ExploreScreen() {
    return (
        <View style={{flex:1}}>
            <View style={{flex: 1.5}} >
                <UserHeader uinfo={{name: 'Pepito', tag: '@Pepito', noFollowers: 124, profilePicture: '../assets/images/person.png'}} 
                mode={UserScreenMode.EDIT} />
            </View>
            <View style={{flex: 2, backgroundColor: 'red'}} />
            <View style={{flex: 3, backgroundColor: 'black'}} />
        </View>
    )
}