import { QueueActions } from "../../utils/QueueActions"
import { PlaylistActions } from "../../utils/PlaylistActions"
import { RoutingActions } from "../../utils/RoutingActions"

export type ActionType = QueueActions | PlaylistActions | RoutingActions

export interface PopupMenuItemType {
    text: string,
    actionKey: ActionType
}

export interface GenericPopupMenuProps {
    items: PopupMenuItemType[],
    visible: boolean, 
    setVisibility: any,
    coord: { x: number, y: number },
    dispatchCustomAction: (actionKey: ActionType) => any
}