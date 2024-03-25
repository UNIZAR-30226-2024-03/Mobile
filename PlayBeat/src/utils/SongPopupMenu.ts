import { PopupMenuItemType } from "../components/types/GenericPopupMenuTypes";
import { PlaylistActions } from "./PlaylistActions";
import { QueueActions } from "./QueueActions";
import { RoutingActions } from "./RoutingActions";


export const songPopupMenu: PopupMenuItemType[] = [
    {
        text: "Add to queue",
        actionKey: QueueActions.AddSong
    },
    {
        text: "Remove from this playlist",
        actionKey: PlaylistActions.RemoveSong
    },
    {
        text: "Add to playlist",
        actionKey: PlaylistActions.AddSong
    },
    {
        text: "Go to album",
        actionKey: RoutingActions.ToAlbum
    },
    {
        text: "Go to artist",
        actionKey: RoutingActions.ToArtist
    }
]