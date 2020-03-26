import tinycolor from 'tinycolor2';

export const lighten = (color, percent) => tinycolor(color).lighten(percent).toString();
export const darken = (color, percent) => tinycolor(color).darken(percent).toString();

const theme = {
  colorOne: '#5bb371',
  colorTwo: '#5bb371',
  julieFont: 'Lobster',
  contentFont: 'Lato',
};

export default theme;
