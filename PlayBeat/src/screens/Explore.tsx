/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03
 *
 * Explore page
 *
 */

import React from 'react';
import {Text, View, Image} from 'react-native';
import {AppColorPalette, PlaceholderElements} from '../constants/types';
import PlaylistHeader from '../components/PlaylistHeader';
import {FloatingAction} from 'react-native-floating-action';
import MovableFlatlist from '../components/MovableFlatlist';
import {Reducer, createContext, useReducer} from 'react';
import {PlaylistActions} from '../utils/PlaylistActions';
import {ActionType} from '../components/types/GenericPopupMenuTypes';
import {createCustomContext} from '../utils/CreateContext';
import {QueueActions} from '../utils/QueueActions';
import {RoutingActions} from '../utils/RoutingActions';
import Icon from 'react-native-vector-icons/Ionicons';

const actions = [
  {
    text: 'Add to Queue',
    name: 'add_to_queue',
    position: 1,
    buttonSize: 0,
  },
  {
    text: 'Edit details',
    icon: <Icon name="cog-outline" />,
    name: 'edit_details',
    position: 2,
  },
  {
    text: 'Make public',
    icon: <Icon name="cog-outline" />,
    name: 'make_public',
    position: 3,
  },
  {
    text: 'Delete Playlist',
    icon: <Icon name="cog-outline" />,
    name: 'delete_playlist',
    position: 4,
  },
];

const contained_info: PlaceholderElements[] = [
  {
    index: 'title',
    elements: [<Text>Testing</Text>, <Text>Testing jaja</Text>],
  },
  {
    index: 'title2',
    elements: [<Text>Testing2</Text>, <Text>Testing jaja2</Text>],
  },
  {
    index: 'title3',
    elements: [<Text>Testing3</Text>, <Text>Testing jaja2</Text>],
  },
  {
    index: 'title4',
    elements: [<Text>Testing4</Text>, <Text>Testing jaja2</Text>],
  },
  {
    index: 'title5',
    elements: [<Text>Testing5</Text>, <Text>Testing jaja2</Text>],
  },
  {
    index: 'title6',
    elements: [<Text>Testing6</Text>, <Text>Testing jaja2</Text>],
  },
  {
    index: 'title7',
    elements: [<Text>Testing7</Text>, <Text>Testing jaja2</Text>],
  },
];

const handlePlaylistActions: Reducer<
  {data: PlaceholderElements[]},
  {type: ActionType; on?: PlaceholderElements}
> = (state, action) => {
  let applyOn = action.on ?? state.data[0];
  switch (action.type) {
    case PlaylistActions.RemoveSong: {
      // fully remove song from playlist
      return {
        data: state.data.filter(({index}) => index !== applyOn.index),
      };
    }
    case PlaylistActions.AddSong: {
      // save screen state
      // capture the song somehow
      // go to user's playlist screen
      // Add song to a playlist selected by the user
      // recover state
    }
    case QueueActions.AddSong: {
      // add song to queue
    }
    case RoutingActions.ToAlbum: {
      // go to the album the song has been published in
    }
    case RoutingActions.ToArtist: {
      // go to the artist who published the song
    }
    default: {
      return state;
    }
  }
};

export const ExploreScreen = () => {
  const doThing = (name?: string) => {
    console.log(`selected button: ${name}`);
  };

  const [playlistState, playlistReducer] = useReducer(handlePlaylistActions, {
    data: contained_info,
  });
  const PlaylistContext = createCustomContext(null);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2}}>
        <PlaylistHeader
          pinfo={{
            name: 'Playlist 1',
            numSongs: playlistState.data.length,
            duration: 60,
            profilePicture: '../assets/icons/person.png',
            isPublic: true,
          }}
        />
      </View>
      <View style={{flex: 6}}>
        <PlaylistContext.Provider value={{contained_info: playlistState.data}}>
          <MovableFlatlist
            movable={true}
            ctx={PlaylistContext}
            dispatchActionOnItem={(
              action: ActionType,
              item: PlaceholderElements,
            ) => playlistReducer({type: action, on: item})}
          />
        </PlaylistContext.Provider>
      </View>
      <FloatingAction
        floatingIcon={<Icon name="ellipsis-horizontal" size={35} />}
        actions={actions}
        color={AppColorPalette.lightBlue}
        onPressItem={(name?: string) => {
          let action: ActionType;
          switch (name) {
            case 'add_to_queue': {
              action = QueueActions.AddSong;
              break;
            }
            case 'edit_details': {
              action = RoutingActions.ToPlaylistDetails;
              break;
            }
            case 'make_public': {
              action = PlaylistActions.TurnPublic;
              break;
            }
            case 'delete_playlist': {
              action = PlaylistActions.Delete;
              break;
            }
            default: {
              action = PlaylistActions.Void;
              break;
            }
          }
          playlistReducer({type: action});
        }}
      />
    </View>
  );
};
