/**
 * PlayBeat - Global Track Player
 * Team: Barbara H. Liskov 03
 * UNIZAR-30226-2024-03
 *
 * Custom button for multiple purposes.
 *
 */

import React from 'react';
import {Button, GestureResponderEvent} from 'react-native';
import {AppColorPalette, UserScreenMode} from '../../constants/types';

/**
 * @field `mode` refer to {@link UserScreenMode}
 * @field `cbAction` callback action set to button's onPress
 */
type CustomButtonProps = {
  mode: UserScreenMode;
  cbAction: ((event: GestureResponderEvent) => void) | undefined;
};

/**
 * @field `title` label given to the button
 * @field `color` background color for the button
 */
type ButtonModeResult = {
  title: string;
  color: string;
};

/**
 * Parse button mode
 * @param mode refer to {@link UserScreenMode}
 * @returns parsed result inside {@link ButtonModeResult}
 */
const buttonModeColorPalette = (mode: UserScreenMode): ButtonModeResult => {
  switch (mode) {
    case UserScreenMode.PUBLIC: {
      return {title: 'SEGUIR', color: AppColorPalette.mainBlue};
    }
    case UserScreenMode.LOCAL: {
      return {title: 'EDITAR', color: AppColorPalette.red};
    }
    case UserScreenMode.EDIT: {
      return {title: 'GUARDAR', color: AppColorPalette.green};
    }
  }
};

/**
 * Defines a custom action and style button
 * @param cbp Refer to {@link CustomButtonProps}
 * @returns Multi Purpose button with a predefined onPress action, label and color
 */
export const CustomButton = (cbp: CustomButtonProps) => {
  const bmResult = buttonModeColorPalette(cbp.mode);
  return <Button {...bmResult} onPress={cbp.cbAction} />;
};
