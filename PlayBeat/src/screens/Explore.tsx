import { Text, View, Image } from "react-native";
import UserHeader from "../components/UserHeader";
import { AppColorPalette, UserScreenMode } from "../constants/types";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaylistHeader from "../components/PlaylistHeader";
import { FloatingAction } from "react-native-floating-action";


const actions = [
    {
      text: "Accessibility",
      name: "bt_accessibility",
      position: 2,
      buttonSize: 0,
    },
    {
      text: "Language",
      icon: require("../assets/icons/cog-outline.png"),
      name: "bt_language",
      position: 1
    },
    {
      text: "Location",
      icon: require("../assets/icons/cog-outline.png"),
      name: "bt_room",
      position: 3
    },
    {
      text: "Video",
      icon: require("../assets/icons/cog-outline.png"),
      name: "bt_videocam",
      position: 4
    }
  ];

export const ExploreScreen = () => {
    const doThing = (name?: string) => {
        console.log(`selected button: ${name}`);
    }
    return (
        <View style={{flex:1}}>
            <View style={{flex: 2}} >
                <PlaylistHeader pinfo={{ name: 'Playlist 1', numSongs: 20, duration: 60, profilePicture: '../assets/icons/person.png', isPublic: true}} />
            </View>
            <View style={{flex: 2, backgroundColor: 'red'}} />
            <View style={{flex: 3, backgroundColor: 'black'}} />
            <FloatingAction
              floatingIcon={require('../assets/icons/ellipsis-horizontal.png')}
              actions={actions}
              iconHeight={35}
              iconWidth={35}
              color={AppColorPalette.lightBlue}
              onPressItem={doThing}
            />
        </View>
    )
}