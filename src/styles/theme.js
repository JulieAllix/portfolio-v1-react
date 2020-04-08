import tinycolor from 'tinycolor2';

export const lighten = (color, percent) => tinycolor(color).lighten(percent).toString();
export const darken = (color, percent) => tinycolor(color).darken(percent).toString();

const theme = {
  basicColor: 'black',
  colorOne: '#71a95a',
  /*
  #d54d62
  #543864
#fb7b6b
  */
  colorTwo: '#82957f',
  colorThree: '#fbbd08',
  reactColor: '#00d8ff',
  softSkillsColor: '#764abc',
  axiosColor: '#029ae1',
  javaScriptColor: '#f0d91d',
  julieFont: 'Lobster',
  contentFont: 'Lato',
  titleFont: 'Shadows Into Light Two',
  /*
  'Loved by the King'
  'Handlee'
  */
};

export default theme;
