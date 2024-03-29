/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03
 *
 * Generic Placeholder for any sort of information. Rectangle Shape
 *
 */

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppColorPalette, PlaceholderElements} from '../constants/types';
import {
  GestureHandlerRootView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {DragListRenderItemInfo} from 'react-native-draglist';
import {useState} from 'react';
import GenericPopupMenu from './GenericPopupMenu';
import {ActionType, PopupMenuItemType} from './types/GenericPopupMenuTypes';
import Icon from 'react-native-vector-icons/Ionicons';

export default function GenericPlaceholder({
  movable,
  dragInfo,
  popupInfo,
  dispatchActionOnItem,
}: {
  movable: boolean;
  dragInfo: DragListRenderItemInfo<PlaceholderElements>;
  popupInfo: PopupMenuItemType[];
  dispatchActionOnItem: any;
}) {
  const {item, onDragStart, onDragEnd, isActive} = dragInfo;
  const [modalVisibility, setModalVisibility] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  const dispatchAction = (actionKey: ActionType) => {
    console.log(
      'Dispatching action: ' + actionKey.toString() + ' on ' + item.index,
    );
    dispatchActionOnItem(actionKey, item);
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.main}>
        {movable && (
          <TouchableOpacity
            key={item.index}
            onPressIn={onDragStart}
            onPressOut={onDragEnd}
            useNativeAnimations={true}>
            <Icon
              name="move-outline"
              color={AppColorPalette.black}
              size={35}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        {item.elements.map((v, i, a) => v)}
        <TouchableOpacity onPress={() => setModalVisibility(true)}>
          <Image
            style={styles.image}
            source={require('../assets/icons/ellipsis-horizontal.png')}
            // measureInWindow considers the whole Window, including scrollable items
            ref={ref => {
              ref?.measureInWindow((x, y) => setPosition({x, y}));
            }}
          />
        </TouchableOpacity>
        <GenericPopupMenu
          visible={modalVisibility}
          setVisibility={setModalVisibility}
          coord={position}
          items={popupInfo}
          dispatchCustomAction={dispatchAction}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColorPalette.mainGray,
    borderColor: AppColorPalette.black,
    borderWidth: 1,
    width: '100%',
    height: 100,
  },
  icon: {
    marginHorizontal: 20,
  },
  menuContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 2,
    width: '50%',
  },
  image: {
    width: 35,
    height: 35,
    marginHorizontal: 20,
  },
});
