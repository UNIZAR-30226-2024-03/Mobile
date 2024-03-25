import { LayoutRectangle } from "react-native"

export type PopupMenuItemType = {
    text: string,
    action: () => any
}

export type GenericPopupMenuProps = {
    items: PopupMenuItemType[],
    visible: boolean, 
    setVisibility: any,
    coord: { x: number, y: number }
}