'use strict';
const red = '#FF1690';
const blue = '#7aa2f7';
const cyan = '#0A9DD6';
const black = '#000000';
const green = '#36CDC4';
const white = '#ffffff';
const yellow = '#F4D676';
const magenta = '#5C2686';
const foregroundcolor = '#bb9af7';
const backgroundcolor = '#1a1b26';

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    cursorColor: red,
    foregroundColor: foregroundcolor,
    backgroundColor: backgroundcolor,
    borderColor: red,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: black,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: white
    },
    css: `
      ${config.css || ''}

      .hyper_main {
        border-width: 0px;
      }
    `
  });
};