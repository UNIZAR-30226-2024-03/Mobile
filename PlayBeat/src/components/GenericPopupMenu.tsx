/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Generic Popup Menu for three-dots interaction in generic placeholder
 * 
 */


import { useState } from "react";
import { AppColorPalette } from "../constants/types";
import { GenericPopupMenuProps, PopupMenuItemType } from "./types/GenericPopupMenuTypes";
import {Dimensions, LayoutRectangle, Modal, Pressable, StyleSheet, Text, View} from "react-native";

const Divider = (props:any) => {
    return (
        <View style={{ backgroundColor: "black", height: 1, ...props }} />
    )
}

export default function GenericPopupMenu({items, visible, setVisibility, coord}: GenericPopupMenuProps) {
    const [modalViewHeight, setModalViewHeight] = useState<LayoutRectangle>({height: 10000, x: 0, y: 0, width: 0});
    return (
        <Modal
        transparent={true}
        animationType="fade"
        visible={visible}>
            <View style={{...styles.modalView, 
                top: Math.min(Dimensions.get("window").height - modalViewHeight.height - 50, coord.y), 
                left: Dimensions.get("window").width - 2* modalViewHeight.width}}
                onLayout={({nativeEvent}) => setModalViewHeight(nativeEvent.layout)} >
                {
                    items.map((item: PopupMenuItemType) => (
                        <View style={styles.menuItem} >
                            <Pressable onPress={() => item.action}  >
                                <Text>{ item.text }</Text>
                            </Pressable>
                            <Divider props={{ width: "100%" }} />
                        </View>
                    ))
                }
                <Pressable onPress={() => setVisibility(false)}>
                    <Text style={{ color: "red" }} > Close </Text>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        flexDirection: "column",
        alignSelf: "center",
        padding: 5,
        backgroundColor: AppColorPalette.ultraLightBlue,
        color: AppColorPalette.black,
        borderColor: AppColorPalette.white,
        borderWidth: 2,
        borderRadius: 20
    },
    menuItem: {
        padding: 4,
    }
})