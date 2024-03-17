/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Common header for displaying playlist info accross the app.
 * 
 */

import { AppColorPalette, menuOptionType } from "../constants/types"
import { Image, StyleSheet, Text, View } from "react-native"
import { PlayButton } from "./Buttons/PlayButton"
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler"
import { useState } from "react"
import OptionsList from "./OptionsList"

/**
 * @field `name` - Playlist's name
 * @field `numSongs` - number of songs in the Playlist
 * @field `duration` - total duration of all songs in the Playlist
 * @field `profilePicture` - picture representing the Playlist
 * @field `isPublic` - Playlist's visibility
 */
type PlaylistInfo = {
    name: string, 
    numSongs: number,
    duration: number,
    profilePicture: string,
    isPublic: boolean,
}

/**
 * @field pinfo -  refer to {@link PlaylistInfo}
 */
type PlaylistHeaderProps = {
    pinfo: PlaylistInfo
}

/**
 * Renders 3 icons in a row for identifying visibility, sharing link and contributors of a playlist
 * @returns 
 */
const PublicIcons = () => {
    return (
        <View style={styles.iconsRow}>
            <Image style={styles.icon} source={require('../assets/icons/lock-open-outline.png')} ></Image>
            <Image style={styles.icon} source={require('../assets/icons/link.png')} ></Image>
            <Image style={styles.icon} source={require('../assets/icons/people-outline.png')} ></Image>
        </View>
    )
}

const menuOptionsActions: menuOptionType[] = [
    {
        title: "Add to queue",
        color: AppColorPalette.white,
        action: () => null
    },
    {
        title: "Edit details",
        color: AppColorPalette.white,
        action: () => null
    },
    {
        title: "Invite collaborators",
        color: AppColorPalette.white,
        action: () => null
    },
    {
        title: "Make private",
        color: AppColorPalette.white,
        action: () => null
    },
    {
        title: "Delete playlist",
        color: AppColorPalette.red,
        action: () => null
    },

]

/**
 * Renders a header for a playlist
 * @param uhp refer to {@link PlaylistHeaderProps }
 * @returns 
 */
export default function PlaylistHeader(uhp: PlaylistHeaderProps) {
    //const [menuOpen, setMenuOpen] = useState(false);
    const copyLinkToClipboard = () => {

    }

    const getPeopleInPlaylist = () => {

    }

    return (
        <View style={styles.header} >
            <View style={styles.fstcol} >
                <PlayButton />
                <Image style={styles.image} source={require('../assets/icons/person.png')} ></Image>
            </View>
            <View style={styles.sndcol}>
                <View style={styles.playListDescription}>
                    {
                            uhp.pinfo.isPublic ? 
                                <PublicIcons /> : 
                                <Image style={styles.icon} source={require('../assets/icons/lock-closed-outline.png')} ></Image>
                    }
                    <Text style={{ fontSize: 20 }} >{uhp.pinfo.name}</Text>
                    <Text >{uhp.pinfo.numSongs} canciones | {uhp.pinfo.duration} minutos</Text>
                </View>
                <View style={styles.playListActions}>
                    <Image style={styles.icon} source={require('../assets/icons/shuffle-outline.png')} ></Image>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: AppColorPalette.lightBlue,
        paddingHorizontal: 20,
    },
    fstcol: {
        flex: 1,
        flexDirection: "column-reverse",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    sndcol: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    image: {
        width: 50,
        height: 50,
    },
    icon: {
        width: 35,
        height: 35,
        marginHorizontal: 20,
    },
    playListDescription: {
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconsRow: {
        flexDirection: 'row',
    },
    playListActions: {
        flexDirection: 'row',
        alignItems: "flex-start"
    }
})
