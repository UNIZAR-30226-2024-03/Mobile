/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Generic Placeholder for any sort of information. Rectangle Shape
 * 
 */

import { Image, LayoutRectangle, Modal, Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import { AppColorPalette, PlaceholderElements } from "../constants/types";
import { GestureHandlerRootView, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { DragListRenderItemInfo } from "react-native-draglist"
import { useState } from "react";

const Divider = (props:any) => {
    return (
        <View style={{ backgroundColor: "black", height: 1, ...props }} />
    )
}

export default function GenericPlaceholder({
    movable,
    dragInfo,
}: {
    movable: boolean,
    dragInfo: DragListRenderItemInfo<PlaceholderElements>,
}) {

    

    const {item, onDragStart, onDragEnd, isActive} = dragInfo;
    const [modalVisibility, setModalVisibility] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [modalViewHeight, setModalViewHeight] = useState<LayoutRectangle>({height: 10000, x: 0, y: 0, width: 0});
    return (
        <GestureHandlerRootView>
            <View style={styles.main} >
                { movable && (
                    
                        <TouchableOpacity
                        key={item.index}
                        onPressIn={onDragStart}
                        onPressOut={onDragEnd}>
                            <Image style={styles.icon} source={require('../assets/icons/move-outline.png')} />
                        </TouchableOpacity>
                    
                ) }
                { item.elements.map((v, i, a) => v) }
                <TouchableOpacity onPress={() => setModalVisibility(true)} >
                    <Image 
                        style={styles.icon} 
                        source={require('../assets/icons/ellipsis-horizontal.png')} 
                        // measureInWindow considers the whole Window, including scrollable items
                        ref={ref =>  {ref?.measureInWindow((x, y) => setPosition({x, y}))}} 
                        />
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={modalVisibility}>
                    <View style={{...styles.modalView, 
                        top: Math.min(Dimensions.get("window").height - modalViewHeight.height - 50, position.y), 
                        left: Dimensions.get("window").width - 2* modalViewHeight.width}}
                        onLayout={({nativeEvent}) => setModalViewHeight(nativeEvent.layout)} >
                        <Pressable onPress={() => null} style={styles.menuItem} >
                            <Text>Add to queue</Text>
                        </Pressable>
                        <Divider props={{ width: "100%" }} />
                        <Pressable onPress={() => null} style={styles.menuItem} >
                            <Text>Remove from this playlist</Text>
                        </Pressable>
                        <Divider props={{ width: "100%" }} />
                        <Pressable onPress={() => null} style={styles.menuItem} >
                            <Text>Add to playlist</Text>
                        </Pressable>
                        <Divider props={{ width: "100%" }} />
                        <Pressable onPress={() => null} style={styles.menuItem} >
                            <Text>Go to album</Text>
                        </Pressable>
                        <Divider props={{ width: "100%" }} />
                        <Pressable onPress={() => null} style={styles.menuItem} >
                            <Text>Go to artist</Text>
                        </Pressable>
                        <Divider props={{ width: "100%" }} />
                        <Pressable onPress={() => setModalVisibility(false)}>
                            <Text>Close</Text>
                        </Pressable>
                    </View>
                </Modal>
            </View>
        </GestureHandlerRootView>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: AppColorPalette.mainGray,
        borderColor: AppColorPalette.black,
        borderWidth: 1,
        width: "100%",
        height: 100,

    },
    icon: {
        width: 35,
        height: 35,
        marginHorizontal: 20,
    },
    menuContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 2,
        width: "50%"
    },
    modalView: {
        justifyContent: "center",
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
        padding: 4
    }
})