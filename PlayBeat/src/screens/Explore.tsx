import { Text, View } from "react-native";
import { UserHeader } from "../components/UserHeader";
import { UserScreenMode } from "../constants/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlaylistHeader } from "../components/PlaylistHeader";


export const ExploreScreen = () => {
    return (
        <View style={{flex:1}}>
            <View style={{flex: 2}} >
                <PlaylistHeader pinfo={{ name: 'Playlist 1', numSongs: 20, duration: 60, profilePicture: '../assets/icons/person.png', isPublic: true}} />
            </View>
            <View style={{flex: 2, backgroundColor: 'red'}} />
            <View style={{flex: 3, backgroundColor: 'black'}} />
        </View>
    )
}