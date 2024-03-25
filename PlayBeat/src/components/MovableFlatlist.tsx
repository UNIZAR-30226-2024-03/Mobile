/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03 
 *
 * Generic Flatlist holding generic placeholders that can also be movable.
 * 
 */
import { useState } from "react"
import { StyleSheet, View } from "react-native"
import DragList, { DragListRenderItemInfo } from "react-native-draglist"
import GenericPlaceholder from "./GenericPlaceholder"
import { PlaceholderElements } from "../constants/types"
import { PopupMenuItemType } from "./types/GenericPopupMenuTypes"



const popupInfo: PopupMenuItemType[] = [
    {
        text: "Add to queue",
        action: () => null
    },
    {
        text: "Remove from this playlist",
        action: () => null
    },
    {
        text: "Add to playlist",
        action: () => null
    },
    {
        text: "Go to album",
        action: () => null
    },
    {
        text: "Go to artist",
        action: () => null
    }
]

export default function MovableFlatlist({
    movable,
    contained_info
}: {
    movable: boolean,
    contained_info: PlaceholderElements[]
}) {
    const [data, setData] = useState(contained_info)

    const keyExtractor = (pe: PlaceholderElements) => {
        return pe.index;
    }
    
    const renderItem = (info: DragListRenderItemInfo<PlaceholderElements>) => {
        return <GenericPlaceholder movable={true} dragInfo={info} popupInfo={popupInfo} />
    }

    async function onReordered(fromIndex: number, toIndex: number) {
        const copy = [...data]; // Don't modify react data in-place
        const removed = copy.splice(fromIndex, 1);
        console.log("Removed: " + removed);
        console.log("From index: " + fromIndex);
        console.log("To index:" + toIndex);
    
        copy.splice(toIndex, 0, removed[0]); // Now insert at the new pos
        setData(copy);
    }

    return (
        <View>
            <DragList<PlaceholderElements>
            data={data}
            keyExtractor={keyExtractor}
            onReordered={onReordered}
            renderItem={renderItem}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    
})
