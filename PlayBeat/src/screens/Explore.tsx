import { Text, View, Image } from "react-native";
import { AppColorPalette, PlaceholderElements } from "../constants/types";
import PlaylistHeader from "../components/PlaylistHeader";
import { FloatingAction } from "react-native-floating-action";
import MovableFlatlist from "../components/MovableFlatlist";
import { Reducer, createContext, useReducer } from "react";
import { PlaylistActions } from "../utils/PlaylistActions";
import { ActionType } from "../components/types/GenericPopupMenuTypes";
import { createCustomContext } from "../utils/CreateContext";


const actions = [
  {
    text: "Accessibility",
    name: "bt_accessibility",
    position: 2,
    buttonSize: 0,
  },
  {
    text: "Language",
    icon: require("../assets/icons/cog-outline.png"),
    name: "bt_language",
    position: 1
  },
  {
    text: "Location",
    icon: require("../assets/icons/cog-outline.png"),
    name: "bt_room",
    position: 3
  },
  {
    text: "Video",
    icon: require("../assets/icons/cog-outline.png"),
    name: "bt_videocam",
    position: 4
  }
];


  const contained_info : PlaceholderElements[] = [
    {
      index: "title",
      elements: [
        (
          <Text>Testing</Text>
        ),
        (
          <Text>Testing jaja</Text>
        )
      ]
    },
    {
      index: "title2",
      elements: [
        (
          <Text>Testing2</Text>
        ),
        (
          <Text>Testing jaja2</Text>
        )
      ]
    },
    {
      index: "title3",
      elements: [
        (
          <Text>Testing3</Text>
        ),
        (
          <Text>Testing jaja2</Text>
        )
      ]
    },
    {
      index: "title4",
      elements: [
        (
          <Text>Testing4</Text>
        ),
        (
          <Text>Testing jaja2</Text>
        )
      ]
    },
    {
      index: "title5",
      elements: [
        (
          <Text>Testing5</Text>
        ),
        (
          <Text>Testing jaja2</Text>
        )
      ]
    },
    {
      index: "title6",
      elements: [
        (
          <Text>Testing6</Text>
        ),
        (
          <Text>Testing jaja2</Text>
        )
      ]
    },
    {
      index: "title7",
      elements: [
        (
          <Text>Testing7</Text>
        ),
        (
          <Text>Testing jaja2</Text>
        )
      ]
    }
  ]



const handlePlaylistActions: Reducer<{data : PlaceholderElements[]}, {type: ActionType, on: PlaceholderElements}> = (state, action) => {
  if (action.type == PlaylistActions.RemoveSong) {
    console.log(state.data)
    return {
      data: state.data.filter(({index}) => index != action.on.index)
    }
  }
  return {
    data: state.data.filter(({index}) => index != action.on.index)
  }
}


export const ExploreScreen = () => {
    const doThing = (name?: string) => {
        console.log(`selected button: ${name}`);
    }

    // get playlist info

    const [playlistState, playlistReducer] = useReducer(handlePlaylistActions, { data: contained_info })
    const PlaylistContext = createCustomContext(null)

    return (
        <View style={{flex:1}}>
            <View style={{flex: 2}} >
                <PlaylistHeader pinfo={{ name: 'Playlist 1', numSongs: 20, duration: 60, profilePicture: '../assets/icons/person.png', isPublic: true}} />
            </View>
            <View style={{ flex: 6 }}>
              <PlaylistContext.Provider value={{ contained_info: playlistState.data }}>
                <MovableFlatlist 
                  movable={true}
                  ctx={PlaylistContext}
                  dispatchActionOnItem={(action: ActionType, item: PlaceholderElements) => playlistReducer({ type: action, on: item })} />
              </PlaylistContext.Provider>
            </View>
            <FloatingAction
              floatingIcon={require('../assets/icons/ellipsis-horizontal.png')}
              actions={actions}
              iconHeight={35}
              iconWidth={35}
              color={AppColorPalette.lightBlue}
              onPressItem={doThing}
            />
        </View>
    )
}