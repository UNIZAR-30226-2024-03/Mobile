/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Common header for displaying playlist info accross the app.
 * 
 */

import { AppColorPalette, menuOptionType } from "../constants/types"
import { StyleSheet, Text, View } from "react-native"
import { PlayButton } from "./Buttons/PlayButton"
import Icon from 'react-native-vector-icons/Ionicons'

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
            <Icon name="lock-open-outline" color={AppColorPalette.mainBlue} size={35} style={styles.icon} />
            <Icon name="link" color={AppColorPalette.mainBlue} size={35} style={styles.icon} />
            <Icon name="people-outline" color={AppColorPalette.mainBlue} size={35} style={styles.icon}  />
        </View>
    )
}

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
                <Icon name="person" size={50} />
            </View>
            <View style={styles.sndcol}>
                <View style={styles.playListDescription}>
                    {
                            uhp.pinfo.isPublic ? 
                                <PublicIcons /> : 
                                <Icon name="lock-closed-outline" size={35} color={AppColorPalette.mainBlue} />
                    }
                    <Text style={{ fontSize: 20 }} >{uhp.pinfo.name}</Text>
                    <Text >{uhp.pinfo.numSongs} canciones | {uhp.pinfo.duration} minutos</Text>
                </View>
                <View style={styles.playListActions}>
                    <Icon name="shuffle-outline" size={35} color={AppColorPalette.mainBlue} />
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
        backgroundColor: AppColorPalette.ultraLightBlue,
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
