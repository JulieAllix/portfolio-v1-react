import tinycolor from 'tinycolor2';

export const lighten = (color, percent) => tinycolor(color).lighten(percent).toString();
export const darken = (color, percent) => tinycolor(color).darken(percent).toString();

const theme = {
  basicColor: 'black',
  colorOne: '#d54d62',
  /* #71a95a */
  colorTwo: '#82957f',
  colorThree: '#fbbd08',

  julieFont: 'Lobster',
  contentFont: 'Lato',
  titleFont: 'Shadows Into Light Two',
  /*
  'Loved by the King'
  'Handlee'
  */
  bigTitleSize: '1.8em',
  titleSize: '22px',
  contentSize: '18px',
  /*
  titleSize: '1.6em',
  contentSize: '1.3em',
  */
};

export default theme;
