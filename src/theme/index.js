import palx from 'palx';

// Colours
const palette = palx('#07c');

const colors = {
  white: '#ffffff',
  black: palette.black,
  gray9: palette.gray[9],
  gray8: palette.gray[8],
  gray7: palette.gray[7],
  gray6: palette.gray[6],
  gray5: palette.gray[5],
  gray4: palette.gray[4],
  gray3: palette.gray[3],
  gray2: palette.gray[2],
  gray1: palette.gray[1],
  gray0: palette.gray[0],
  primary: palette.violet[9],
};

const theme = {
  bg: colors.white,
  text: colors.gray9,
  title: colors.primary,
};

// # Borders
const radius = '4px';

// # Fonts
const font = '\'Open Sans\', sans-serif';
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

export default {
  radius,
  font,
  fontSizes,
  colors: {
    ...colors,
    ...theme,
  },
};
