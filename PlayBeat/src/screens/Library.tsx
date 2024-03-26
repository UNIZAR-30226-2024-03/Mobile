/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03
 *
 * Library page
 *
 */

import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import {AppColorPalette, PlaceholderElements} from '../constants/types';
import PlaylistHeader from '../components/PlaylistHeader';
import {FloatingAction} from 'react-native-floating-action';
import MovableFlatlist from '../components/MovableFlatlist';
import {Reducer, createContext, useReducer} from 'react';

export const LibraryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tu Biblioteca</Text>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: AppColorPalette.black,
  },
};
