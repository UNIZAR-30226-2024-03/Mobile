/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03
 *
 * List of options for the user to select from
 *
 */

import React from 'react';
import {SectionList, StyleSheet, View, Text} from 'react-native';
import {AppColorPalette, menuOptionType} from '../constants/types';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function OptionsList({options}: {options: menuOptionType[]}) {
  return (
    <View style={styles.menu}>
      <SectionList
        sections={[{data: options}]}
        renderItem={({item}) => (
          <TouchableOpacity onPress={item.action} style={styles.item}>
            <Text style={{color: item.color}}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: AppColorPalette.mainGray,
    borderColor: AppColorPalette.white,
  },
  menu: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
