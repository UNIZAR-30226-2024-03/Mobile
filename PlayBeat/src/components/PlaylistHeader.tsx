/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Common header for displaying playlist info accross the app.
 * 
 */

import { AppColorPalette } from "../constants/types"
import { Image, StyleSheet, Text, View } from "react-native"
import { PlayButton } from "./Buttons/PlayButton"

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

/**
 * Renders a header for a playlist
 * @param uhp refer to {@link PlaylistHeaderProps }
 * @returns 
 */
export const PlaylistHeader = (uhp: PlaylistHeaderProps) => {

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
                    <Image style={styles.icon} source={require('../assets/icons/ellipsis-horizontal.png')} ></Image>
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
