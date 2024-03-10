/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Common header for displaying user info accross the app.
 * 
 */

import { CustomButton } from "./Buttons/CustomButton"
import { AppColorPalette, UserScreenMode } from "../constants/types"
import { Image, StyleSheet, Text, View } from "react-native"

type UserInfo = {
    name: string, 
    tag: string,
    noFollowers: number,
    profilePicture: string,
}

type UserHeaderProps = {
    uinfo: UserInfo,
    mode: UserScreenMode
}

export const UserHeader = (uhp: UserHeaderProps) => {


    return (
        <View style={styles.header} >
            <View style={styles.fstcol} >
                <Text>{uhp.uinfo.tag}</Text>
                <Text>{uhp.uinfo.name}</Text>
            </View>
            <View style={styles.midcol}>
                <Image source={require('../assets/icons/person.png')} style={styles.logo} ></Image>
                <Text>{String(uhp.uinfo.noFollowers)} followers </Text>
            </View>
            <View style={styles.lastcol}>
                <CustomButton mode={uhp.mode} cbAction={() => null} ></CustomButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 'auto',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: AppColorPalette.lightBlue,
        paddingHorizontal: 20,
    },
    fstcol: {
        flex: 1,
        flexDirection: "column-reverse"
    },
    midcol: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
        height: '20%',
        width: '10%'
    },
    lastcol: {
        flex: 1,
        alignItems: "flex-end",
        flexDirection: "column-reverse"
    },
    logo: {
        width: 50,
        height: 50,
      },
})
