import palx from 'palx';

const palette = palx('#07c');

const colors = {
  white: '#ffffff',
  black: palette.black,
  gray2: palette.gray[2],
  primary: palette.blue[9],
};

const theme = {
  bg: colors.white,
  text: colors.black,
  title: colors.primary,
};

const font = '\'Open Sans\', sans-serif';
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];


const breakpoints = ['0px', '768px'];

breakpoints.sm = breakpoints[0];
breakpoints.lg = breakpoints[1];

export default {
  font,
  fontSizes,
  breakpoints,
  colors: {
    ...colors,
    ...theme,
  },
};
