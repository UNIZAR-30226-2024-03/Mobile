/**
 * @enum `PUBLIC` public view of a user
 * @enum `LOCAL` local view of a user
 * @enum `EDIT` view while editting
 */
export enum UserScreenMode {
  PUBLIC,
  LOCAL,
  EDIT,
}

export const AppColorPalette = {
  lightBlue: '#98AED5',
  mainBlue: '#6985C0',
  ultraLightBlue: '#CDD6EA',
  red: '#DE5555',
  green: '#239411',
  white: '#FFFFFF',
  mainGray: '#4A4A4A',
  black: '#242423',
};

export interface menuOptionType {
  title: string;
  color: string;
  action: () => any;
}

export interface PlaceholderElements {
  index: string;
  elements: React.JSX.Element[];
}
